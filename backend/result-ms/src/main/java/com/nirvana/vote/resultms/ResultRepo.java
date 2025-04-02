package com.nirvana.vote.resultms;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface ResultRepo extends JpaRepository<Result,Long> {
    Optional<Result> findByElectionId(Long electionId);


}
