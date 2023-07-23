package com.homestaydn.repository;

import com.homestaydn.model.Account;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IAccountRepository extends JpaRepository<Account, Integer> {
    Account findAccountByNameAccount(String nameAccount);
    Boolean existsAccountByNameAccount(String nameAccount);
}
