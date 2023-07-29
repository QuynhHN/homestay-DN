package com.homestaydn.service.impl;

import com.homestaydn.model.Order;
import com.homestaydn.model.OrderDetail;
import com.homestaydn.repository.IDetailOrderRepository;
import com.homestaydn.service.IOrderDetailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class OrderDetailService implements IOrderDetailService {
    @Autowired
    private IDetailOrderRepository detailOrderRepository;

    @Override
    public OrderDetail saveNewOrderDetail(OrderDetail orderDetail) {
        return detailOrderRepository.save(orderDetail);
    }

    @Override
    public OrderDetail findOrderById(int id) {
        return detailOrderRepository.findById(id).get();
    }

    @Override
    public void deleteOrderById(int id) {

    }
}
