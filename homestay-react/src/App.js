import logo from "./logo.svg";
import { Route, Routes } from "react-router-dom";
import Home from "./Component/home/Home";
import "./App.css";
import DetailRoom from "./Component/detailRoom/DetailRoom";
import Login from "./Component/login/Login";
import ConfirmEmail from "./Component/login/ConfirmEmail";
import ResetPassword from "./Component/login/ResetPassword";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/room/:id" element={<DetailRoom />} />
        <Route path="/login" element={<Login />} />
        <Route path="/confirm-email" element={<ConfirmEmail />} />
        <Route path="/reset-password" element={<ResetPassword />} />
      </Routes>
    </div>
  );
}

export default App;
