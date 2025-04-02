package com.nirvana.vote.authms.repo;

import com.nirvana.vote.authms.entity.Admin;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.Optional;

public interface AdminRepo extends JpaRepository<Admin,Integer> {

    Optional<Admin> findByAdminUsername(String username);
}
