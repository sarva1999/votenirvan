package com.nirvana.vote.twilio.twiliootp.Service;

import com.nirvana.vote.twilio.twiliootp.OtpStatus;
import com.nirvana.vote.twilio.twiliootp.config.TwilioConfig;
import com.nirvana.vote.twilio.twiliootp.dto.ResponseDto;
import com.nirvana.vote.twilio.twiliootp.dto.VoteValidationDto;
import com.twilio.rest.api.v2010.account.Message;
import com.twilio.type.PhoneNumber;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import reactor.core.publisher.Mono;

import java.text.DecimalFormat;
import java.util.HashMap;
import java.util.Map;
import java.util.Random;

@Service
public class OtpService {



    @Autowired
    private TwilioConfig twilioConfig;

    Map<String,String> otpMap = new HashMap<>();
    ResponseDto responseDto = null;
     public Mono<ResponseDto> sendOtp(VoteValidationDto  voteValidationDto) {
        try {
            PhoneNumber to = new PhoneNumber(voteValidationDto.getPhoneNumber());
            PhoneNumber from = new PhoneNumber(twilioConfig.getTrialNumber());
            String otp = generateOtp();
            String otpMessage = "Your Otp For Vote Validation is " + otp + " from Nirvana Voting Management.";
            Message message = Message
                    .creator(to,
                            from,
                            otpMessage
                    )
                    .create();
            otpMap.put(voteValidationDto.getVoterId(),otp);
            responseDto = new ResponseDto(OtpStatus.DELIVERED, otpMessage);
        }catch (Exception e){
            responseDto = new ResponseDto(OtpStatus.FAILED, e.getMessage());
        }

         return Mono.just(responseDto);
     }

     public Mono<String> validateOtp(String userInputOtp,String voterId){
         if(userInputOtp.equals(otpMap.get(voterId))){
             return Mono.just("Valid Otp");
         }else{
             return Mono.just("Invalid Otp");
         }
     }
    private String generateOtp() {
        return new DecimalFormat("000000").format(new Random().nextInt(999999));
    }
}
