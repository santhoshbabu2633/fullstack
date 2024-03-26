package com.java.bec.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity 
@Table(name ="Payment")
public class Payment {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long paymentId;
    
     @Column(nullable=false)
     private String status;

     @Column(nullable=false)
     private Double amountPaid;
     
     @Column(nullable=false)
     private Double paymentDate;

     @Column(nullable=false)
   private  String modeOfPayment;
     
     

    
}
