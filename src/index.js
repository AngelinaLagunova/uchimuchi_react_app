import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './buttons.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Lk from "./Pages/Lk.js";
import Main from "./Pages/main.js";
import Map from "./Pages/map.js";
import Chansha from "./Pages/chansha.js";
import ChanshaFood from "./Pages/chanshaFood.js";



const root = ReactDOM.createRoot(document.getElementById('root'));

const cards = [{"char":"臭豆腐", "phen":"chòudòufu", "trans":"Вонючий тофу", "pict":"tofu.jpg"}, {"char":"毛氏红烧肉", "phen":"Máo shì hóngshāoròu", "trans":"Тушенное мясо по рецепту семьи Мао", "pict":"meat.jpg"},{"char":"东安子鸡", "phen":"dōng’ān zǐjī", "trans":"Курица Дунъань", "pict":"chicken.jpg"}, {"char":"湘西酸肉", "phen":"xiāngxī suānròu", "trans":"Мясо в кислом соусе по-западнохунаньски", "pict":"meat2.jpg"}, {"char":"剁椒鱼头", "phen":"duòjiāo yútóu", "trans":"Рыбья голова в хлопьях красного перца", "pict":"fish.jpg"}];

const listImg = ["home", "lk", "book"]

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
            <Route exact path="/book" element={<Main/>}/>

            <Route exact path="/map" element={<Map/>}/>
            <Route exact path="/chansha" element={<Chansha/>}/>
            <Route exact path="/ChanshaFood" element={<ChanshaFood food={cards}/>}/>

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