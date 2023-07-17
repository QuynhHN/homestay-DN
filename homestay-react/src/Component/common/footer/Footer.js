import React from "react";
import styles from "./Footer.module.css";
import {
  FacebookOutlined,
  GoogleOutlined,
  InstagramOutlined,
  SkypeOutlined,
} from "@ant-design/icons";
export default function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.footer_top}>
        <h2
          className={`text-center m-0 text-uppercase + ${styles.title_footer}`}
        >
          "Fluérision Homestay Da Nang"
        </h2>
      </div>
      <div className="footer-bottom mt-5 pb-4">
        <div className="container d-flex justify-content-between align-items-start">
          <div className="w-25">
            <div className="text-footer">Theo dõi Fluérision Homestay tại:</div>
            <div className="text-footer">
              <FacebookOutlined className="me-2" style={{ fontSize: 32 }} />
              <GoogleOutlined className="me-2" style={{ fontSize: 32 }} />
              <InstagramOutlined className="me-2" style={{ fontSize: 32 }} />
              <SkypeOutlined className="me-2" style={{ fontSize: 32 }} />
            </div>
            <div className="hotline text-footer">
              HOTLINE: 0902.638.020 - 0931.610.291
            </div>
            <div className="text-footer">HỘ KINH DOANH HQ - HQ Company</div>
            <div className="mb-2">
              <span className="text-footer">Trụ sở kinh doanh: </span>
              <span>295 Trần Hưng Đạo, Ngũ Hành Sơn, Đà Nẵng</span>
            </div>
            <div className="mb-2">
              <span className="text-footer">MÃ SỐ THUẾ: </span>
              <span>4108046202 - NGÀY CẤP: 08/11/2022</span>
            </div>
            <div className="mb-2">
              <span className="text-footer">NGƯỜI ĐẠI DIỆN: </span>
              <span>Hoàng Như Quỳnh</span>
            </div>
            <div className="mb-2">
              <span className="text-footer text-end">EMAIL: </span>
              <span>hoangquynh95@gmail.com</span>
            </div>
          </div>
          <div className="w-50 ps-5 pe-5">
            <div className="text-footer">Chi nhánh bản quyền:</div>
            <div className="text-footer">Sài gòn</div>
            <div className="text-footer">
              1. 93 Rạch Bùng Binh,Phường 9, Quận 3
            </div>
            <div className="text-footer">
              3. 57 Nguyễn Gia Trí phường 25, quận Bình Thạnh
            </div>
            <div className="text-footer">Hà Nội</div>
            <div className="text-footer">
              5. 21B Phố Lò Đúc, Phường Ngô Thì Nhậm, Quận Hai Bà Trưng, Hà Nội
            </div>
            <div className="text-footer">Quảng Bình</div>
            <div className="text-footer">
              6. 24 Hùng Vương, TT Kiến Giang, Lệ Thủy, Quảng Bình
            </div>
            <div className="text-footer">Đà Nẵng</div>
            <div className="text-footer">
              8. 295 Trần Hưng Đạo, Ngũ Hành Sơn, Đà Nẵng
            </div>
          </div>
          <div className="w-25">
            <div className="text-footer">Chính sách thuê & trả</div>
            <div className="text-footer">Chính sách dịch vụ</div>
            <div className="text-footer">Thông tin liên hệ</div>
            <div className="text-footer">Chính sách bảo mật thông tin</div>
            <div className="text-footer">
              Chính sách bảo mật - Thông tin thanh toán
            </div>
            <div className="text-footer">Điều khoản giao dịch chung</div>
            <div className="text-footer">Chính sách phục vụ, tận hưởng</div>
          </div>
        </div>
      </div>
    </div>
  );
}
