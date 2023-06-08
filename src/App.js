import { Route, Routes } from "react-router-dom";

import Homepage from "./components/pages/Homepage";
import Favourites from "./components/pages/Favourites";
import Header from "./components/pages/Header";
import Footer from "./components/pages/Footer";


import "./App.css";

const App = () => {
  return (

    <div className="App">
      <Header />
      <div className="flex justify-center">
        <div className="main-content container mx-auto">
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/favourites" element={<Favourites />} />
          </Routes>
        </div>
      </div>
      <Footer />
    </div>
    
  );
};

export default App;
