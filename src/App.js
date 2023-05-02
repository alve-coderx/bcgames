import { BrowserRouter } from "react-router-dom";
import Navbar from "./component/Navbar";
import Banner from "./component/Banner";
import Sports from "./component/Sports";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Banner />
        <Sports />
      </div>
    </BrowserRouter>
  );
}

export default App;
