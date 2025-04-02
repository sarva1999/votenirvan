package com.nirvana.vote.authms.service;

import com.nirvana.vote.authms.config.CustomUserDetails;
import com.nirvana.vote.authms.entity.Admin;
import com.nirvana.vote.authms.repo.AdminRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Component;

import java.util.Optional;

@Component
public class CustomUserDetailsService implements UserDetailsService {

    @Autowired
    private AdminRepo adminRepo;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        Optional<Admin> adminCreds = adminRepo.findByAdminUsername(username);
        return adminCreds.map(CustomUserDetails::new).orElseThrow(()->new UsernameNotFoundException("Admin not Found"));
    }
}
