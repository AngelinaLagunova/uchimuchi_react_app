import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './buttons.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Lk from "./Pages/Lk.js";
import Main from "./Pages/main.js";
import Map from "./Pages/map.js";
import Location from "./Pages/location.js";
import Vocabulary from "./Pages/vocabulary.js";
import TestSetting from "./Pages/testSetting.js"
import VocabList from "./Pages/vocabList.js";
import TestVocab from "./Pages/testVocab.js";
import TestVocabWrite from "./Pages/testVocabWrite.js";


const root = ReactDOM.createRoot(document.getElementById('root'));

const vocabFoodChansha = [{"char":"臭豆腐", "phen":"chòudòufu", "trans":"Вонючий тофу", "pict":"tofu.jpg"}, {"char":"毛氏红烧肉", "phen":"Máo shì hóngshāoròu", "trans":"Тушенное мясо по рецепту семьи Мао", "pict":"meat.jpg"},{"char":"东安子鸡", "phen":"dōng’ān zǐjī", "trans":"Курица Дунъань", "pict":"chicken.jpg"}, {"char":"湘西酸肉", "phen":"xiāngxī suānròu", "trans":"Мясо в кислом соусе по-западнохунаньски", "pict":"meat2.jpg"}, {"char":"剁椒鱼头", "phen":"duòjiāo yútóu", "trans":"Рыбья голова в хлопьях красного перца", "pict":"fish.jpg"}];

const vocabFoodGuizhou = [{"char":"茅台酒", "phen":"máo tái jiǔ ", "trans":"Маотай, высококачественный китайский ликёр", "pict":"liquor.png"}, {"char":"丝娃娃 ", "phen":"sī wá wá", "trans":"Сивава", "pict":"sivava.png"},{"char":"怪噜炒饭", "phen":"guài lū chǎo fàn", "trans":"Жареный рис Гуайлу", "pict":"friedRice.png"}, {"char":"酸汤鱼", "phen":"suān tāng yú", "trans":"Рыба в кислом супе", "pict":"sourFishSoup.png"}, {"char":"肠旺面", "phen":"cháng wáng miàn", "trans":"Лапша с свиными кишками", "pict":"nodlesPorkIntestines.png"}];

const vocabSightsChansha = [{"char":"张家界国家森林公园 ", "phen":"zhāng jiā jiè guó jiā sēn língōng yuán", "trans":"Чжанцзяцзе (природный парк)", "pict":"naturePark.png"}, {"char":"五一广场", "phen":"wǔ yī guǎng chǎng", "trans":"Площадь 'Уи'", "pict":"square.png"},{"char":"洞庭湖", "phen":"dòngtínghú", "trans":"Озеро Дунтинху", "pict":"lake.png"}, {"char":"风凰县", "phen":"fēng huáng xiàn", "trans":"Фенхуан - город Феникс (древний город)", "pict":"acientTown.png"}, {"char":"毛泽东故居", "phen":"máo zé dōng gù jū", "trans":"Дом-музей Мао ЦзеДуна", "pict":"musemMao.png"},{"char":"马王堆", "phen":"mǎ wáng duī", "trans":"Мавадуй", "pict":"Mavaduy.png"},{"char":"南方长城", "phen":"nán fāng cháng chéng", "trans":"Южная Великая стена", "pict":"wall.png"}];

const vocabSightsGuizhou = [{"char":"黄果树瀑布 ", "phen":"huáng guǒ shù pù bù", "trans":"Водопады Хуангошу", "pict":"waterFall.png"}, {"char":"梵净山", "phen":"fàn jìng shān", "trans":"Фаньцзиншань, горы Фаньцзин", "pict":"mountains.png"},{"char":"毕节织金洞", "phen":"bì jié zhī jīn tóng", "trans":"Карстовые пещеры Чжицзинь в Бицзе", "pict":"cave.png"}, {"char":"西江苗寨", "phen":"xī jiāng miáo zhài", "trans":"Деревня Мяо на реке Сицзян", "pict":"village.png"}, {"char":"同仁大峡谷", "phen":"tóng rén dà xiá gǔ", "trans":"Гранд-Каньон Тунжэнь", "pict":"canyon.png"}];

