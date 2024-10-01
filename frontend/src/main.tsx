import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

// Pages
import Home from "./pages/Home.tsx";
import Pubg from "./pages/Pubg.tsx";
import League from "./pages/League.tsx";
import Battlefield from "./pages/Battlefield.tsx";
import Dota from "./pages/Dota.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path={`${import.meta.env.BASE_URL}home`} element={<Home />} />
        <Route path={`${import.meta.env.BASE_URL}pubg`} element={<Pubg />} />
        <Route path={`${import.meta.env.BASE_URL}league`} element={<League />} />
        <Route path={`${import.meta.env.BASE_URL}battlefield-2`} element={<Battlefield />} />
        <Route path={`${import.meta.env.BASE_URL}dota-2`} element={<Dota />} />
        <Route path="*" element={<Navigate to={`${import.meta.env.BASE_URL}home`} />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
