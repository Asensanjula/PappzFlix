import React from "react";
import "./App.scss";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import { MovieDetails } from "./components/MovieDetails/MovieDetails";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header></Header>
        <div className="container">
          <Routes>
            <Route path="/" Component={Home} />
            <Route path="/movie/:imdbId" Component={MovieDetails} />
          </Routes>
        </div>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
