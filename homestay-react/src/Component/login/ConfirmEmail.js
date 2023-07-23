import { Link, useNavigate } from "react-router-dom";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import styles from "./Login.module.css";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { saveCodeToConfirmEmail } from "../../Redux/Action";
import Header from "../common/header/Header";
import Footer from "../common/footer/Footer";
import { confirmEmail, sendEmail } from "../../service/loginService";
function ConfirmEmail() {
  const [open, setOpen] = useState(false);
  const [isEmailExist, setIsEmailExist] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };
  useEffect(() => {
    document.getElementById("form-login").addEventListener(
      "focus",
      (event) => {
        setIsEmailExist(null);
      },
      true
    );
  }, []);
  return (
    <>
      <Header />
      <div
        className={`${styles.content} d-flex justify-content-center align-items-center p-4`}
      >
        <div className={styles.login}>
          <h1 className={styles.header_page}>Xác minh email</h1>
          <Formik
            initialValues={{
              email: "",
            }}
            validationSchema={Yup.object({
              email: Yup.string()
                .required("Email bắt buộc phải nhập.")
                .matches(
                  /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                  "Email nhập không đúng định dạng."
                ),
            })}
            onSubmit={(value, { setSubmitting }) => {
              const confirmEmailToChangePassword = async () => {
                handleOpen();
                setTimeout(() => {
                  confirmEmail(value).then((e) => {
                    if (e !== undefined) {
                      navigate("/reset-password", {
                        state: { email: value.email },
                      });
                      const sendCode = async () => {
                        const result = await sendEmail(value);
                        dispatch(saveCodeToConfirmEmail(+result.message));
                      };
                      sendCode();
                    } else {
                      setIsEmailExist(
                        "Email này không tồn tại. Vui lòng thử lại."
                      );
                    }
                  });
                  handleClose();
                }, 4000);
              };
              confirmEmailToChangePassword();
            }}
          >
            <Form className={styles.login_form} id="form-login">
              <div className={styles.large_form}>
                <Field
                  type="text"
                  id="customer-email"
                  placeholder="Nhập email đã tạo tài khoản"
                  name="email"
                  className={styles.text_input}
                />
              </div>
              <ErrorMessage
                name="email"
                className={`${styles.error_mess} text-start`}
                component={"p"}
              />
              {isEmailExist && (
                <p className={`${styles.error_mess} text-start`}>
                  {isEmailExist}
                </p>
              )}
              <div
                className={`${styles.large_form} text-start`}
                style={{ fontSize: 15 }}
              >
                Nhập email đã đăng ký tài khoản để có thể đổi mật khẩu và tiếp
                tục thực hiện đăng nhập.
              </div>
              <div
                className={`${styles.large_form} customer-action d-flex justify-content-center align-items-center`}
              >
                <button className={`${styles.login_btn} me-3`} type="submit">
                  Xác nhận
                </button>
                <div className={`${styles.req_pass} ms-3`}>
                  <Link to={"/login"}>Đăng nhập</Link>
                  <br />
                  hoặc
                  <Link to={"/register"} title="Đăng ký">
                    Đăng ký
                  </Link>
                </div>
              </div>
            </Form>
          </Formik>
          <div className={`${styles.other_login} text-center pt-4 pb-4`}>
            <span>Hoặc đăng nhập bằng:</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              fill="currentColor"
              className="bi bi-facebook ms-2"
              viewBox="0 0 16 16"
            >
              <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              fill="currentColor"
              className="bi bi-google ms-2"
              viewBox="0 0 16 16"
            >
              <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z" />
            </svg>
          </div>
        </div>
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
    </>
  );
}

export default ConfirmEmail;
