package com.homestaydn.service.impl;

import com.homestaydn.model.Role;
import com.homestaydn.repository.IRoleRepository;
import com.homestaydn.service.IRoleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class RoleService implements IRoleService {
    @Autowired
    private IRoleRepository roleRepository;
    @Override
    public Role findRoleByNameRole(String nameRole) {
        return roleRepository.findRoleByNameRole(nameRole);
    }
}
