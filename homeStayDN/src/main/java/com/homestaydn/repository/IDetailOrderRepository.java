package com.homestaydn.repository;

import com.homestaydn.model.OrderDetail;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IDetailOrderRepository extends JpaRepository<OrderDetail, Integer> {

}
