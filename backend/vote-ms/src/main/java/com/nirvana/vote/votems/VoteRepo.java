package com.nirvana.vote.votems;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface VoteRepo extends JpaRepository<Vote,Long> {
    @Query(value = "select * from vote where voter_id=?1 and election_id=?2", nativeQuery = true)
    Vote alreadyVoted(String voterId, Long electionId);


    @Query(value = "select count(*) from vote where election_id=?1 and candidate_id=?2",nativeQuery = true)
    Long countByElectionAndCandidate(Long electionId, Long candidateId);




        @Query(value = "SELECT v.candidate_id FROM Vote v WHERE v.election_id = :electionId AND v.candidate_id IN :candidateIds GROUP BY v.candidate_id ORDER BY COUNT(v.candidate_id) DESC")
        Long findCandidateWithMaxVotesByElectionAndCandidates(@Param("electionId") Long electionId, @Param("candidateIds") List<Long> candidateIds);

//    @Query(value = "SELECT v.candidate_id FROM Vote v WHERE v.election_id = :electionId AND v.candidate_id IN :candidateIds GROUP BY v.candidate_id HAVING COUNT(v.candidate_id) = (SELECT COUNT(v2.candidate_id) FROM Vote v2 WHERE v2.election_id = :electionId AND v2.candidate_id IN :candidateIds GROUP BY v2.candidate_id ORDER BY COUNT(v2.candidate_id) DESC LIMIT 1");
//    List<Long> findCandidateWithMaxVotesByElectionAndCandidates(@Param("electionId") Long electionId, @Param("candidateIds") List<Long> candidateIds);
}
