import './styles/App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from "./components/Header.js";
import Footer from "./components/Footer.js";
import Home from "./components/Home.js";
import About from "./components/About";
import Favourites from "./components/Favourites";
import Individual from "./components/Individual";
import PageNotFound from "./components/PageNotFound.js";

function AppRouter() {
  return (
    <BrowserRouter>
        <Header />
        <div className="wrapper">
          <Routes>
            <Route path="/react-project" exact element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/favourites" element={<Favourites />} />
            <Route path="/individual/:id" element={<Individual />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default AppRouter;
