package com.homestaydn.model;

import javax.persistence.*;
import java.time.LocalDate;

@Entity
public class OrderDetail {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private int amountRoom;
    private LocalDate dateReceive;
    private LocalDate datePay;
    @OneToOne
    private Room room;

    public OrderDetail() {
    }

    public OrderDetail(int id, int amountRoom, LocalDate dateReceive, LocalDate datePay, Room room) {
        this.id = id;
        this.amountRoom = amountRoom;
        this.dateReceive = dateReceive;
        this.datePay = datePay;
        this.room = room;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
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

    public int getAmountRoom() {
        return amountRoom;
    }

    public void setAmountRoom(int amountRoom) {
        this.amountRoom = amountRoom;
    }

    public Room getRoom() {
        return room;
    }

    public void setRoom(Room room) {
        this.room = room;
    }
}
