import React from "react";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";
export default function Header() {
  return (
    <div
      className={`${styles.navbar} w-100 d-flex align-items-center`}
      style={{ background: "#000" }}
    >
      <div className="container">
        <ul
          className={`${styles.menu_navbar} d-flex justify-content-between align-items-center list-unstyled w-100 m-0`}
        >
          <li className="fw-bolder" style={{ fontSize: 20 }}>
            Fluérision Homestay
          </li>
          <li>
            <Link className={`${styles.navigator}`} to={"/"}>
              Trang chủ
            </Link>
          </li>
          <li>
            <Link className={`${styles.navigator}`} to={"/introduce-homestay"}>
              Giới thiệu
            </Link>
          </li>
          <li>
            <Link className={`${styles.navigator}`} to={"/feedback"}>
              Feedback
            </Link>
          </li>
          <li>
            <Link className={`${styles.navigator}`} to={"/"}>
              Dịch vụ
            </Link>
          </li>
          <li>
            <Link className={`${styles.navigator}`} to={"/"}>
              Hình ảnh
            </Link>
          </li>
          <li>
            <Link className={`${styles.navigator}`} to={"/"}>
              Liên hệ
            </Link>
          </li>
          <li>
            <Link className={`${styles.navigator}`} to={"/"}>
              Tin tức & sự kiện
            </Link>
          </li>
          <li>
            <Link className={`${styles.navigator}`} to={"/login"}>
              Đăng nhập
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
