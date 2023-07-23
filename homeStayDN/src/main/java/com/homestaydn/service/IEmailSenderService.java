package com.homestaydn.service;

import javax.mail.MessagingException;
import java.util.List;

public interface IEmailSenderService {
    int sendCodeToConfirmEmail(String email) throws MessagingException;
}
