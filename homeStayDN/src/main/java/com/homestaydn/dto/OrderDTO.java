package com.homestaydn.dto;

import com.homestaydn.model.OrderDetail;
import com.homestaydn.model.User;

import java.math.BigDecimal;
import java.util.List;

public class OrderDTO {
    private User user;
    private BigDecimal totalMoney;
    private OrderDetail orderDetail;

    public OrderDTO(User user, BigDecimal totalMoney, OrderDetail orderDetail) {
        this.user = user;
        this.totalMoney = totalMoney;
        this.orderDetail = orderDetail;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public BigDecimal getTotalMoney() {
        return totalMoney;
    }

    public void setTotalMoney(BigDecimal totalMoney) {
        this.totalMoney = totalMoney;
    }

    public OrderDetail getOrderDetail() {
        return orderDetail;
    }

    public void setOrderDetail(OrderDetail orderDetail) {
        this.orderDetail = orderDetail;
    }
}
