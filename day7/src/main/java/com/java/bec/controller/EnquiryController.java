package com.java.bec.controller;

import com.java.bec.model.Enquiry;
import com.java.bec.service.EnquiryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("bec/enquiries")
public class EnquiryController {

    @Autowired
    private EnquiryService enquiryService;

    @GetMapping
    public ResponseEntity<List<Enquiry>> getAllEnquiries() {
        List<Enquiry> enquiries = enquiryService.getAllEnquiries();
        return new ResponseEntity<>(enquiries, HttpStatus.OK);
    }

    @GetMapping("/{enquiryId}")
    public ResponseEntity<Enquiry> getEnquiryById(@PathVariable Long enquiryId) {
        Enquiry enquiry = enquiryService.getEnquiryById(enquiryId);
        return new ResponseEntity<>(enquiry, HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<Enquiry> createEnquiry(@RequestBody Enquiry enquiry) {
        Enquiry createdEnquiry = enquiryService.createEnquiry(enquiry);
        return new ResponseEntity<>(createdEnquiry, HttpStatus.CREATED);
    }

    @PutMapping("/{enquiryId}")
    public ResponseEntity<Enquiry> updateEnquiry(@PathVariable Long enquiryId, @RequestBody Enquiry enquiry) {
        Enquiry updatedEnquiry = enquiryService.updateEnquiry(enquiryId, enquiry);
        return new ResponseEntity<>(updatedEnquiry, HttpStatus.OK);
    }

    @DeleteMapping("/{enquiryId}")
    public ResponseEntity<Void> deleteEnquiry(@PathVariable Long enquiryId) {
        enquiryService.deleteEnquiry(enquiryId);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
