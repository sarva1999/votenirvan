package com.nirvana.vote.candidatems;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.Optional;


public interface CandidateRepo extends JpaRepository<Candidate,Long> {

    @Query(value = "Select * from candidate where election_id =?1",nativeQuery = true)
    List<Candidate> findByElectionId(Long electionId);

    Optional<Candidate> findByName(String fileName);

}
