package com.homestaydn.service;

import com.homestaydn.model.Order;

import javax.mail.MessagingException;
import java.util.List;

public interface IEmailSenderService {
    int sendCodeToConfirmEmail(String email) throws MessagingException;
    void sendInfoOrderThroughEmail(String email, Order order) throws MessagingException;
}
