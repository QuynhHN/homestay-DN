package com.homestaydn.service;

import com.homestaydn.model.Account;

public interface IAccountService {
    Account findAccountByNameAccount(String name);
    Boolean existByNameAccount(String name);
    Account saveAccount(Account account);
    Account findAccountUserByEmail(String email);
    Account findById(int id);
    Boolean checkEmailExist(String email);
}