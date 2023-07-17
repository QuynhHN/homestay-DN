package com.homestaydn.controller;

import com.homestaydn.service.IFeedbackService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/public/feedback")
@CrossOrigin("*")
public class FeedbackController {
    @Autowired
    private IFeedbackService feedbackService;
    @GetMapping("")
    public ResponseEntity<?> getListTopFeedback() {
        Pageable pageable = PageRequest.of(0, 5, Sort.by("dayFeedback"));
        return new ResponseEntity<>(feedbackService.findAllFeedback(pageable),HttpStatus.OK);
    }
}
