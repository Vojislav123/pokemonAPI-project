import Homepage from "./components/pages/Homepage";
import Favourites from "./components/pages/Favourites";
import Header from "./components/pages/Header";
import Footer from "./components/pages/Footer";

import "./App.css";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/favourites" element={<Favourites />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
