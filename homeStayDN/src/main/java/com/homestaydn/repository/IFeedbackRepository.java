package com.homestaydn.repository;

import com.homestaydn.model.Feedback;
import org.springframework.data.domain.Page;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IFeedbackRepository extends JpaRepository<Feedback, Integer> {
}
