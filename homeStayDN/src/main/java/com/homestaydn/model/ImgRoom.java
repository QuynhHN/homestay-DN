package com.homestaydn.model;

import javax.persistence.*;

@Entity
public class ImgRoom {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    @Column(columnDefinition = "mediumtext")
    private String pathImg;

    public ImgRoom() {
    }

    public ImgRoom(int id, String pathImg) {
        this.id = id;
        this.pathImg = pathImg;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getPathImg() {
        return pathImg;
    }

    public void setPathImg(String pathImg) {
        this.pathImg = pathImg;
    }
}
