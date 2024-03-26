package com.java.bec.service;

import com.java.bec.model.Enquiry;

import java.util.List;

public interface EnquiryService {
    List<Enquiry> getAllEnquiries();

    Enquiry getEnquiryById(Long enquiryId);

    Enquiry createEnquiry(Enquiry enquiry);

    Enquiry updateEnquiry(Long enquiryId, Enquiry enquiry);

    void deleteEnquiry(Long enquiryId);
}
