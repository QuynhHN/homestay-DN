import React, { useEffect, useState } from "react";
import styles from "./PrepareOrder.module.css";
import Header from "../common/header/Header";
import Footer from "../common/footer/Footer";
import { differenceInBusinessDays } from "date-fns";
import * as Yup from "yup";
import Swal from "sweetalert2";
import {
  getInforUserByNameAccount,
  paymentByPayPal,
} from "../../service/orderService";
import { Field, Formik, Form, ErrorMessage } from "formik";
import { Backdrop, CircularProgress } from "@mui/material";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate, useParams } from "react-router-dom";
import { getRoomById } from "../../service/roomService";
import { red } from "@mui/material/colors";
export default function PrepareOrder() {
  const account = JSON.parse(localStorage.getItem("account"));
  const [open, setOpen] = useState(false);
  const [user, setUser] = useState(null);
  const [room, setRoom] = useState(null);
  const [amountBooking, setAmountBooking] = useState(1);
  const navigate = useNavigate();
  const { id } = useParams();
  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };
  const handleAddAmountBooking = () => {
    if (amountBooking < room.availableRoom) {
      setAmountBooking((prev) => prev + 1);
    } else {
      Swal.fire({
        title: "Không thể thêm nữa",
        text: `Xin lỗi! Không đủ số phòng có sẵn.`,
        icon: "error",
        confirmButtonText: "Đóng",
      });
    }
  };
  const handleSubtractAmountBooking = () => {
    if (amountBooking > 1) {
      setAmountBooking((prev) => prev - 1);
    }
  };
  useEffect(() => {
    const getInforUserBooking = async () => {
      const result = await getInforUserByNameAccount(
        account.username,
        account.token
      );
      setUser(result);
    };
    const getInforRoom = async () => {
      const result = await getRoomById(id);
      console.log(result);
      setRoom(result);
    };
    getInforUserBooking();
    getInforRoom();
  }, []);
  return (
    <div className={`${styles.content}`}>
      <>
        <Header />
        <div
          className={`${styles.content} container`}
          style={{ marginBottom: 100 }}
        >
          <p
            style={{
              margin: 30,
              display: "inline-block",
              padding: "7px 18px",
              fontWeight: 600,
              background: "#000",
              color: "#fff",
            }}
          >
            THÔNG TIN ĐẶT PHÒNG
          </p>
          {user && room && (
            <Formik
              initialValues={{
                user: user,
                orderDetail: {
                  amountRoom: amountBooking,
                  dateReceive: new Date().toISOString().split("T")[0],
                  datePay: new Date(new Date().getTime() + 24 * 60 * 60 * 1000)
                    .toISOString()
                    .split("T")[0],
                  room: room,
                },
              }}
              onSubmit={(value) => {
                // if (+value.methodPay === 0) {
                //   const paymentAfterReceive = async () => {
                //     // await paymentByPostpaid(value, token);
                //   };
                //   handleOpen();
                //   setTimeout(() => {
                //     paymentAfterReceive();
                //     handleClose();
                //     toast.success(
                //       "Đặt hàng thành công, đơn hàng sẽ được giao trong 3-5 ngày."
                //     );
                //     navigate("/");
                //     localStorage.removeItem("cart");
                //   }, 3000);
                // } else if (+value.methodPay === 1) {
                //   console.log(value);
                //   const paymentByVNPayOnline = async () => {
                //     // const result = await paymentByVNPay(value, token);
                //     handleOpen();
                //     setTimeout(() => {
                //       //   window.location = result.urlForward;
                //       handleClose();
                //       toast.success(
                //         "Đặt hàng thành công, đơn hàng sẽ được giao trong 3-5 ngày."
                //       );
                //     }, 3000);
                //   };
                //   paymentByVNPayOnline();
                // } else
                if (+value.methodPay === 2) {
                  console.log(value);
                  value = {
                    ...value,
                    totalMoney: room.price * amountBooking + 50000,
                    orderDetail: {
                      ...value.orderDetail,
                      amountRoom: amountBooking,
                    },
                  };
                  const paymentByPaypalOnline = async () => {
                    const result = await paymentByPayPal(value, account.token);
                    console.log(result);
                    handleOpen();
                    setTimeout(() => {
                      window.location = result.link;
                      handleClose();
                    }, 3000);
                  };
                  paymentByPaypalOnline();
                }
              }}
              validationSchema={Yup.object().shape({
                orderDetail: Yup.object().shape({
                  dateReceive: Yup.date()
                    .required("Ngày nhận phòng là bắt buộc")
                    .test(
                      "Ngày thêm phải bé hơn hoặc bằng ngày hiện tại.",
                      "Ngày đặt phòng phải bé hơn ngày trả.",
                      function (value) {
                        const datePay = this.resolve(Yup.ref("datePay"));
                        return (
                          differenceInBusinessDays(new Date(value), datePay) <=
                          0
                        );
                      }
                    ),
                  datePay: Yup.date().required("Ngày trả phòng là bắt buộc"),
                }),
              })}
            >
              <Form>
                <div className="row">
                  <div className="col-7 ps-4 pe-4">
                    <div className="container">
                      <input
                        className={`${styles.field_input}`}
                        value={"Họ và tên: " + user.nameCustomer}
                        placeholder="Họ và tên"
                        disabled
                      />
                      <div className="d-flex justify-content-between mt-4">
                        <div className="col-8 pe-4">
                          <input
                            className={`${styles.field_input}`}
                            placeholder="Email"
                            value={"Email: " + user.email}
                            disabled
                          />
                        </div>
                        <div className="col-4">
                          <input
                            className={`${styles.field_input}`}
                            value={"SĐT: " + user.phoneNumber}
                            disabled
                            placeholder="Số điện thoại"
                          />
                        </div>
                      </div>
                      <input
                        className={`${styles.field_input} mt-4`}
                        value={"Quê quán: " + user.address}
                        placeholder="Địa chỉ"
                        disabled
                      />
                      <div className="d-flex justify-content-between mt-4">
                        <div className="col-6 pe-2">
                          <input
                            className={`${styles.field_input}`}
                            value="Quốc tịch: Việt Nam"
                            disabled
                            placeholder="Quốc gia"
                          />
                        </div>
                        <div className="col-6">
                          <input
                            className={`${styles.field_input}`}
                            value={
                              "Ngày sinh: " +
                              (user.dateOfBirth || "Chưa cập nhật")
                            }
                            disabled
                            placeholder="Ngày sinh"
                          />
                        </div>
                      </div>
                      <Field
                        name="methodPay"
                        as="select"
                        className={`${styles.field_input} mt-4`}
                      >
                        <option value="0">Thanh toán khi nhận hàng</option>
                        <option value="1">Thanh toán bằng VNPAY</option>
                        <option value="2">Thanh toán bằng Paypal</option>
                      </Field>
                    </div>
                  </div>
                  <div
                    className="col-5 pt-2"
                    style={{
                      boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
                      backgroundColor: "#fafafa",
                    }}
                  >
                    {room && (
                      <>
                        <table class="table">
                          <thead>
                            <th colSpan={2}>Tên phòng</th>
                            <th>Diện tích</th>
                            <th>Giá phòng</th>
                          </thead>
                          <tbody>
                            <tr className="pt-2 pb-2">
                              <td className="col-3 position-relative">
                                <img
                                  src={room.imgRooms[0].pathImg}
                                  alt=""
                                  className="w-100"
                                />
                              </td>
                              <td style={{ verticalAlign: "middle" }}>
                                <p className="m-0">{room.nameRoom}</p>
                              </td>
                              <td style={{ verticalAlign: "middle" }}>
                                <p
                                  className="m-0 fw-bold"
                                  style={{ color: "#898787" }}
                                >
                                  {room.areaRoom + " m²"}
                                </p>
                              </td>
                              <td
                                className="text-end"
                                style={{ verticalAlign: "middle" }}
                              >
                                {room.price.toLocaleString("it-IT", {
                                  style: "currency",
                                  currency: "VND",
                                })}
                              </td>
                            </tr>
                            <tr>
                              <td colSpan={2}>
                                <p
                                  className="m-0 pt-2 fw-bold text-start"
                                  style={{ paddingTop: "1rem" }}
                                >
                                  Tạm tính
                                </p>
                                <p className="text-start fw-bold">
                                  Phí giữ phòng cho khách
                                </p>
                              </td>
                              <td></td>
                              <td>
                                <p
                                  className="m-0 text-end"
                                  style={{ paddingTop: "1rem" }}
                                >
                                  {(room.price * amountBooking).toLocaleString(
                                    "it-IT",
                                    {
                                      style: "currency",
                                      currency: "VND",
                                    }
                                  )}
                                </p>
                                <p className="text-end">50.000 VND</p>
                              </td>
                            </tr>
                            <tr>
                              <td colSpan={2}>
                                <p
                                  className="m-0 pt-2 fw-bold text-start"
                                  style={{ paddingTop: "1rem" }}
                                >
                                  Số lượng đặt:
                                </p>
                              </td>
                              <td></td>
                              <td className="col-2">
                                <div className="d-flex justify-content-center pt-1 pb-1">
                                  <button
                                    className={`${styles.amountBookingBtn}`}
                                    onClick={handleSubtractAmountBooking}
                                  >
                                    -
                                  </button>
                                  <input
                                    type="text"
                                    value={amountBooking}
                                    className={`${styles.amountBooking} text-center`}
                                    disabled
                                  />
                                  <button
                                    className={`${styles.amountBookingBtn}`}
                                    onClick={handleAddAmountBooking}
                                  >
                                    +
                                  </button>
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td colSpan={2}>
                                <p
                                  className="m-0 pt-2 fw-bold text-start"
                                  style={{ paddingTop: "1rem" }}
                                >
                                  Ngày nhận phòng:
                                </p>
                                <p
                                  className="m-0 pt-2 fw-bold text-start"
                                  style={{ paddingTop: "1rem" }}
                                >
                                  Ngày trả phòng:
                                </p>
                                <ErrorMessage
                                  className="m-0 pt-2 fw-bold text-start text-danger"
                                  style={{
                                    paddingTop: "1rem",
                                    fontSize: 14,
                                  }}
                                  component={"p"}
                                  name="orderDetail.dateReceive"
                                ></ErrorMessage>
                              </td>
                              <td></td>
                              <td className="col-2">
                                <div className="d-flex justify-content-center pt-1 pb-1">
                                  <Field
                                    name="orderDetail.dateReceive"
                                    type="date"
                                    className={`${styles.date_input}`}
                                  />
                                </div>
                                <div className="d-flex justify-content-center pt-1 pb-1">
                                  <Field
                                    name="orderDetail.datePay"
                                    type="date"
                                    className={`${styles.date_input}`}
                                  />
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                        <div className="d-flex justify-content-between pb-3">
                          <span className="fw-bold" style={{ fontSize: 20 }}>
                            Tổng hóa đơn
                          </span>
                          <span className="fw-bold" style={{ fontSize: 20 }}>
                            {(
                              room.price * amountBooking +
                              50000
                            ).toLocaleString("it-IT", {
                              style: "currency",
                              currency: "VND",
                            })}
                          </span>
                        </div>
                      </>
                    )}
                  </div>
                </div>
                <div className="d-flex justify-content-center m-5">
                  <button type="submit" className={styles.payment_btn}>
                    Xác nhận thanh toán
                  </button>
                </div>
              </Form>
            </Formik>
          )}
        </div>
        <Footer />
        <div>
          <Backdrop
            sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={open}
          >
            <CircularProgress color="inherit" />
          </Backdrop>
        </div>
        <ToastContainer />
      </>
    </div>
  );
}
