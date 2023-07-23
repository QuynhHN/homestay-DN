package com.homestaydn.security.userPrincipal;
import com.homestaydn.model.Account;
import com.homestaydn.service.IAccountService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
@Service
public class UserDetailService implements UserDetailsService {
    @Autowired
    private IAccountService accountService;
    @Override
    @Transactional
    public UserDetails loadUserByUsername(String username) {
        try {
            Account account = accountService.findAccountByNameAccount(username);
            return UserPrinciple.build(account);
        } catch(UsernameNotFoundException e) {
            e.getMessage();
        }
        return null;
    }
}