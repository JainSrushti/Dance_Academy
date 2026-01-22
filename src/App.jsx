import React  from "react";
import NavheaderPage from "./Pages/NavheaderPage.jsx";
import HomePage from "./Pages/Homepage.jsx";
import Homepage from "./Pages/Homepage.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footerpage from "./Pages/Footerpage.jsx";
function App() {
    
    return(
        
        <div>
            <NavheaderPage/>
            <Homepage/>
            <Footerpage/>
        </div>
    )


}
export default App;