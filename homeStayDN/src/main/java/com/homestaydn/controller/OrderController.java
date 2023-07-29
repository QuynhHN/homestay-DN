package com.homestaydn.controller;

import com.homestaydn.dto.NameAccountDTO;
import com.homestaydn.service.IUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
@CrossOrigin("*")
public class OrderController {
    @Autowired
    private IUserService userService;
    @PostMapping("/public/infor-user")
    public ResponseEntity<?> getInforUserByNameAccount(@RequestBody NameAccountDTO nameAccount) {
        return new ResponseEntity<>(userService.findUserByNameAccount(nameAccount.getNameAccount()), HttpStatus.OK);
    }
}