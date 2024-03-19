import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import Middle from "./Components/Middle/Middle";
import Destinations from "./Components/Destinations/Destinations";
import Portfolio from "./Components/Portfolio/Portfolio";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <br></br>
      <br></br>
      <Middle />
      <br></br>
      <Destinations />

      <br></br>
      <br></br>
      <br></br>
      <br></br>

      <Portfolio />

      <br></br>
      <br></br>
      
      <br></br>
      <Footer />
    </div>
  );
}

export default App;
