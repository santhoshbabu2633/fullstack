package com.java.bec.service.Impl;
import com.java.bec.model.Enquiry;
import com.java.bec.repository.EnquiryRepository;
import com.java.bec.service.EnquiryService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class EnquiryServiceImpl implements EnquiryService {

    @Autowired
    private EnquiryRepository enquiryRepository;

    @Override
    public List<Enquiry> getAllEnquiries() {
        return enquiryRepository.findAll();
    }

    @Override
    public Enquiry getEnquiryById(Long enquiryId) {
        Optional<Enquiry> optionalEnquiry = enquiryRepository.findById(enquiryId);
        return optionalEnquiry.orElse(null);
    }

    @Override
    public Enquiry createEnquiry(Enquiry enquiry) {
        return enquiryRepository.save(enquiry);
    }

    @Override
    public Enquiry updateEnquiry(Long enquiryId, Enquiry enquiry) {
        if (enquiryRepository.existsById(enquiryId)) {
            enquiry.setEnquiryId(enquiryId);
            return enquiryRepository.save(enquiry);
        }
        return null;
    }

    @Override
    public void deleteEnquiry(Long enquiryId) {
        enquiryRepository.deleteById(enquiryId);
    }
}
