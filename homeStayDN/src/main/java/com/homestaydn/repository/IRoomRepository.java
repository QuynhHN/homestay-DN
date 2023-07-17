package com.homestaydn.repository;

import com.homestaydn.model.Room;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IRoomRepository extends JpaRepository<Room, Integer> {
    Page<Room> findAllByNameRoomContaining(Pageable pageable, String search);
}
