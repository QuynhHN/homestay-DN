import React, { useEffect, useState } from "react";
import styles from "./Home.module.css";
import Header from "../common/header/Header";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { IMAGES } from "../asset/images";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { getAllListRoom } from "../../service/homeService";
import Footer from "../common/footer/Footer";
import { getAllFeedbackInHomePage } from "../../service/feedbackService";
import Slider from "react-slick";
import { useNavigate } from "react-router-dom";
export default function Home() {
  const [listRoom, setListRoom] = useState(null);
  const [feedbacks, setFeedbacks] = useState(null);
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
    const getListRoom = async () => {
      const result = await getAllListRoom();
      setListRoom(result);
    };
    getListRoom();
    const getFeedBack = async () => {
      const result = await getAllFeedbackInHomePage();
      setFeedbacks(result);
    };
    getFeedBack();
  }, []);
  return (
    <div>
      <Header />
      <div>
        <div className={`${styles.slide}`}>
          <Swiper
            centeredSlides={true}
            effect={"fade"}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className={`${styles.mySwiper}`}
          >
            <SwiperSlide>
              <img
                className="w-100"
                style={{ height: 650 }}
                src={IMAGES.TRANG_DEN}
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="w-100"
                style={{ height: 650 }}
                src={IMAGES.XANH_DEN}
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="w-100"
                style={{ height: 650 }}
                src={IMAGES.XAM_DEN}
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="w-100"
                style={{ height: 650 }}
                src={IMAGES.VANG_DEN}
                alt=""
              />
            </SwiperSlide>
          </Swiper>
        </div>
        <div className={styles.more_than_homestay}>
          <h2 style={{ fontWeight: 700, color: "#fff", letterSpacing: 2 }}>
            HOMESTAY CHẤT
          </h2>
          <p style={{ color: "#fff", letterSpacing: 1 }}>
            more than a homestay
          </p>
          <button className={styles.booking_now}>ĐẶT PHÒNG NGAY</button>
        </div>
        <div className="d-flex flex-column justify-content-center align-items-center mt-5 mb-3">
          <div
            style={{ width: 150, height: 3, background: "#e1e1e1" }}
            className="d-flex justify-content-center"
          >
            <p style={{ background: "#b75e05" }} className="w-50 h-100"></p>
          </div>
          <div>
            <h2 style={{ fontWeight: 500, color: "#333", marginTop: "2rem" }}>
              Nghỉ dưỡng với trải nghiệm hoàn hảo
            </h2>
            <p
              style={{
                fontSize: 20,
                lineHeight: 2,
                letterSpacing: 5,
                color: "#555",
              }}
            >
              Sống với thiên nhiên - Khám phá không gian tuyệt đẹp
            </p>
          </div>
        </div>
        <div className={`${styles.menu_homestay}`}>
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
        <div className={`${styles.feedback}`} style={{ marginTop: 100 }}>
          <div className={`${styles.feedback_title} pt-1 pb-2`}>
            <div className="d-flex flex-column justify-content-center align-items-center mt-5 mb-5">
              <div
                style={{ width: 150, height: 3, background: "#e1e1e1" }}
                className="d-flex justify-content-center"
              >
                <p style={{ background: "#b75e05" }} className="w-50 h-100"></p>
              </div>
              <div>
                <h2
                  style={{
                    fontWeight: 500,
                    color: "#e1e1e1",
                    marginTop: "2rem",
                  }}
                >
                  Đánh giá của Khách hàng
                </h2>
              </div>
            </div>
          </div>
          <div>
            <Swiper
              centeredSlides={true}
              grabCursor={true}
              loop={true}
              slidesPerView={1}
              initialSlide={0}
              effect={"fade"}
              autoplay={{
                delay: 3500,
                disableOnInteraction: false,
              }}
              modules={[Autoplay, Pagination, Navigation]}
              className={`${styles.mySwiper}`}
            >
              {feedbacks &&
                feedbacks.content &&
                feedbacks.content.map((feedback, index) => {
                  return (
                    <SwiperSlide key={index}>
                      <div>
                        <img
                          style={{
                            height: 60,
                            width: 60,
                            borderRadius: 50,
                            objectFit: "cover",
                            opacity: 0.6,
                          }}
                          src={
                            index === 0
                              ? feedbacks.content[feedbacks.content.length - 1]
                                  .user.pathImg
                              : feedbacks.content[index - 1].user.pathImg
                          }
                          alt=""
                        />
                        <img
                          style={{
                            height: 60,
                            width: 60,
                            borderRadius: 50,
                            objectFit: "cover",
                            margin: "0 30px",
                          }}
                          src={feedback.user.pathImg}
                          alt=""
                        />
                        <img
                          style={{
                            height: 60,
                            width: 60,
                            borderRadius: 50,
                            objectFit: "cover",
                            opacity: 0.6,
                          }}
                          src={
                            index === feedbacks.content.length - 1
                              ? feedbacks.content[0].user.pathImg
                              : feedbacks.content[index + 1].user.pathImg
                          }
                          alt=""
                        />
                      </div>
                      <p
                        style={{
                          fontSize: 24,
                          fontWeight: 500,
                          color: "#e1e1e1",
                          textTransform: "uppercase",
                        }}
                        className="pt-4 m-0"
                      >
                        {feedback.user.nameCustomer}
                      </p>
                      <p
                        style={{
                          fontSize: 20,
                          fontWeight: 500,
                          color: "#e1e1e1",
                        }}
                        className="pt-2 pb-1"
                      >
                        Bình chọn:{" "}
                        <span className="fw-bold" style={{ color: "#b75e05" }}>
                          {feedback.point.toFixed(1)}
                        </span>
                      </p>
                      <p
                        style={{
                          fontSize: 16,
                          color: "#e1e1e1",
                          padding: "0 200px",
                        }}
                      >
                        {feedback.comment}
                      </p>
                    </SwiperSlide>
                  );
                })}
            </Swiper>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
