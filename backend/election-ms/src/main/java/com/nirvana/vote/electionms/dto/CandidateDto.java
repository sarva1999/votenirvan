package com.nirvana.vote.electionms.dto;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.RequiredArgsConstructor;


@Data
@RequiredArgsConstructor

public class CandidateDto {

    private long candidate_id;


    private Long election_id;

    private String name;


    private String party;

}


