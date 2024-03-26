package com.java.bec.service.Impl;
import java.util.HashMap;

import java.util.Map;
import java.util.Optional;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import com.java.bec.Enum.Role;
import com.java.bec.Utils.JwtUtils;
import com.java.bec.dto.Request.ForgetPasswordRequest;
import com.java.bec.dto.Request.LoginRequest;
import com.java.bec.dto.Request.RegisterRequest;
import com.java.bec.dto.Response.BasicResponse;
import com.java.bec.dto.Response.LoginResponse;
import com.java.bec.model.Token;
import com.java.bec.model.User;
import com.java.bec.repository.TokenRepository;
import com.java.bec.repository.UserRepository;
import com.java.bec.service.AuthenticationService;
import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class AuthenticationServiceImpl implements AuthenticationService {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtUtils jwtUtils;
    private final TokenRepository tokenRepository;
    private final AuthenticationManager authenticationManager;

    @Override
    public BasicResponse<String> register(RegisterRequest registerRequest) {
        Optional<User> isUserExists = userRepository.findByEmail(registerRequest.getEmail());
        if (isUserExists.isPresent()) {
            return BasicResponse.<String>builder().message("User already exists with email id " + registerRequest.getEmail()).data("").build();
        }

        User user = User.builder()
                .username(registerRequest.getName())
                .mobilenumber(registerRequest.getMobilenumber())
                .email(registerRequest.getEmail())
                .userRole(Role.USER)
                .password(passwordEncoder.encode(registerRequest.getPassword()))
                .build();
        userRepository.save(user);
        return BasicResponse.<String>builder().message("User registered successfully").data("").build();
    }

    @Override
    public BasicResponse<LoginResponse> login(LoginRequest loginRequest) {
        authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(loginRequest.getEmail(), loginRequest.getPassword()));
        User user = userRepository.findByEmail(loginRequest.getEmail()).orElseThrow(() -> new UsernameNotFoundException("User not found"));
        Map<String, Object> claims = new HashMap<>();
        claims.put("role", user.getUserRole().toString());
        String accessToken = jwtUtils.generateToken(claims, user);
        revokeAllUserToken(user);
        saveUserToken(accessToken, user);
        return BasicResponse.<LoginResponse>builder()
                .message("User logged in successfully.")
                .data(LoginResponse.builder().accessToken(accessToken).build())
                .build();
    }

    private void saveUserToken(String accessToken, User user) {
        Token token = Token.builder().token(accessToken).user(user).expired(false).revoked(false).build();
        tokenRepository.save(token);
    }

    private void revokeAllUserToken(User user) {
        var validUserTokens = tokenRepository.findAllByUser_IdAndRevokedFalseAndExpiredFalse(user.getId());
        if (validUserTokens.isEmpty()) {
            return;
        }
        validUserTokens.forEach(token -> {
            token.setExpired(true);
            token.setRevoked(true);
        });
        tokenRepository.saveAll(validUserTokens);
    }

    @Override
    public BasicResponse<String> forgotPassword(ForgetPasswordRequest forgotPasswordRequest) {
        User user = userRepository.findByEmail(forgotPasswordRequest.getEmail()).orElseThrow(() -> new UsernameNotFoundException("User not found"));
        if (!passwordEncoder.matches(forgotPasswordRequest.getCurrentPassword(), user.getPassword())) {
            return BasicResponse.<String>builder().message("Wrong password").data("").build();
        }
        if (!forgotPasswordRequest.getNewPassword().equals(forgotPasswordRequest.getConfirmPassword())) {
            return BasicResponse.<String>builder().message("Password mismatch").data("").build();
        }
        user.setPassword(passwordEncoder.encode(forgotPasswordRequest.getNewPassword()));
        userRepository.save(user);
        return BasicResponse.<String>builder().message("Password updated successfully.").data("").build();
    }

}