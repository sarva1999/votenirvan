package com.nirvana.vote.resultms.dto;


import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.Column;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Data;
import lombok.RequiredArgsConstructor;

@Data
@RequiredArgsConstructor
public class Election {

    @JsonIgnore
    private long election_id;

    private String electionName;

    @JsonIgnore
    private boolean isActive;

}
