package com.homestaydn.controller;

import com.homestaydn.service.IRoomService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/public/room")
@CrossOrigin("*")
public class RoomController {
    @Autowired
    private IRoomService roomService;
    @GetMapping("")
    public ResponseEntity<?> findAllRoom(@RequestParam(defaultValue = "0") int page, @RequestParam(defaultValue = "") String search) {
        Pageable pageable = PageRequest.of(page, 8, Sort.by("nameRoom"));
        return new ResponseEntity<>(roomService.findAllRoom(pageable, search), HttpStatus.OK);
    }
    @GetMapping("/{id}")
    public ResponseEntity<?> findRoomById(@PathVariable int id) {
        return new ResponseEntity<>(roomService.findRoomById(id), HttpStatus.OK);
    }
}
