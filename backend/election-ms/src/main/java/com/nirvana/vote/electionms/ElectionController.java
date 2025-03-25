package com.nirvana.vote.electionms;



import com.nirvana.vote.electionms.dto.CandidateDto;
import com.nirvana.vote.electionms.dto.ElectionWithCandidateDto;
import com.nirvana.vote.electionms.exception.ResourceNotFound;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.config.annotation.CorsRegistry;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("election")
public class ElectionController {

    @Autowired
    private ElectionService electionService;

    @GetMapping
    public ResponseEntity<List<Election>> getAllElections() throws  ResourceNotFound {
         if(electionService.getElectionList().isEmpty()){
             throw new ResourceNotFound("No elections found");
         }else {
             return ResponseEntity.ok(electionService.getElectionList());
         }
    }

    @GetMapping("/{election_id}")
    public ResponseEntity<Election> getElectionById(@PathVariable Long election_id) throws  ResourceNotFound  {


        return ResponseEntity.ok(electionService.getElectionById(election_id).get());


    }

    @GetMapping("/{election_id}/active")
    public ResponseEntity<Boolean> getElectionActiveStatus(@PathVariable  Long election_id) throws ResourceNotFound {

            return ResponseEntity.ok(electionService.getElectionActiveStatus(election_id));
        }


@PatchMapping("/{election_id}")
public ResponseEntity<String> updateElectionStatus(@PathVariable("election_id") Long electionId, @RequestParam Boolean active) {
    String result = electionService.updateActiveStatus(electionId, active);
    return ResponseEntity.ok(result);
}



//    @PostMapping("/addCandidates")
//    public ResponseEntity<String> addCandidates(@RequestParam  Long election_id, @RequestParam List<Long> candidate_id) {
//        return ResponseEntity.ok(electionService.addCandidates(election_id, candidate_id));
//    }
//
//    @PostMapping("/addVoters")
//    public ResponseEntity<String> addVoters(@RequestParam Long election_id, @RequestParam Long voter_id) {
//        return ResponseEntity.ok(electionService.addVoters(election_id, voter_id));
//    }

    @PostMapping
    public ResponseEntity<String> addElection(@RequestBody Election election) {
        return ResponseEntity.ok(electionService.createElection(election));
    }

    @GetMapping("/{election_id}/getCandidates")
    public ResponseEntity<ElectionWithCandidateDto> getCandidatesByElectionId(@PathVariable("election_id") Long election_id) throws ResourceNotFound {
      List<CandidateDto> candidateDtos= electionService.getElectionCandidate(election_id);
      ElectionWithCandidateDto electionWithCandidateDto = new ElectionWithCandidateDto();
      electionWithCandidateDto.setCandidates(candidateDtos);
      electionWithCandidateDto.setElectionName(electionService.getElectionById(election_id).get().getElectionName());
      return  ResponseEntity.ok(electionWithCandidateDto);
    }






}
