import React from "react";
import styles from "./Header.module.css";
import { Link, useNavigate } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import { Tooltip } from "react-tooltip";
import { useEffect, useState } from "react";
export default function Header() {
  const [roles, setRoles] = useState(null);
  const [account, setAccount] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    const account = JSON.parse(localStorage.getItem("account"));
    if (account) {
      let roleArr = [];
      for (let i = 0; i < account.roles.length; i++) {
        roleArr.push(account.roles[i].authority);
      }
      setAccount(account);
      setRoles(roleArr);
    }
  }, []);
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
            {account ? (
              <>
                <Avatar className={`${styles.avatar}`} id="avatar">
                  {account && account.username[0].toUpperCase()}
                </Avatar>
                <Tooltip
                  anchorSelect="#avatar"
                  style={{ zIndex: 10000, fontSize: 16 }}
                  clickable
                >
                  {roles && roles.includes("ADMIN") && (
                    <div className={`${styles.author_account}`}>
                      <button
                        onClick={() => {
                          navigate("/login");
                        }}
                        className="bg-transparent border-0 text-light"
                      >
                        Danh sách phòng
                      </button>
                    </div>
                  )}
                  {roles && roles.includes("ADMIN") && (
                    <div
                      className={`${styles.author_account} ${styles.border_author}`}
                    >
                      <button
                        onClick={() => {
                          navigate("/statistic");
                        }}
                        className="bg-transparent border-0 text-light"
                      >
                        Thống kê cửa hàng
                      </button>
                    </div>
                  )}
                  {roles &&
                    (roles.includes("ADMIN") || roles.includes("EMPLOYEE")) && (
                      <div className={`${styles.author_account}`}>
                        <button
                          onClick={() => {
                            navigate("/management-order");
                          }}
                          className="bg-transparent border-0 text-light"
                        >
                          Quản lý đơn đặt
                        </button>
                      </div>
                    )}
                  {roles &&
                    (roles.includes("ADMIN") || roles.includes("EMPLOYEE")) && (
                      <div
                        className={`${styles.author_account} ${styles.border_author}`}
                      >
                        <button
                          onClick={() => {
                            navigate("/login");
                          }}
                          className="bg-transparent border-0 text-light"
                        >
                          Danh sách khách hàng
                        </button>
                      </div>
                    )}
                  {account && (
                    <div className={`${styles.author_account}`}>
                      <button
                        onClick={() => {
                          navigate("/history");
                        }}
                        className="bg-transparent border-0 text-light"
                      >
                        Lịch sử đặt phòng
                      </button>
                    </div>
                  )}
                  {account && (
                    <div className={`${styles.author_account}`}>
                      <button
                        onClick={() => {
                          navigate("/information-user");
                        }}
                        className="bg-transparent border-0 text-light"
                      >
                        Thông tin tài khoản
                      </button>
                    </div>
                  )}
                  {account && (
                    <div className={`${styles.author_account}`}>
                      <button
                        onClick={() => {
                          localStorage.removeItem("account");
                          window.location = "/";
                        }}
                        className="bg-transparent border-0 text-light"
                      >
                        Đăng xuất
                      </button>
                    </div>
                  )}
                  {!account && (
                    <button
                      onClick={() => {
                        navigate("/login");
                      }}
                      className="bg-transparent border-0 text-light"
                    >
                      Đăng nhập
                    </button>
                  )}
                </Tooltip>
              </>
            ) : (
              <Link className={`${styles.navigator}`} to={"/login"}>
                Đăng nhập
              </Link>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
}
