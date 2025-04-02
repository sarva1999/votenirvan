package com.nirvana.vote.resultms.clients;


import com.nirvana.vote.resultms.dto.Election;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;


@FeignClient(name="election",url="http://election:4000")
public interface ElectionClient {

    @GetMapping("/election/{election_id}")
    public Election getElectionById(@PathVariable  Long election_id);

}
