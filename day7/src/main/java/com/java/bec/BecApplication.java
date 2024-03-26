package com.java.bec;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.security.crypto.password.PasswordEncoder;

import com.java.bec.Enum.Role;
import com.java.bec.model.User;
import com.java.bec.repository.UserRepository;

@SpringBootApplication
public class BecApplication {

    public static void main(String[] args) {
        SpringApplication.run(BecApplication.class, args);
    }

    @Bean
    public CommandLineRunner commandLineRunner(UserRepository userRepository, PasswordEncoder passwordEncoder) {
        return args -> {
            if (userRepository.count() > 0) return;
            var admin = User.builder()
                    .username("babu")
                    .email("babu@gmail.com")
                    .password(passwordEncoder.encode("babu007")) 
                    .userRole(Role.ADMIN)
                    .mobilenumber("1234567890")
                    .build();
            userRepository.save(admin);
        };
    }

}
