import { BrowserRouter } from "react-router-dom";
import Navbar from "./component/Navbar";
import Banner from "./component/Banner";
import Sports from "./component/Sports";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState } from "react";

function App() {
  const [showModal, setShowModal] = useState(false);

  return (
    <BrowserRouter>
      <div className="App">
        <Navbar showModal={showModal} setShowModal={setShowModal} />
        <Banner showModal={showModal} setShowModal={setShowModal} />
        <Sports />
      </div>
    </BrowserRouter>
  );
}

export default App;
