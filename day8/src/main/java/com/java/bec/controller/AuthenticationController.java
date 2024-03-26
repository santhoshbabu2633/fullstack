package com.java.bec.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.service.annotation.PatchExchange;

import com.java.bec.dto.Request.ForgetPasswordRequest;
import com.java.bec.dto.Request.LoginRequest;
import com.java.bec.dto.Request.RegisterRequest;
import com.java.bec.dto.Response.BasicResponse;
import com.java.bec.dto.Response.LoginResponse;
import com.java.bec.service.AuthenticationService;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/bec/api/v1/authentication")
@RequiredArgsConstructor
@Tag(name="Authentication",description ="used for Authenticate & Authorize the user")
public class AuthenticationController {

    private final AuthenticationService authenticationService;

    @PostMapping("/register")
    @Operation(summary="user registration", description ="for registration purpose")
    public ResponseEntity<?> register(@RequestBody RegisterRequest registerRequest){
        BasicResponse<String>response=new BasicResponse<>();
        try{
            response=authenticationService.register(registerRequest);
            return new ResponseEntity<>(response,HttpStatus.ACCEPTED);

        }
        catch(Exception e)
        {
            response.setMessage("Something went wrong");
            response.setData("");
            return new ResponseEntity<>(response,HttpStatus.EXPECTATION_FAILED);

        }
    }
    @PostMapping("/login")
    @Operation(summary="User authentication",description="used for login purposes")
public ResponseEntity<?> login(@RequestBody LoginRequest loginRequest) {
    BasicResponse<LoginResponse> response = new BasicResponse<>();
    try {
        response = authenticationService.login(loginRequest);
        return new ResponseEntity<>(response, HttpStatus.OK);
    } catch (Exception e) {
        e.printStackTrace();
        response.setMessage("Something went wrong.");
        response.setData(LoginResponse.builder().accessToken("").build());
        return new ResponseEntity<>(response, HttpStatus.EXPECTATION_FAILED);
    }
}

    @PatchExchange("/forgot-password")
    @Operation(summary="reset user password",description="used for re-setting user password")
    public ResponseEntity<?> forgotPassword(@RequestBody ForgetPasswordRequest forgetPasswordRequest)
    {
        BasicResponse<String>response=new BasicResponse<>();
        try{
            response=authenticationService.forgotPassword(forgetPasswordRequest);
            return new ResponseEntity<>(response,HttpStatus.OK);
        }
        catch(Exception e)
        {
            response.setMessage("Something went wrong");
            response.setData("");
            return new ResponseEntity<>(response,HttpStatus.EXPECTATION_FAILED);
        }


    }
}
