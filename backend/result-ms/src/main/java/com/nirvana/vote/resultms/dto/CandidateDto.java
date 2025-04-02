package com.nirvana.vote.resultms.dto;

import lombok.Data;
import lombok.RequiredArgsConstructor;


@Data
@RequiredArgsConstructor

public class CandidateDto {

    private long candidate_id;


    private Long election_id;

    private String name;


    private String party;
    private byte[] image;

}


