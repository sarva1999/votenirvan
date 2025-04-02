package com.nirvana.vote.authms.controller;

import com.nirvana.vote.authms.dto.AuthenticationResponse;
import com.nirvana.vote.authms.entity.Admin;
import com.nirvana.vote.authms.service.AuthService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.RequestEntity;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;


// Used Reference from springboot documentation and from chatgpt


@RestController
@RequestMapping("/auth")
public class AuthController {

    @Autowired
    private AuthService authService;

    @Autowired
    private AuthenticationManager authenticationManager;

    @PostMapping("/admin")
    public String addAdmin(@RequestBody Admin admin) {
        return authService.saveAdmin(admin);
    }

    @PostMapping("/token")
    public ResponseEntity<AuthenticationResponse> getToken(@RequestBody Admin admin) {
        Authentication authentication = authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(admin.getAdminUsername(), admin.getAdminPassword()));
        if (authentication.isAuthenticated()) {
            AuthenticationResponse authenticationResponse = new AuthenticationResponse();
            authenticationResponse.setToken(authService.generateToken(admin.getAdminUsername()));
            return ResponseEntity.ok(authenticationResponse);
        } else {
            throw new RuntimeException("You are not an Admin");
        }
    }


    @GetMapping("/validateToken")
    public String getToken(@RequestParam  String token){
         authService.validateToken(token);
         return "Validated";
    }






}
