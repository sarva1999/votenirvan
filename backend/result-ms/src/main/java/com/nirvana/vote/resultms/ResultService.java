package com.nirvana.vote.resultms;

import com.nirvana.vote.resultms.clients.CandidateClient;
import com.nirvana.vote.resultms.clients.ElectionClient;
import com.nirvana.vote.resultms.dto.ElectionWithCandidateDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class  ResultService{
    @Autowired
    private ResultRepo resultRepo;

    @Autowired
    private ElectionClient electionClient;

    @Autowired
    private CandidateClient candidateClient;


    public List<Result> electionResults() {
        return resultRepo.findAll();
    }

    public Result getResult(Long id) {
        return resultRepo.findById(id).get();
    }

    public String saveResult(Result result) {

         resultRepo.save(result);
         return "Successfully result published";
    }

    public Result getResultByElectionId(Long election_id) {

        Optional<Result> resultOptional = resultRepo.findByElectionId(election_id);
        return resultOptional.orElse(null);
    }

    public List<ElectionWithCandidateDto> getResults(){
        List<ElectionWithCandidateDto> electionWithCandidateDtos = new ArrayList<>();
        List<Result> results = resultRepo.findAll();

        for(Result result : results){
              ElectionWithCandidateDto electionWithCandidateDto = new ElectionWithCandidateDto();
              electionWithCandidateDto.setCandidate(candidateClient.getCandidateById(result.getCandidateId()));
              electionWithCandidateDto.setElectionName(electionClient.getElectionById(result.getElectionId()).getElectionName());
              electionWithCandidateDtos.add(electionWithCandidateDto);
        }

        return electionWithCandidateDtos;
    }





}
