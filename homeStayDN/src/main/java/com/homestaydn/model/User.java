package com.homestaydn.model;

import javax.persistence.*;
import java.time.LocalDate;

@Entity
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String nameCustomer;
    private String email;
    @Column(columnDefinition = "bit(1)")
    private Integer gender;
    private String address;
    @Column(columnDefinition = "date")
    private LocalDate dateOfBirth;
    @Column(columnDefinition = "varchar(45)")
    private String identityCard;
    @Column(columnDefinition = "mediumtext")
    private String pathImg;
    @Column(columnDefinition = "varchar(20)")
    private String phoneNumber;
    @OneToOne
    private Account account;

    public User() {
    }

    public User(int id, String nameCustomer, String email, int gender, String address, LocalDate dateOfBirth, String identityCard, String pathImg, String phoneNumber, Account account) {
        this.id = id;
        this.nameCustomer = nameCustomer;
        this.email = email;
        this.gender = gender;
        this.address = address;
        this.dateOfBirth = dateOfBirth;
        this.identityCard = identityCard;
        this.pathImg = pathImg;
        this.phoneNumber = phoneNumber;
        this.account = account;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getNameCustomer() {
        return nameCustomer;
    }

    public void setNameCustomer(String nameCustomer) {
        this.nameCustomer = nameCustomer;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public Integer getGender() {
        return gender;
    }

    public void setGender(Integer gender) {
        this.gender = gender;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public LocalDate getDateOfBirth() {
        return dateOfBirth;
    }

    public void setDateOfBirth(LocalDate dateOfBirth) {
        this.dateOfBirth = dateOfBirth;
    }

    public String getIdentityCard() {
        return identityCard;
    }

    public void setIdentityCard(String identityCard) {
        this.identityCard = identityCard;
    }

    public String getPathImg() {
        return pathImg;
    }

    public void setPathImg(String pathImg) {
        this.pathImg = pathImg;
    }

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    public Account getAccount() {
        return account;
    }

    public void setAccount(Account account) {
        this.account = account;
    }
}
