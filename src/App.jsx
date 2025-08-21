import { Route, Routes } from "react-router-dom";
import Home from './components/Home';
import Navbar from "./components/Navbar";
import "./index.css";

const App = () => {
  return (
    <>
      <Navbar />
      {/* <Cursor /> */}
      <Routes>
        <Route path="/" element={<Home />}/>
      </Routes>
    </>
  );
};

export default App;
