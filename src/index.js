import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './buttons.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Lk from "./Pages/Lk.js";
import Main from "./Pages/main.js";
import Map from "./Pages/map.js";
import Chansha from "./Pages/chansha.js";


const root = ReactDOM.createRoot(document.getElementById('root'));

const listImg = ["home", "lk"]

function Sidebar(props) {

    const SideImages =props.listImg.map((img, index) =>
      <a href={"/"+img}><img key={index} src={img +".png"} /></a>
    );
  
    return(
      <>
      <div className="sidenav">
        {SideImages}
      </div>
      <Router>
        <Routes>
            <Route exact path="/home" element={<Main/>}/>
            <Route exact path="/" element={<Main/>}/>
            <Route exact path="/lk" element={<Lk/>}/>
            <Route exact path="/map" element={<Map/>}/>
            <Route exact path="/chansha" element={<Chansha/>}/>
        </Routes>
      </Router>
    </>
    )  
  }



function Content(props) { 
  return(     
    <>         
    <Sidebar listImg={listImg}/>
    </>     
  ) 
} 

root.render(<Content />)









// root.render(
//   <React.StrictMode>
//     <Content />
//   </React.StrictMode>
// );

// reportWebVitals();