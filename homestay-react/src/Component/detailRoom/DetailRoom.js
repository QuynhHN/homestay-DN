import React, { useEffect, useState } from "react";
import styles from "./DetailRoom.module.css";
import { useNavigate, useParams } from "react-router-dom";
import { getRoomById } from "../../service/roomService";
import Header from "../common/header/Header";
import Footer from "../common/footer/Footer";
import { Done } from "@mui/icons-material";
import { getAllListRoom } from "../../service/homeService";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import Slider from "react-slick";

export default function DetailRoom() {
  const { id } = useParams();
  const [room, setRoom] = useState(null);
  const [currentImg, setCurrentImg] = useState(0);
  const [listRoom, setListRoom] = useState(null);
  const [slickIndex, setSlickIndex] = useState(0);
  const navigate = useNavigate();
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    arrows: false,
    centerPadding: "60px",
    slidesToShow: 5,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 500,
    beforeChange: (current, next) => setSlickIndex(next),
  };
  useEffect(() => {
    const getDetailRoom = async () => {
      const result = await getRoomById(id);
      console.log(result);
      setRoom(result);
    };
    getDetailRoom();
  }, [id]);
  useEffect(() => {
    const getListRoom = async () => {
      const result = await getAllListRoom();
      setListRoom(result);
    };
    getListRoom();
  }, []);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div>
      <Header />
      <div className={`${styles.content} container`}>
        {room && (
          <>
            <div className="row">
              <div className="col-6">
                <div className="main-img">
                  <img
                    src={room.imgRooms[currentImg].pathImg}
                    className="w-100 p-3"
                    alt=""
                  />
                </div>
                <div className="slide-img d-flex justify-content-center align-items-center">
                  {room.imgRooms.map((img, index) => {
                    return (
                      <div style={{ width: "33.3%" }}>
                        <img
                          src={img.pathImg}
                          className="w-75"
                          style={{
                            boxShadow:
                              "rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px",
                            cursor: "pointer",
                          }}
                          onClick={() => {
                            setCurrentImg(index);
                          }}
                          alt=""
                        />
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="col-6 p-3">
                <h2 className="text-start mb-3" style={{ color: "#b75e05" }}>
                  {room?.nameRoom}
                </h2>
                <div className="d-flex">
                  <div className="col-6">
                    <p className={`${styles.title_infor} text-start`}>
                      <span>- Địa chỉ: </span>
                      <span className={styles.color_e1}>
                        {room.address}, Đà Nẵng
                      </span>
                    </p>
                    <p className={`${styles.title_infor} text-start`}>
                      <span>- Kiểu phòng: </span>
                      <span className={styles.color_e1}>
                        {room.typeRoom.nameTypeRoom}
                      </span>
                    </p>
                    <p className={`${styles.title_infor} text-start`}>
                      <span>- Giá chỉ từ: </span>{" "}
                      <span className={styles.color_e1}>
                        {room.price.toLocaleString("it-IT", {
                          style: "currency",
                          currency: "VND",
                        })}
                      </span>
                    </p>
                  </div>
                  <div className="col-6">
                    <p className={`${styles.title_infor} text-start`}>
                      <span>- Diện tích phòng:</span>{" "}
                      <span className={styles.color_e1}>
                        {room.areaRoom} m²
                      </span>
                    </p>
                    <p className={`${styles.title_infor} text-start`}>
                      <span>- Phòng còn trống:</span>{" "}
                      <span className={styles.color_e1}>
                        {room.availableRoom}
                      </span>
                    </p>
                  </div>
                </div>
                <p className={`${styles.title_infor} text-start`}>
                  - Tiện nghi phòng:
                </p>
                <div className={styles.facility_grid}>
                  {room.facilities.map((facility, index) => {
                    return (
                      <span
                        className={`${styles.name_facility} text-start ps-3`}
                        key={index}
                      >
                        <Done /> {facility.nameFacility}
                      </span>
                    );
                  })}
                </div>
                <div className="d-flex justify-content-start mt-2">
                  <button className={styles.booking_now}>
                    Đặt phòng ngay tại đây
                  </button>
                </div>
              </div>
            </div>
            <div className={`${styles.description} mt-3`}>
              <p style={{ fontSize: 20, fontWeight: 500, textAlign: "start" }}>
                Mô tả phòng:{" "}
              </p>
              <p className="fw-normal text-start" style={{ fontSize: 16 }}>
                {room.description}
              </p>
            </div>
          </>
        )}
        <div className={`${styles.menu_homestay} mt-5`}>
          <p
            style={{
              fontSize: 24,
              fontWeight: 600,
              textAlign: "start",
              margin: 0,
            }}
          >
            Xem thêm phòng:{" "}
          </p>
          <Slider {...settings}>
            {listRoom &&
              listRoom.content &&
              listRoom.content.map((room, index) => {
                return (
                  <div
                    className={`${styles.card} ${
                      index === slickIndex ? styles.slide_active : ""
                    }`}
                    onClick={() => {
                      navigate("/room/" + room.id);
                      scrollToTop();
                    }}
                  >
                    <img
                      className="w-100"
                      alt=""
                      src={room.imgRooms[0].pathImg}
                    />
                    <div className={`${styles.title_card} ms-2`}>
                      <p className={`${styles.nameRoom} m-0 text-start`}>
                        {room.nameRoom}
                      </p>
                      <p
                        className={`${styles.addressRoom} m-0 pb-2 text-start`}
                      >
                        <span className="fw-bold">Địa chỉ: </span>
                        {room.address}, Đà Nẵng
                      </p>
                      <p className={`${styles.addressRoom} pb-2 text-start`}>
                        <span className="fw-bold">Phong cách: </span>{" "}
                        {room.typeRoom.nameTypeRoom}
                      </p>
                    </div>
                    <p
                      className={`${styles.priceRoom} ms-2 pt-3 pb-3 text-start`}
                    >
                      <AccessTimeIcon /> Từ{" "}
                      {room.price.toLocaleString("it-IT", {
                        style: "currency",
                        currency: "VND",
                      })}
                    </p>
                  </div>
                );
              })}
          </Slider>
        </div>
      </div>
      <Footer />
    </div>
  );
}
