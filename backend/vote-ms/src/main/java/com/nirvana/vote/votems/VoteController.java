package com.nirvana.vote.votems;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/vote")
public class VoteController {

    @Autowired
    private VoteService voteService;

    @GetMapping
    public ResponseEntity<List<Vote>> getVotes() {
        return ResponseEntity.ok(voteService.getVotes());
    }

    @PostMapping()
    public ResponseEntity<String> registerVote(@RequestBody Vote vote) {
        return ResponseEntity.ok(voteService.registerVote(vote));
    }

    @GetMapping("/{vote_id}")
    public ResponseEntity<Vote> getVoteById(Long vote_id) {
        return ResponseEntity.ok(voteService.getVoteById(vote_id));
    }

    @GetMapping("/alreadyVoted")
    public ResponseEntity<Vote> alreadyVoted(String voter_id, Long election_id) {
        return ResponseEntity.ok(voteService.alreadyVoted(voter_id, election_id));
    }

    @PostMapping("/votes")
    public ResponseEntity<Long> getVotesByElectionAndCandidates(
            @RequestParam Long election_id,
            @RequestBody List<Long> candidate_ids) {
        return ResponseEntity.ok(voteService.getVotesByElectionAndCandidate(election_id, candidate_ids));
    }
}
