package com.example.testing;

import lombok.AllArgsConstructor;
import lombok.Data;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.authority.SimpleGrantedAuthority;

import java.util.Collection;
import java.util.Collections;

@Data
@AllArgsConstructor
public class UserDetailsImpl implements UserDetails {

    private Long id;
    private String username;
    private String password;
    private String email;
//    private String review;

    // Create a static method to build UserDetailsImpl from the User object
    public static UserDetailsImpl build(User user) {
        return new UserDetailsImpl(
                user.getId(),
                user.getUsername(),
                user.getPassword(),
                user.getEmail()
//                user.getReview()
        );
    }

    // Return authorities (roles/permissions). Start with an empty list or test roles
    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        // You can add real authorities/roles here once they're defined in your User class
        return Collections.singletonList(new SimpleGrantedAuthority("ROLE_USER")); // Dummy authority for testing
    }

    @Override
    public String getPassword() {
        return password;
    }

    @Override
    public String getUsername() {
        return username;
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
