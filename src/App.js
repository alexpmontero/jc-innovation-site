import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./assets/themes/main.scss";
import "./assets/themes/custom.scss";

import { Header } from "./components/header/header";
import { Footer } from "./components/footer/footer";

import { HomePage } from "./pages/homePage";
import { AboutPage } from "./pages/aboutPage";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/nosotros" element={<AboutPage />} />
      </Routes>
      <Footer />

    </BrowserRouter>
  );
}
