package com.nirvana.vote.electionms;

import org.springframework.data.jpa.repository.JpaRepository;

public interface ElectionRepo extends JpaRepository<Election,Long> {

}
