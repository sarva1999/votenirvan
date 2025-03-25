package com.nirvana.vote.electionms;

import com.nirvana.vote.electionms.clients.CandidateClient;
import com.nirvana.vote.electionms.dto.CandidateDto;
import com.nirvana.vote.electionms.exception.ResourceNotFound;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class ElectionService {

    @Autowired
    private ElectionRepo electionRepo;

    @Autowired
    private CandidateClient candidateClient;


    public String createElection(Election election) {
        electionRepo.save(election);
        return "Election Created";

    }

    public List<Election> getElectionList() {
        return electionRepo.findAll();
    }

    public Optional<Election> getElectionById(Long id) throws ResourceNotFound {
        if(electionRepo.findById(id).isEmpty()){
            throw new ResourceNotFound("Election not found");
        }
        return electionRepo.findById(id);
    }

    public String updateActiveStatus(Long id, Boolean isActive) {
        Optional<Election> electionOptional = electionRepo.findById(id);
        if (electionOptional.isPresent()) {
            Election election = electionOptional.get();
            election.setActive(isActive);
            electionRepo.save(election);
            return "Election active status updated";
        } else {
            throw new EntityNotFoundException("Election with id " + id + " not found");
        }
    }


    public void deleteElection(Long id) {
        electionRepo.deleteById(id);
    }

//    public String addCandidates(Long election_id,List<Long> candidate_id) {
//
//        candidate_id.forEach(id -> {
//            Optional<Election> electionOptional = electionRepo.findById(election_id);
//            if (electionOptional.isPresent()) {
//                Election election = electionOptional.get();
//                electionRepo.findById(id).ifPresent(candidate -> election.setCandidate_id(id));
//            }
//        });
//        return "Candidates added";
//    }


    public List<CandidateDto> getElectionCandidate(Long election_id){
        return candidateClient.getCandidatesByElectionId(election_id);
    }

    public Boolean getElectionActiveStatus(Long electionId) {
        return electionRepo.findById(electionId).get().isActive();
    }


}
