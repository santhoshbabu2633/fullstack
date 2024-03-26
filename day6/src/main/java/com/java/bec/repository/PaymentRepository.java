package com.java.bec.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.java.bec.model.Payment;

public interface PaymentRepository extends JpaRepository<Payment,Long> {

    
}
