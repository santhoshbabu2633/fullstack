package com.java.bec.service;

import com.java.bec.dto.Request.ForgetPasswordRequest;
import com.java.bec.dto.Request.LoginRequest;
import com.java.bec.dto.Request.RegisterRequest;
import com.java.bec.dto.Response.BasicResponse;
import com.java.bec.dto.Response.LoginResponse;

public interface AuthenticationService {
    BasicResponse<String> register(RegisterRequest registerRequest);

    BasicResponse<LoginResponse> login(LoginRequest loginRequest);

    BasicResponse<String> forgotPassword(ForgetPasswordRequest forgotPasswordRequest);
}