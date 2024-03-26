package com.java.bec.service;

import com.java.bec.model.Payment;

import java.util.List;

public interface PaymentService {
    List<Payment> getAllPayments();

    Payment getPaymentById(Long paymentId);

    Payment createPayment(Payment payment);

    Payment updatePayment(Long paymentId, Payment payment);

    void deletePayment(Long paymentId);
}
