package com.homestaydn.service.impl;

import com.homestaydn.model.Account;
import com.homestaydn.model.User;
import com.homestaydn.repository.IAccountRepository;
import com.homestaydn.repository.IUserRepository;
import com.homestaydn.service.IAccountService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AccountService implements IAccountService {
    @Autowired
    private IAccountRepository accountRepository;
    @Autowired
    private IUserRepository userRepository;
    @Override
    public Account findAccountByNameAccount(String name) {
        return accountRepository.findAccountByNameAccount(name);
    }

    @Override
    public Boolean existByNameAccount(String name) {
        return accountRepository.existsAccountByNameAccount(name);
    }

    @Override
    public Account saveAccount(Account account) {
        return accountRepository.save(account);
    }

    @Override
    public Account findAccountUserByEmail(String email) {
        User user = userRepository.findUserByEmail(email);
        if (user != null) return user.getAccount();
        return null;
    }

    @Override
    public Account findById(int id) {
        return accountRepository.findById(id).get();
    }

    @Override
    public Boolean checkEmailExist(String email) {
        if (findAccountUserByEmail(email) != null) return true;
        return false;
    }
}
