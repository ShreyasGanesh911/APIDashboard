import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Global/Navbar";
import Footer from "./Global/Footer";
import Home from "./Pages/Home";
import Landing from "./Pages/Landing";

function App() {
  
  return (
    <>
        <BrowserRouter>
        <Navbar/>
          <Routes>
            
            <Route path="/dashboard" element={<Home/>}></Route>
            <Route path="/" element={<Landing/>}></Route>
            
          </Routes>
          <Footer/>


        </BrowserRouter>
    </>
  );
}

export default App;
