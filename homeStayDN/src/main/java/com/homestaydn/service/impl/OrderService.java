package com.homestaydn.service.impl;

import com.homestaydn.dto.OrderDTO;
import com.homestaydn.model.Order;
import com.homestaydn.model.OrderDetail;
import com.homestaydn.model.User;
import com.homestaydn.repository.IOrderRepository;
import com.homestaydn.service.IOrderDetailService;
import com.homestaydn.service.IOrderService;
import com.homestaydn.service.IUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.util.LinkedHashMap;
import java.util.List;

@Service
public class OrderService implements IOrderService {
    @Autowired
    private IOrderRepository orderRepository;
    @Autowired
    private IOrderDetailService orderDetailService;

    @Override
    public Page<Order> findAllOrder(Pageable pageable) {
        return orderRepository.findAll(pageable);
    }

    @Override
    public Order findOrderById(int id) {
        return orderRepository.findById(id).get();
    }

    @Override
    public void deleteOrderById(int id) {
        orderRepository.deleteById(id);
    }

    @Override
    public Order saveNewOrder(Order order) {
        return orderRepository.save(order);
    }

    @Override
    public Order payment(OrderDTO orderDTO, int statusOrder, int statusPayment) {
        OrderDetail orderDetail = orderDetailService.saveNewOrderDetail(orderDTO.getOrderDetail());
        Order order = new Order();
        order.setTotalMoney(orderDTO.getTotalMoney().add(new BigDecimal(30000)));
        order.setStatusPayment(statusPayment);
        order.setStatusReceive(statusOrder);
        order.setDateBooking(LocalDate.now());
        order.setOrderDetail(orderDetail);
        order.setUser(orderDTO.getUser());
        Order newOrder = saveNewOrder(order);
        return newOrder;
    }
}
