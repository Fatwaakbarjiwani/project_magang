import "./App.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import DetailZISWAF from "./pages/DetailZISWAF";
import DetailDonasi from "./pages/DetailDonasi";
import Berita from "./pages/Berita";
import Modal from "./components/Modal";
import Login from "./components/Login";
import Rekening from "./pages/Rekening";
import ModalNotif from "./components/ModalNotif";
import DetailCampaign from "./pages/DetailCampaign";
import PembayaranDonasi from "./pages/PembayaranDonasi";
import MetodePembayaran from "./pages/MetodePembayaran";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route
            path="/detailZiswaf/:detailZISWAF"
            element={<DetailZISWAF />}
          ></Route>
          <Route path="/detailDonasi/:id" element={<DetailDonasi />}></Route>
          <Route path="/berita/:berita" element={<Berita />}></Route>
          <Route path="/rekening/:id" element={<Rekening />}></Route>
          <Route
            path="/detailCampaign/:id"
            element={<DetailCampaign />}
          ></Route>
          <Route path="/pembayaran/:id" element={<PembayaranDonasi />}></Route>
          <Route
            path="/metodePembayaran/:id"
            element={<MetodePembayaran />}
          ></Route>
        </Routes>
        <Modal />
        <ModalNotif />
        <Login />
      </BrowserRouter>
    </>
  );
}

export default App;
