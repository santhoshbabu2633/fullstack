package com.java.bec.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.java.bec.model.Student;

public interface StudentRepository extends JpaRepository<Student,Long> {

    
} 
