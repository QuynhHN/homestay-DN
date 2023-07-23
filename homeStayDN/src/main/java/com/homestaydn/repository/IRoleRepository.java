package com.homestaydn.repository;

import com.homestaydn.model.Role;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IRoleRepository extends JpaRepository<Role, Integer> {
    Role findRoleByNameRole(String name);
}
