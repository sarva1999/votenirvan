package com.nirvana.vote.twilio.twiliootp.dto;

import lombok.Data;

@Data
public class VoteValidationDto {

     private String  phoneNumber ;
    private  String voterId;
    private  String otp;
}
