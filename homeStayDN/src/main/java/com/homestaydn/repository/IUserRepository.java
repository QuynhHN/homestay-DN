package com.homestaydn.repository;

import com.homestaydn.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IUserRepository extends JpaRepository<User, Integer> {
    User findUserByEmail(String email);
    User findUserByAccount_NameAccount(String nameAccount);
}
