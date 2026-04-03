import { Route, Routes } from "react-router-dom";
import Home from './components/Home';
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import BuyMeCoffee from "./components/BuyMeCoffee";
import "./index.css";

const App = () => {
  return (
    <>
      <Navbar />
      {/* <Cursor /> */}
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/projects" element={<Projects />}/>
        <Route path="/support" element={<BuyMeCoffee />}/>
      </Routes>
    </>
  );
};

export default App;
