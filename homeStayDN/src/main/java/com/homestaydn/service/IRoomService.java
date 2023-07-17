package com.homestaydn.service;

import com.homestaydn.model.Room;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface IRoomService {
    Page<Room> findAllRoom(Pageable pageable, String search);
    Room findRoomById(int id);
}
