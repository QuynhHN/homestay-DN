package com.homestaydn.model;

import javax.persistence.*;
import java.math.BigDecimal;
import java.util.List;

@Entity
public class Room {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String nameRoom;
    @Column(columnDefinition = "decimal(12,0)")
    private BigDecimal price;
    private int availableRoom;
    private double areaRoom;
    private String address;
    @Column(columnDefinition = "mediumtext")
    private String description;
    @ManyToMany
    private List<ImgRoom> imgRooms;
    @ManyToMany
    private List<Facility> facilities;
    @ManyToOne
    private TypeRoom typeRoom;

    public Room() {
    }

    public Room(int id, String nameRoom, BigDecimal price, int availableRoom, double areaRoom, String address, String description, List<ImgRoom> imgRooms, List<Facility> facilities, TypeRoom typeRoom) {
        this.id = id;
        this.nameRoom = nameRoom;
        this.price = price;
        this.availableRoom = availableRoom;
        this.areaRoom = areaRoom;
        this.address = address;
        this.description = description;
        this.imgRooms = imgRooms;
        this.facilities = facilities;
        this.typeRoom = typeRoom;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getNameRoom() {
        return nameRoom;
    }

    public void setNameRoom(String nameRoom) {
        this.nameRoom = nameRoom;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public BigDecimal getPrice() {
        return price;
    }

    public void setPrice(BigDecimal price) {
        this.price = price;
    }

    public int getAvailableRoom() {
        return availableRoom;
    }

    public void setAvailableRoom(int availableRoom) {
        this.availableRoom = availableRoom;
    }

    public double getAreaRoom() {
        return areaRoom;
    }

    public void setAreaRoom(double areaRoom) {
        this.areaRoom = areaRoom;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public List<ImgRoom> getImgRooms() {
        return imgRooms;
    }

    public void setImgRooms(List<ImgRoom> imgRooms) {
        this.imgRooms = imgRooms;
    }

    public List<Facility> getFacilities() {
        return facilities;
    }

    public void setFacilities(List<Facility> facilities) {
        this.facilities = facilities;
    }

    public TypeRoom getTypeRoom() {
        return typeRoom;
    }

    public void setTypeRoom(TypeRoom typeRoom) {
        this.typeRoom = typeRoom;
    }
}
