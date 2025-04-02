package com.nirvana.vote.resultms.clients;

import com.nirvana.vote.resultms.dto.CandidateDto;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

@FeignClient(name="candidate",url="http://candidate:4001")
public interface CandidateClient {

    @GetMapping("/candidate/{candidate_id}")
    public CandidateDto getCandidateById(@PathVariable Long candidate_id);

}
