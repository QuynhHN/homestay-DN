package com.homestaydn.service.impl;

import com.homestaydn.model.Room;
import com.homestaydn.repository.IRoomRepository;
import com.homestaydn.service.IRoomService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@Service
public class RoomService implements IRoomService {
    @Autowired
    private IRoomRepository roomRepository;
    @Override
    public Page<Room> findAllRoom(Pageable pageable, String search) {
        return roomRepository.findAllByNameRoomContaining(pageable, search);
    }

    @Override
    public Room findRoomById(int id) {
        return roomRepository.findById(id).get();
    }
}
