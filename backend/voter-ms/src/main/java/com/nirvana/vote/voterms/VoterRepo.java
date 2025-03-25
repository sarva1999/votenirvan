package com.nirvana.vote.voterms;

import org.springframework.data.jpa.repository.JpaRepository;

public interface VoterRepo extends JpaRepository<Voter,String> {

}
