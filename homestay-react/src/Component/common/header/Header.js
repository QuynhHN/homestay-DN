import React from "react";
import styles from "./Header.module.css";
import { Link, useNavigate } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import { Tooltip } from "react-tooltip";
import { useEffect, useState } from "react";
import { SearchOutlined } from "@ant-design/icons";
import { getRoomSearching } from "../../../service/homeService";
export default function Header() {
  const [roles, setRoles] = useState(null);
  const [account, setAccount] = useState(null);
  const navigate = useNavigate();
  const [roomSearched, setRoomSeached] = useState([]);
  const [searchAndPage, setSearchAndPage] = useState({
    search: "",
    page: 0,
  });
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
  useEffect(() => {
    const fetchApiToGetProducts = async () => {
      const result = await getRoomSearching(searchAndPage);
      setRoomSeached(result.content);
    };
    fetchApiToGetProducts();
  }, [searchAndPage]);
  const handleSearchChange = (e) => {
    setSearchAndPage((prev) => ({ ...prev, search: e.target.value }));
  };
  const handleBlurInputSearch = () => {
    document.getElementById("productSeached").style.opacity = 0;
  };
  const handleFocusInputSearch = () => {
    document.getElementById("productSeached").style.opacity = 1;
  };
  return (
    <div
      className={`${styles.navbar} w-100 d-flex align-items-center`}
      style={{ background: "#000" }}
    >
      <div className="container">
        <ul
          className={`${styles.menu_navbar} d-flex justify-content-between align-items-center list-unstyled w-100 m-0`}
        >
          <li
            className="fw-bolder"
            style={{ fontSize: 20 }}
            onClick={() => {
              navigate("/");
            }}
          >
            Fluérision Homestay
          </li>
          <li>
            <Link className={`${styles.navigator}`} to={"/rooms"}>
              Danh sách phòng
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
            <div className={styles.search_box}>
              <div className="d-flex align-items-center">
                <button className={`${styles.btn_search}  d-flex`}>
                  <SearchOutlined style={{ fontSize: 28, color: "#a6a6a6" }} />
                </button>
                <input
                  type="text"
                  id="input-search"
                  className={styles.input_search}
                  placeholder="Tìm kiếm phòng, villa..."
                  onChange={handleSearchChange}
                  onBlur={handleBlurInputSearch}
                  onFocus={handleFocusInputSearch}
                />
              </div>
              <div
                id="productSeached"
                style={{
                  position: "absolute",
                  top: 50,
                  backgroundColor: "#555",
                  zIndex: 100,
                  width: "100%",
                }}
              >
                {roomSearched &&
                roomSearched.length > 0 &&
                searchAndPage.search.trim() !== "" ? (
                  roomSearched.map((room, index) => {
                    return (
                      <div
                        key={index}
                        className="d-flex justify-content-between align-items-center"
                        style={{ border: "1px solid", height: 50 }}
                        onClick={() => {
                          navigate("/room/" + room.id);
                        }}
                      >
                        <div className="col-2">
                          <img
                            className="w-50"
                            src={room.imgRooms[0].pathImg}
                            alt="IMG"
                          />
                        </div>
                        <p
                          className="m-0 h-100 d-flex align-items-center"
                          style={{ fontSize: 14, fontWeight: 600 }}
                        >
                          {room.nameRoom}
                        </p>
                        <p
                          className="m-0 h-100 d-flex align-items-center me-1"
                          style={{ fontSize: 14, fontWeight: 600 }}
                        >
                          {room.price.toLocaleString("it-IT", {
                            style: "currency",
                            currency: "VND",
                          })}
                        </p>
                      </div>
                    );
                  })
                ) : roomSearched &&
                  roomSearched.length === 0 &&
                  searchAndPage.search.trim() !== "" ? (
                  <div
                    style={{ border: "1px solid", height: 50 }}
                    className="w-100 d-flex justify-content-center align-items-center"
                  >
                    <p className="m-0 h-100">
                      Không tìm thấy sản phẩm "{searchAndPage.search}"
                    </p>
                  </div>
                ) : (
                  <></>
                )}
              </div>
            </div>
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
