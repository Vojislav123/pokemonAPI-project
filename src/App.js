import { Route, Routes } from "react-router-dom";
import { useState } from "react";

import Homepage from "./components/pages/Homepage";
import Header from "./components/pages/Header";
import Footer from "./components/pages/Footer";


import "./App.css";

const App = () => {
  const [isReload, setIsReload] = useState(false);

  
  return (

    <div className="App">
      <Header isReloading={setIsReload}/>
      <div className="flex justify-center">
        <div className="main-content container mx-auto">
          <Routes>
            <Route path="/" element={<Homepage isReload={isReload} setIsReload={setIsReload}/>} />
          </Routes>
        </div>
      </div>
      <Footer />
    </div>
    
  );
};

export default App;