const InfoChansha = () =>(
  <>
      <p><b>Хунань</b> – провинция на юге Китая, расположеная к югу от крупного озера Дунтин (Дунтинху). Это обстоятельство и повлияло на название региона, которое на русский переводится как «Провинция к Югу от Озера»., расположенна в горной местности. На северо-востоке этого региона в городе Шаошань в 1893 года родился Мао Цзэдун. <br/> </p><p>Город <b>Чанша</b> – административный центр провинции Хунань. Расположен он на реке Сянцзян, в гористой местности, между горной вершиной Юэлушань на западе и реками Люянхэ и Лаодаохэ на востоке. <br/> </p><p>Население Чанша составляет 6,529 человек, большинство жителей города – этнические китайцы. </p>
  </>
)
const InfoGuizhou = () =>(
  <>
      <p><b>Гуйчжоу</b> – провинция на юге Китая</p>
  </>
)

const InfoGuandun = () =>(
  <>
      <p><b>Гуандун</b> – провинция на юге Китая</p>
  </>
)

const nameChansha = {"province": "Провинция Хунань 湖南", "city":"г. Чанша 长沙市"};
const nameGuizhou = {"province": "Провинция Гуйчжоу 贵州", "city":" "};
const nameGuandun = {"province": "Гуандун 广东", "city":" "};

 

const ChanshaLinks ={"pictmap":"chansha.png", "food":"/ChanshaFood", "sights":"/ChanshaSights"}
const GuizhouLinks ={"pictmap":"guizhou.png", "food":"/GuizhouFood", "sights":"/GuizhouSights"}
const GuandunLinks ={"pictmap":"guandun.png", "food":"/GuizhouFood", "sights":"/GuizhouSights"}

const ChanshaFoodLinks ={"test":"/ChanshaFoodTestSetting"}
const ChanshaFoodTestSettingLinks = {"testVocab":"ChanshaFoodTestVocab", "testVocabWrite":"ChanshaFoodTestVocabWrite"}

function Sidebar() {

    const listImg = ["home", "lk", "vocabList"];

    //const [SideBarContent, setSideBar] = React.useState([]);

    // const AddToBar = (event) =>{
       
    //       setSideBar(SideBarContent => [...SideBarContent,"mapicon"]);

    // }
    // const AddSideImages =SideBarContent.map((img, index) =>
    //   <a href={"/"+img} key={index}><img key={index} src={img +".png"} alt="icon_picture"/></a>
    // );

    const SideImages =listImg.map((img, index) =>
      <a href={"/"+img} key={index}><img key={index} src={img +".png"} alt="icon_picture"/></a>
    );

    return(
      <>
      <div className="sidenav">
        {SideImages}
        <hr/>
      </div>
      <Router>
        <Routes>
            <Route exact path="/home" element={<Main/>}/>
            <Route exact path="/" element={<Main/>}/>
            <Route exact path="/lk" element={<Lk/>}/>
            <Route exact path="/vocabList" element={<VocabList/>}/>
            <Route exact path="/map" element={<Map />}/>

            <Route exact path="/chansha" element={<Location name={nameChansha} info={InfoChansha()} links={ChanshaLinks}/>}/>
            <Route exact path="/guizhou" element={<Location name={nameGuizhou} info={InfoGuizhou()} links={GuizhouLinks}/>}/>
            <Route exact path="/guandun" element={<Location name={nameGuandun} info={InfoGuandun()} links={GuandunLinks}/>}/>

            <Route exact path="/ChanshaFood" element={<Vocabulary words={vocabFoodChansha} links={ChanshaFoodLinks}/>}/>
            <Route exact path="/ChanshaSights" element={<Vocabulary words={vocabSightsChansha} links={ChanshaFoodLinks}/>}/>
            <Route exact path="/GuizhouFood" element={<Vocabulary words={vocabFoodGuizhou} links={ChanshaFoodLinks}/>}/>
            <Route exact path="/GuizhouSights" element={<Vocabulary words={vocabSightsGuizhou} links={ChanshaFoodLinks}/>}/>

            <Route exact path="/ChanshaFoodTestSetting" element={<TestSetting links={ChanshaFoodTestSettingLinks}/>}/>

            <Route exact path="/ChanshaFoodTestVocab" element={<TestVocab words={vocabFoodChansha}/>}/>
            <Route exact path="/ChanshaFoodTestVocabWrite" element={<TestVocabWrite/>}/>




        </Routes>
      </Router>
    </>
    )  
  }



function Content() { 
  return(     
    <>         
    <Sidebar/>
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