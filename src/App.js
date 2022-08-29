import "./App.scss";
import React from "react";
import { Routes, Route } from "react-router-dom";
import  Header  from "./components/Header/Header";
import  Home  from "./components/Home/Home";
import MovieDetail  from "./components/MovieDetails/MovieDetails";
import  PageNotFound  from "./components/PageNotFound/PageNotFound";
import Footer from "./components/Footer/Footer";
function App() {
  return (
    <div className="App">
        <Header></Header>
        <div className="container">
        <Routes>
        <Route path="/" exact element={<Home/>} />
        <Route path="/movie/:imdbID" element={<MovieDetail/>} />
        <Route path="*" element={<PageNotFound/>} />
        </Routes>
        </div>
        <Footer />
        </div>
        
  
  )
}

export default App;
