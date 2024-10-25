package com.jobportal.entity;

import java.time.LocalDateTime;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Document(collection = "otp")
@Data
@AllArgsConstructor
@NoArgsConstructor

public class OTP {
    @Id
    private String email;
    private String otpCode;
    private LocalDateTime creationTime;

}
