package com.nirvana.vote.twilio.twiliootp.dto;

import com.nirvana.vote.twilio.twiliootp.OtpStatus;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ResponseDto {
    private OtpStatus status;
    private String message;
}
