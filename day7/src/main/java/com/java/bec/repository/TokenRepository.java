package com.java.bec.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.java.bec.model.Token;

public interface TokenRepository extends JpaRepository<Token,String> {
    List<Token> findAllByUser_IdAndRevokedFalseAndExpiredFalse(Long long1);

    Optional<Token> findByToken(String token);
    
}
