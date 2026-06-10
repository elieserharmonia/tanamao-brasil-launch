import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";

const HomeView = lazy(() => import("./components/HomeView"));
const SearchView = lazy(() => import("./components/SearchView"));
const ProfileDetailsView = lazy(() => import("./components/ProfileDetailsView"));
const PlanosView = lazy(() => import("./components/PlanosView"));
const MonetizationView = lazy(() => import("./components/MonetizationView"));
const SeoLocalView = lazy(() => import("./components/SeoLocalView"));

import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <Suspense fallback={<div>Carregando...</div>}>
        <Routes>
          <Route path="/" element={<HomeView />} />
          <Route path="/search/:city/:category" element={<SearchView />} />
          <Route path="/profile/:id" element={<ProfileDetailsView />} />
          <Route path="/plans" element={<PlanosView />} />
          <Route path="/anunciar" element={<MonetizationView />} />
          <Route path="/sp/:serviceSlug/:citySlug" element={<SeoLocalView />} />
        </Routes>
      </Suspense>
      <Footer />
    </div>
  );
}

export default App;
