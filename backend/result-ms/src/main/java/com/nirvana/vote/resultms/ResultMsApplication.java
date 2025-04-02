package com.nirvana.vote.resultms;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.openfeign.EnableFeignClients;

@SpringBootApplication
@EnableFeignClients
public class ResultMsApplication {

	public static void main(String[] args) {
		SpringApplication.run(ResultMsApplication.class, args);
	}

}
