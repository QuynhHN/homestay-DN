package com.homestaydn.service;

import com.homestaydn.dto.OrderDTO;
import com.homestaydn.model.Order;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;

public interface IOrderService {
    Page<Order> findAllOrder(Pageable pageable);
    Order findOrderById(int id);
    void deleteOrderById(int id);
    Order saveNewOrder(Order order);
    Order payment(OrderDTO orderDTO, int statusReceive, int statusPayment);
}
