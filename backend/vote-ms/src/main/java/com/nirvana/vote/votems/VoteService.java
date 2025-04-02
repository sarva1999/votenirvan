package com.nirvana.vote.votems;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class VoteService {

    @Autowired
    VoteRepo voteRepo;

    public String registerVote(Vote vote ) {
        voteRepo.save(vote);
        return "Vote registered successfully";
    }

    public List<Vote> getVotes() {
        return voteRepo.findAll();
    }

    public Vote getVoteById(Long voteId) {
        return voteRepo.findById(voteId).get();
    }

    public Vote alreadyVoted(String voterId, Long electionId) {
        return voteRepo.alreadyVoted(voterId, electionId);
    }

    public Long getVotesByElectionAndCandidate(Long electionId, List<Long> candidateIds) {
        return voteRepo.findCandidateWithMaxVotesByElectionAndCandidates(electionId, candidateIds);
    }
}
