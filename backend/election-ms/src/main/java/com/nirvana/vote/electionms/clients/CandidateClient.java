package com.nirvana.vote.electionms.clients;


import com.nirvana.vote.electionms.dto.CandidateDto;
import org.springframework.cloud.openfeign.EnableFeignClients;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.List;

@FeignClient(name ="candidate-ms",url = "http://localhost:4001/candidate")
public interface CandidateClient {

    @GetMapping("/byElectionId")
        List<CandidateDto> getCandidatesByElectionId(@RequestParam("election_id") Long election_id);

}
