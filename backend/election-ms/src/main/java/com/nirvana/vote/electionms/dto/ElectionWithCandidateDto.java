package com.nirvana.vote.electionms.dto;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class ElectionWithCandidateDto {

    private String electionName;
    private List<CandidateDto> candidates;

}
