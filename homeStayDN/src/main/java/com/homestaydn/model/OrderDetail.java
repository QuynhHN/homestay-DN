package com.homestaydn.model;

import javax.persistence.*;
import java.time.LocalDate;

@Entity
public class OrderDetail {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String timeReceive;
    private LocalDate dateReceive;
    private LocalDate datePay;
    private int amountCustomer;
    @OneToOne
    private Room room;

    public OrderDetail() {
    }

    public OrderDetail(int id, String timeReceive, LocalDate dateReceive, LocalDate datePay, int amountCustomer, Room room) {
        this.id = id;
        this.timeReceive = timeReceive;
        this.dateReceive = dateReceive;
        this.datePay = datePay;
        this.amountCustomer = amountCustomer;
        this.room = room;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getTimeReceive() {
        return timeReceive;
    }

    public void setTimeReceive(String timeReceive) {
        this.timeReceive = timeReceive;
    }

    public LocalDate getDateReceive() {
        return dateReceive;
    }

    public void setDateReceive(LocalDate dateReceive) {
        this.dateReceive = dateReceive;
    }

    public LocalDate getDatePay() {
        return datePay;
    }

    public void setDatePay(LocalDate datePay) {
        this.datePay = datePay;
    }

    public int getAmountCustomer() {
        return amountCustomer;
    }

    public void setAmountCustomer(int amountCustomer) {
        this.amountCustomer = amountCustomer;
    }

    public Room getRoom() {
        return room;
    }

    public void setRoom(Room room) {
        this.room = room;
    }
}
