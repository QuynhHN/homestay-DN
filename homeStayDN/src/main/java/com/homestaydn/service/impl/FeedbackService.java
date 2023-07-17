package com.homestaydn.service.impl;

import com.homestaydn.model.Feedback;
import com.homestaydn.repository.IFeedbackRepository;
import com.homestaydn.service.IFeedbackService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@Service
public class FeedbackService implements IFeedbackService {
    @Autowired
    private IFeedbackRepository feedbackRepository;
    @Override
    public Page<Feedback> findAllFeedback(Pageable pageable) {
        return feedbackRepository.findAll(pageable);
    }
}
