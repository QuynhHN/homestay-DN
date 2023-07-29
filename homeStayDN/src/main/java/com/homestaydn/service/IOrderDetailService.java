package com.homestaydn.service;

import com.homestaydn.model.Order;
import com.homestaydn.model.OrderDetail;

public interface IOrderDetailService {
    OrderDetail saveNewOrderDetail(OrderDetail orderDetail);
    OrderDetail findOrderById(int id);
    void deleteOrderById(int id);
}
