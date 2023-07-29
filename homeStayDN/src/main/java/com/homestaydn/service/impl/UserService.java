package com.homestaydn.service.impl;

import com.homestaydn.model.User;
import com.homestaydn.repository.IUserRepository;
import com.homestaydn.service.IUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService implements IUserService {
    @Autowired
    private IUserRepository userRepository;
    @Override
    public User findUserByEmail(String email) {
        return userRepository.findUserByEmail(email);
    }

    @Override
    public User findUserByNameAccount(String nameAccount) {
        return userRepository.findUserByAccount_NameAccount(nameAccount);
    }
}
