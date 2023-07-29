import logo from "./logo.svg";
import { Route, Routes } from "react-router-dom";
import Home from "./Component/home/Home";
import "./App.css";
import DetailRoom from "./Component/detailRoom/DetailRoom";
import Login from "./Component/login/Login";
import ConfirmEmail from "./Component/login/ConfirmEmail";
import ResetPassword from "./Component/login/ResetPassword";
import ListRoom from "./Component/listRoom/ListRoom";
import PrepareOrder from "./Component/order/PrepareOrder";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rooms" element={<ListRoom />} />
        <Route path="/room/:id" element={<DetailRoom />} />
        <Route path="/login" element={<Login />} />
        <Route path="/confirm-email" element={<ConfirmEmail />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/booking/:id" element={<PrepareOrder />} />
      </Routes>
    </div>
  );
}

export default App;
