package com.nirvana.vote.candidatems;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CandidateService {

    @Autowired
    private CandidateRepo candidateRepo;

    public List<Candidate> getCandidatesAll(){
        return candidateRepo.findAll();

    }

    public String createCandidate(Candidate candidate){

        candidateRepo.save(candidate);
        return "Successfully Candidate Registered.";
    }

    public Candidate getCandidateById(Long id){
        return candidateRepo.findById(id).get();
    }

    public String deleteCandidateById(Long id){

        candidateRepo.deleteById(id);
        return "Succesfully Deleted";
    }
    public List<Candidate> getCandidatesByElectionId(Long election_id){
        return candidateRepo.findByElectionId(election_id);
    }

    public String updateCandidate(Candidate candidate){
        candidateRepo.save(candidate);
        return "Successfully Candidate Updated.";
    }
}
