import logo from "./logo.svg";
import { Route, Routes } from "react-router-dom";
import Home from "./Component/home/Home";
import "./App.css";
import DetailRoom from "./Component/detailRoom/DetailRoom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/room/:id" element={<DetailRoom />} />
      </Routes>
    </div>
  );
}

export default App;
