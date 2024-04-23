import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Global/Navbar";
import Footer from "./Global/Footer";
import Home from "./Pages/Home";

function App() {
  
  return (
    <>
        <BrowserRouter>
        <Navbar/>
          <Routes>
            
            <Route path="/" element={<Home/>}></Route>
            
          </Routes>
          <Footer/>


        </BrowserRouter>
    </>
  );
}

export default App;
