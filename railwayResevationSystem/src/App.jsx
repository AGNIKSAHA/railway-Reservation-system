import Clock from "./component/Clock";
import Navbar from "./component/Navbar";
// import logo from "./images/logo.png";
import "./App.css";
import NavBbar from "./component/NavBbar";
import MidPart from "./component/MidPart";
import Footer from "./component/Footer";
import CurrentTime from "./component/CurrentTime";


function App() {

  return (
  <>
    <NavBbar></NavBbar>
    <CurrentTime></CurrentTime>
    <MidPart></MidPart>
    <Footer></Footer>
  </>
  );
}

export default App
