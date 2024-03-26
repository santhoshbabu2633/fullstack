package com.java.bec.dto.Request;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor

public class ForgetPasswordRequest {

    private String email;
    private String currentPassword;
    private String newPassword;
    private String confirmPassword;
    
}
