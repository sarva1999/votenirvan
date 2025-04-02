package com.nirvana.vote.authms.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.Data;
import lombok.RequiredArgsConstructor;

@Entity
@Data
@RequiredArgsConstructor
public class Admin {

    @Id
    private int id;

    private  String adminUsername;
    private String adminPassword;

}
