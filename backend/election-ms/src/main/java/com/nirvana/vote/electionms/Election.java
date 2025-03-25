package com.nirvana.vote.electionms;
import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.Data;
import lombok.RequiredArgsConstructor;

import java.util.List;

@Entity
@RequiredArgsConstructor
@Data
public class Election {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long election_id;

    @Column(unique = true)
    private String electionName;


    private boolean isActive;


}
