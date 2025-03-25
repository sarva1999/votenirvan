package com.nirvana.vote.voterms;


import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.Data;
import lombok.RequiredArgsConstructor;

@Entity
@Table(name = "Voters")
@Data
@RequiredArgsConstructor
public class Voter {

    @Id
    private String voterId;

    @Column(unique = true)
    private String aadharNumber;


    @Column(unique = true)
    private String email;

    private String name;

    @Column(unique = true)
    private long phoneNo;

    private String address;


//    private Long election_id;


}
