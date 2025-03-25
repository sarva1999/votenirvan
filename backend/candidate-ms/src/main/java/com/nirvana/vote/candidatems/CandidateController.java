package com.nirvana.vote.candidatems;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.config.annotation.CorsRegistry;

import java.util.List;

@RestController
@RequestMapping("/candidate")

public class CandidateController {

    @Autowired
    private CandidateService candidateService;

    @GetMapping()
    public ResponseEntity<List<Candidate>> getCandidates(){
        return ResponseEntity.ok(candidateService.getCandidatesAll());
    }

    @GetMapping("/{candidate_id}")
    public ResponseEntity<Candidate> getCandidateById(@PathVariable Long candidate_id){
        return ResponseEntity.ok(candidateService.getCandidateById(candidate_id));
    }



    @PostMapping
    public ResponseEntity<String> addCandidate(@RequestBody Candidate candidate){
        return ResponseEntity.ok(candidateService.createCandidate(candidate));
    }

    @PutMapping
    public ResponseEntity<String> updateCandidate(@RequestBody Candidate candidate){
        return ResponseEntity.ok(candidateService.updateCandidate(candidate));
    }
    @DeleteMapping("/{candidate_id}")
    public ResponseEntity<String> deleteCandidate(@PathVariable Long candidate_id){
        candidateService.deleteCandidateById(candidate_id);
        return ResponseEntity.ok("Successfully Candidate Deleted.");
    }

    @GetMapping("/byElectionId")
    public ResponseEntity<List<Candidate>> getCandidatesByElectionId(@RequestParam Long election_id){
        return ResponseEntity.ok(candidateService.getCandidatesByElectionId(election_id));
    }


}
