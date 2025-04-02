package com.nirvana.vote.resultms.clients;


import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.List;

@FeignClient(name = "vote")
public interface VoteClient {
    @PostMapping("/votes")
    public ResponseEntity<Long> getVotesByElectionAndCandidates(
            @RequestParam Long election_id,
            @RequestBody List<Long> candidate_ids);



}
