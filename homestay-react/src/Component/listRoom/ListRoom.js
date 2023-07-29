import React, { useEffect, useState } from "react";
import styles from "./ListRoom.module.css";
import Header from "../common/header/Header";
import Footer from "../common/footer/Footer";
import {
  getAllListRoom,
  getAllListRoomBaseOnSearchAndPage,
} from "../../service/homeService";
import { useNavigate } from "react-router-dom";
import ReactPaginate from "react-paginate";
export default function ListRoom() {
  const [listRoom, setListRoom] = useState(null);
  const navigate = useNavigate();
  const [searchAndPage, setSearchAndPage] = useState({
    search: "",
    page: 0,
    typeProduct: 0,
  });
  useEffect(() => {
    const getListRoom = async () => {
      const listRoom = await getAllListRoomBaseOnSearchAndPage(searchAndPage);
      setListRoom(listRoom);
    };
    getListRoom();
  }, [searchAndPage]);
  const handlePageClick = (event) => {
    setSearchAndPage((prev) => ({ ...prev, page: event.selected }));
  };
  return (
    <div>
      <Header />
      <div className={`${styles.content} container`}>
        <div className={`row`}>
          {listRoom &&
            listRoom.content.map((room, index) => {
              return (
                <div
                  className={`w-25 p-3 d-flex justify-content-center align-items-center flex-column`}
                  key={index}
                  onClick={() => {
                    navigate("/room/" + room.id);
                  }}
                >
                  <div className={styles.card_room}>
                    <img
                      src={room.imgRooms[0].pathImg}
                      style={{ width: 218, height: 218, objectFit: "contain" }}
                      className={styles.imgProduct}
                      alt=""
                    />
                    <div className="desc" style={{ cursor: "pointer" }}>
                      <p className="text-center text-uppercase fw-bold m-0 mb-2">
                        {room.nameRoom}
                      </p>
                      <p className="text-center text-uppercase fw-bold m-0">
                        {room.price.toLocaleString("it-IT", {
                          style: "currency",
                          currency: "VND",
                        })}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          {listRoom && listRoom.content.length > 0 && (
            <div className="d-flex justify-content-center align-items-center mt-5 mb-3">
              <ReactPaginate
                breakLabel="..."
                nextLabel=">"
                onPageChange={handlePageClick}
                pageCount={listRoom.totalPages}
                previousLabel="<"
                containerClassName={styles.pagination}
                pageLinkClassName={styles.page_num}
                nextLinkClassName={styles.page_num}
                previousLinkClassName={styles.page_num}
                activeClassName={styles.active}
                disabledClassName="d-none"
              />
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}
