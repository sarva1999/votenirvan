package com.nirvana.vote.resultms.dto;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class ElectionWithCandidateDto {

    private String electionName;
    private CandidateDto candidate;

}
