package com.homestaydn.service;

import com.homestaydn.model.Feedback;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface IFeedbackService {
    Page<Feedback> findAllFeedback(Pageable pageable);
}
