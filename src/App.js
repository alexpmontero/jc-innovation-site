import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./assets/themes/main.scss";

import { Header } from "./components/header/header";
import { Footer } from "./components/footer/footer";

import { HomePage } from "./pages/homePage";
import { AboutPage } from "./pages/aboutPage";
import { ContactPage } from "./pages/contactPage";
import { CongresosEventosPage } from "./pages/services/congresosEventosPage";
import { StreamingPage } from "./pages/services/streamingPage";
import { WebDevelopPage } from "./pages/services/webDevelopPage";
import { MarketingPage } from "./pages/services/marketingPage";
import {PodcastPage} from './pages/services/podcastPage'

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/nosotros" element={<AboutPage />} />
        <Route exact path="/contacto" element={<ContactPage />} />
        <Route
          exact
          path="/organizacion-congresos-eventos"
          element={<CongresosEventosPage />}
        />
        <Route exact path="/streaming" element={<StreamingPage />} />
        <Route exact path="/desarrollo-software" element={<WebDevelopPage />} />
        <Route exact path="/marketing-y-diseno" element={<MarketingPage />} />
        <Route exact path="/podcast" element={<PodcastPage />} />
        
       
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
