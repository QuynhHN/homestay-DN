package com.homestaydn.controller;

import com.homestaydn.model.Account;
import com.homestaydn.model.Role;
import com.homestaydn.security.jwt.JwtProvider;
import com.homestaydn.security.request.ConfirmEmail;
import com.homestaydn.security.request.ResetPassword;
import com.homestaydn.security.request.SignIn;
import com.homestaydn.security.request.SignUp;
import com.homestaydn.security.response.ErrorMessage;
import com.homestaydn.security.response.JwtResponse;
import com.homestaydn.security.response.ResponseMessage;
import com.homestaydn.security.userPrincipal.UserPrinciple;
import com.homestaydn.service.IAccountService;
import com.homestaydn.service.IEmailSenderService;
import com.homestaydn.service.IRoleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import javax.mail.MessagingException;
import javax.validation.Valid;
import java.util.*;

@RestController
@RequestMapping("/api/public")
@CrossOrigin("*")
public class SecurityController {
    @Autowired
    IAccountService accountService;
    @Autowired
    IRoleService roleService;
    @Autowired
    PasswordEncoder passwordEncoder;
    @Autowired
    AuthenticationManager authenticationManager;
    @Autowired
    JwtProvider jwtProvider;
    @Autowired
    IEmailSenderService emailSenderService;

    @PostMapping("/signup")
    public ResponseEntity<?> signup(@Valid @RequestBody SignUp signUpForm) {
        if (accountService.existByNameAccount(signUpForm.getUsername())) {
            return new ResponseEntity<>(new ResponseMessage("The username existed !!, Try again"), HttpStatus.OK);
        }
        Account users = new Account(signUpForm.getUsername(), passwordEncoder.encode(signUpForm.getPassword()));
        Set<String> strRoles = signUpForm.getRoles();
        Set<Role> roles = new HashSet<>();
        strRoles.forEach(role -> {
            switch (role) {
                case "admin":
                    Role adminRole = roleService.findRoleByNameRole("ADMIN");
                    roles.add(adminRole);
                    break;
                default:
                    Role userRole = roleService.findRoleByNameRole("USER");
                    roles.add(userRole);
            }
        });
        users.setRoles(roles);
        Account accountUser = accountService.saveAccount(users);
        if (accountUser != null) {
            return new ResponseEntity<>(new ResponseMessage("Create user success!!!"), HttpStatus.CREATED);
        }
        return new ResponseEntity<>(new ResponseMessage("Create user failed!!!"), HttpStatus.BAD_REQUEST);
    }

    @PostMapping("/signin")
    public ResponseEntity<?> login(@Valid @RequestBody SignIn signInForm, BindingResult bindingResult) {
        if (bindingResult.hasErrors()) {
            List<ErrorMessage> errorMessages = new ArrayList<>();
            bindingResult
                    .getFieldErrors()
                    .stream()
                    .forEach(f -> errorMessages.add(new ErrorMessage(f.getField(), f.getDefaultMessage())));
            return new ResponseEntity<>(errorMessages, HttpStatus.BAD_REQUEST);
        }
        Authentication authentication = authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(signInForm.getUsername(), signInForm.getPassword()));
        SecurityContextHolder.getContext().setAuthentication(authentication);
        String token = jwtProvider.createToken(authentication);
        UserPrinciple userPrinciple = (UserPrinciple) authentication.getPrincipal();
        return new ResponseEntity<>(new JwtResponse(token, userPrinciple.getUsername(), userPrinciple.getAuthorities()), HttpStatus.OK);
    }
    @PostMapping("/confirm-email")
    public ResponseEntity<?> checkEmailUserExist(@RequestBody ConfirmEmail confirmEmail) throws MessagingException {
        if (accountService.checkEmailExist(confirmEmail.getEmail())) {
            return new ResponseEntity<>(new ResponseMessage("Email này tồn tại."), HttpStatus.OK);
        }
        return new ResponseEntity<>(new ResponseMessage("Email này không tồn tại."), HttpStatus.NOT_FOUND);
    }

    @PostMapping("/send-email")
    public ResponseEntity<?> sendEmail(@RequestBody ConfirmEmail confirmEmail) throws MessagingException {
        int code = emailSenderService.sendCodeToConfirmEmail(confirmEmail.getEmail());
        return new ResponseEntity<>(new ResponseMessage(String.valueOf(code)), HttpStatus.OK);
    }

    @PostMapping("/reset-password")
    public ResponseEntity<?> resetPassword(@RequestBody ResetPassword resetPassword) {
        Account account = accountService.findAccountUserByEmail(resetPassword.getEmail());
        if (account != null) {
            account.setPasswordAccount(passwordEncoder.encode(resetPassword.getPassword()));
            accountService.saveAccount(account);
            return new ResponseEntity<>(HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }
}
