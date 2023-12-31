package com.homestaydn.model;

import javax.persistence.*;
import java.math.BigDecimal;
import java.time.LocalDate;

@Entity
@Table(name = "orders")
public class Order {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String codeOrder;
    @Column(columnDefinition = "decimal(12,0)")
    private BigDecimal totalMoney;
    @Column(columnDefinition = "date")
    private LocalDate dateBooking;
    @OneToOne
    private User user;
    @Column(columnDefinition = "tinyint")
    private int statusPayment;
    @Column(columnDefinition = "tinyint")
    private int statusReceive;
    @OneToOne
    private OrderDetail orderDetail;

    public Order() {
    }

    public Order(int id, String codeOrder, BigDecimal totalMoney, LocalDate dateBooking, User user, int statusPayment, int statusReceive, OrderDetail orderDetail) {
        this.id = id;
        this.codeOrder = codeOrder;
        this.totalMoney = totalMoney;
        this.dateBooking = dateBooking;
        this.user = user;
        this.statusPayment = statusPayment;
        this.statusReceive = statusReceive;
        this.orderDetail = orderDetail;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getCodeOrder() {
        return codeOrder;
    }

    public void setCodeOrder(String codeOrder) {
        this.codeOrder = codeOrder;
    }

    public BigDecimal getTotalMoney() {
        return totalMoney;
    }

    public void setTotalMoney(BigDecimal totalMoney) {
        this.totalMoney = totalMoney;
    }

    public int getStatusPayment() {
        return statusPayment;
    }

    public void setStatusPayment(int statusPayment) {
        this.statusPayment = statusPayment;
    }

    public int getStatusReceive() {
        return statusReceive;
    }

    public void setStatusReceive(int statusReceive) {
        this.statusReceive = statusReceive;
    }

    public LocalDate getDateBooking() {
        return dateBooking;
    }

    public void setDateBooking(LocalDate dateBooking) {
        this.dateBooking = dateBooking;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public OrderDetail getOrderDetail() {
        return orderDetail;
    }

    public void setOrderDetail(OrderDetail orderDetail) {
        this.orderDetail = orderDetail;
    }
}
