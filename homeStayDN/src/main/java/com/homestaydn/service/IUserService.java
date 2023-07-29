package com.homestaydn.service;

import com.homestaydn.model.User;

public interface IUserService {
    User findUserByEmail(String email);
    User findUserByNameAccount(String nameAccount);
}
