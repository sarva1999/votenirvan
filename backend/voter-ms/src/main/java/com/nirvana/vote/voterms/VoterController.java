package com.nirvana.vote.voterms;


import com.nirvana.vote.voterms.exception.ResourceNotFound;
import jakarta.annotation.Resource;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.config.annotation.CorsRegistry;

import java.util.List;

@RestController
@RequestMapping("/voter")
public class VoterController {

    @Autowired
    private VoterService voterService;

    @GetMapping("/byVoterId/{id}")
    public ResponseEntity<Voter> getMyProfile(@PathVariable String id) throws ResourceNotFound {
        if(voterService.getVoterById(id).isEmpty()){
            throw new ResourceNotFound("Voter does not exist with this Voter ID");
        }else {
            return new ResponseEntity(voterService.getVoterById(id), HttpStatus.OK);
        }
    }

//    @PostMapping("/register")
//    public ResponseEntity<String> registerVoter(@Valid @RequestBody Voter voter){
//        voterService.createVoter(voter);
//        return new ResponseEntity("Success fully Registered",HttpStatus.CREATED);
//    }

//    public ResponseEntity<Election> getElectionDetails(@PathVariable Long election_id){
//
//        return new ResponseEntity(electionService.getElectionById(election_id), HttpStatus.OK);
//    }

    @GetMapping("/all")
    public ResponseEntity<List<Voter>> getAllVoters() {
        return new ResponseEntity(voterService.getVoterList(), HttpStatus.OK);
    }

    @PostMapping
    public  ResponseEntity<String> createVoter(@Valid @RequestBody Voter voter){
        return new ResponseEntity(voterService.createVoter(voter), HttpStatus.CREATED);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteVoter(@PathVariable String id) throws ResourceNotFound{
        if(voterService.getVoterById(id).isEmpty()){
            throw new ResourceNotFound("Voter does not exist with this Voter ID");
        }else {
            voterService.deleteVoter(id);
            return new ResponseEntity("Voter Deleted Successfully", HttpStatus.OK);
        }
    }

    @PutMapping
    public ResponseEntity<String> updateVoter(@PathVariable String voter_id ,@Valid @RequestBody Voter voter) throws ResourceNotFound{
        if(voterService.getVoterById(voter_id).isEmpty()){
            throw new ResourceNotFound("Voter does not exist with this Voter ID");
        }else {
            return new ResponseEntity(voterService.updateVoter(voter_id, voter), HttpStatus.OK);
        }
    }








}
