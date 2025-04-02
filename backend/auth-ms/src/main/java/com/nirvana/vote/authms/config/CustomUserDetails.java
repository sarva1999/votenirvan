package com.nirvana.vote.authms.config;

import com.nirvana.vote.authms.entity.Admin;
import jakarta.persistence.SecondaryTable;
import lombok.Data;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.Collection;

@Data
@RequiredArgsConstructor
public class CustomUserDetails implements UserDetails {
    private String username;
    private String password;

    public CustomUserDetails(Admin admin){
        this.password=admin.getAdminPassword();
        this.username=admin.getAdminUsername();

    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return null;
    }

    @Override
    public  String getPassword(){
        return this.password;
    }

    @Override
    public String getUsername(){
        return this.username;
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }
}
