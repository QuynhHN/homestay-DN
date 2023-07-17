package com.homestaydn.model;

import org.hibernate.validator.constraints.Range;

import javax.persistence.*;
import java.time.LocalDate;

@Entity
public class Feedback {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    @Column(columnDefinition = "mediumtext")
    private String comment;
    @OneToOne
    private User user;
    @Range(min = 0, max = 10)
    private int point;
    @Column(columnDefinition = "date")
    private LocalDate dayFeedback;

    public Feedback(int id, String comment, User user, int point, LocalDate dayFeedback) {
        this.id = id;
        this.comment = comment;
        this.user = user;
        this.point = point;
        this.dayFeedback = dayFeedback;
    }

    public Feedback() {
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getComment() {
        return comment;
    }

    public void setComment(String comment) {
        this.comment = comment;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public int getPoint() {
        return point;
    }

    public void setPoint(int point) {
        this.point = point;
    }

    public LocalDate getDayFeedback() {
        return dayFeedback;
    }

    public void setDayFeedback(LocalDate dayFeedback) {
        this.dayFeedback = dayFeedback;
    }
}
