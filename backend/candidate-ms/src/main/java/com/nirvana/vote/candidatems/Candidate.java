package com.nirvana.vote.candidatems;


import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.Builder;
import lombok.Data;
import lombok.RequiredArgsConstructor;

@Entity
@Data
@RequiredArgsConstructor
public class Candidate {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long candidate_id;


    private Long election_id;

    @Column(unique = true)
    private String name;

    private String party;


    @Column(name = "imagedata")
    private byte[] image;

}
