package com.nirvana.vote.authms.service;


import com.nirvana.vote.authms.entity.Admin;
import com.nirvana.vote.authms.repo.AdminRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class AuthService {

    @Autowired
    private AdminRepo adminRepo;

    @Autowired
    private JwtService jwtService;
    @Autowired
    private PasswordEncoder passwordEncoder;
    public String saveAdmin(Admin admin){
        admin.setAdminPassword(passwordEncoder.encode(admin.getAdminPassword()));
        adminRepo.save(admin);
        return "Admin Added Succesfully";
    }

    public String generateToken(String username){
        return jwtService.generateToken(username);
    }

    public  void validateToken(String token){
         jwtService.validateToken(token);
    }
}
