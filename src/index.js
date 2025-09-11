import React from 'react';
// import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import provinciesData from './provinciesData.json';
import ReactDOM from 'react-dom/client';
import { useTransition, animated } from 'react-spring';
import './index.css';
import './buttons.css';
import { BrowserRouter as Router, Routes, Route, useLocation, Link } from "react-router-dom";
import Lk from "./Pages/Lk.js";
import MainMenu from "./Pages/mainmenu.js";
import PreMain from "./Pages/preMain.js";
import Map from "./Pages/map.js";
import Location from "./Pages/location.js";
import Vocabulary from "./Pages/vocabulary.js";
// import TestSetting from "./Pages/testSetting.js"
import VocabList from "./Pages/vocabList.js";
import TestVocab from "./Pages/testVocab.js";
// import TestVocabWrite from "./Pages/testVocabWrite.js";
import Grammar from "./Pages/grammar.js";
import BaseVocab from "./Pages/baseVocab.js";
import PreGrammar from "./Pages/preGramma.js";
import Game1 from "./Pages/game1.js";
import Game2 from "./Pages/game2.js";
import GamesMenu from "./Pages/gamesMenu.js";


function ProvincePage() {
  const { provinceName, section } = useParams();

  const provincData = provinciesData[provinceName];

  if (!provincData) {
    return <div>Данные не найдены</div>;
  }

  // В зависимости от section показываем разные компоненты
  switch (section) {
    case 'location':
      return <Location name={provincData.name} info={provincData.info} links={provincData.links}/>
    case 'food':
      return <Vocabulary words={provincData.vocabFood} links={provincData.foodLinks} />;
    case 'sights':
      return <Vocabulary words={provincData.vocabSights} links={provincData.sightsLinks} />;
    case 'foodTest':
      return <TestVocab words={provincData.vocabFoodTest} links={provincData.foodTestLinks} />;
    case 'sightsTest':
      return <TestVocab words={provincData.vocabSightsTest} links={provincData.sightsTestLinks} />;
    default:
      // Можно сделать редирект или показать список разделов
      return <div>Данные не найдены</div>;
  }
}

const nameData = Object.fromEntries(
  Object.entries(provinciesData).map(([key, value]) => [key, value.name])
);

const root = ReactDOM.createRoot(document.getElementById('root'));

const game1Props = [[["那个饭馆","不","做东安子鸡"],"那个饭馆不做东安子鸡", "Тот ресторан не готовит курицу Дунъань."],
[["这个菜","是","臭豆腐"], "这个菜是臭豆腐", "Это блюдо - вонючий тофу."], 
[["昨天","他/她点了", "毛氏","红烧肉"], "昨天他/她点了毛氏红烧肉", "Вчера он/она заказал(а) тушенное мясо по рецепту семьи Мао."], 
]

const BaseGifs = [["gif1.gif"], ["gif2.gif"], ["gif3.gif"], ["gif1.gif", "gif4.gif"], ["gif5.gif"], ["gif6.gif"],["gif5.gif", "gif4.gif"], ["gif7.gif"], ["gif7.gif", "gif4.gif"], ["gif8.gif", "gif9.gif"], ["gif10.gif", "gif9.gif"], ["gif11.gif", "gif9.gif"], ["gif12.gif", "gif9.gif"], ["gif13.gif", "gif9.gif"], ["gif14.gif", "gif15.gif"], ["gif16.gif", "gif15.gif"], ["gif17.gif", "gif15.gif"], ["gif18.gif", "gif19.gif"], ["gif20.gif"], ["gif21.gif"], ["gif22.gif"], ["gif23.gif"], ["gif24.gif"], ["gif25.gif"], ["gif26.gif"], ["gif27.gif"], ["gif28.gif"], ["gif29.gif"], ["gif30.gif"], ["gif31.gif"], ["gif32.gif", "gif33.gif"], ["gif34.gif", "gif35.gif"], ["gif36.gif", "gif37.gif"], ["gif38.gif", "gif39.gif"], ["gif40.gif", "gif41.gif"]]
//слова 

//грамматика
const grammarChar = [[{"char":"这个菜", "color":"white"},{"char":"是", "color":"grey"},{"char":"臭豆腐","color":"white"}], 
[{"char":"昨天", "color":"grey"},{"char":"他/她点了毛氏红烧肉", "color":"white"}], 
[{"char":"那个饭馆", "color":"white"},{"char":"不", "color":"grey"},{"char":"做东安子鸡","color":"white"}],
[{"char":"以前你", "color":"white"},{"char":"吃过", "color":"grey"},{"char":"湘西酸肉吗？","color":"white"}],
[{"char":"我", "color":"white"},{"char":"喜欢", "color":"grey"},{"char":"剁椒鱼头","color":"white"}],
[{"char":"他们", "color":"white"},{"char":"都", "color":"grey"},{"char":"买茅台酒","color":"white"}],
[{"char":"丝娃娃", "color":"white"},{"char":"真", "color":"grey"},{"char":"好吃","color":"white"}],
[{"char":"肠旺面", "color":"white"},{"char":"比", "color":"grey"},{"char":"怪噜炒饭辣","color":"white"}],
[{"char":"你买了", "color":"white"},{"char":"什么", "color":"grey"},{"char":"纪念品?","color":"white"}],
[{"char":"你看过黄果树瀑布", "color":"white"},{"char":"吗?", "color":"grey"}],
[{"char":"我想", "color":"white"},{"char":"去", "color":"grey"},{"char":"梵净山","color":"white"}],
[{"char":"毕节织金洞票是", "color":"white"},{"char":"多少", "color":"grey"},{"char":"钱?","color":"white"}],
[{"char":"你的中国旅行", "color":"white"},{"char":"怎么样?", "color":"grey"}]];

const grammarTrans = [["Это блюдо - вонючий тофу."],["Вчера он/она заказал(а) тушенное мясо по рецепту семьи Мао."], ["Тот ресторан не готовит курицу Дунъань."], ["Раньше ты пробовал мясо в кисло-сладком соусе?"], ["Мне нравится рыбья голова в хлопьях красного перца."],["Они все купили Маотай."], ["Сивава очень вкусные."], ['Лапша со свиными кишками острее, чем Гуайлу.'], ["Ты купил какие сувениры?"], ["Ты видел водопады Хуангошу?"], ["Я хочу пойти в горы Фаньцзиншань."], ["Сколько стоит билет в карстовые пещеры Чжицзинь в Бицзе?"], ["Как прошла твоя поездка в Китай?"]];

const grammar = ["zhè gè cài shì chòudòufu.","zuótiān tā/tā diǎn le máoshì hóngshāoròu.", "nà ge fànguǎn bù zuò dōng ān zǐ jī.", "yǐqián nǐ chī guò xiāngxī suānròu mǎ?", "wǒ xǐhuan duòjiāo yútóu.", "tā men dōu mǎi máo tái jiǔ.", "sī wá wá zhēn hào chī.", "cháng wàng miàn bǐ guài lū chǎo fàn là.", "nǐ mǎi le shénme jìniànpǐn?", "nǐ kàn guò huáng guǒ shù pù bù ma?", "wǒ xiǎng qù fàn jìng shān", "bì jié zhī jīn tóng piào shì duō shao qián?", "nǐ de zhōngguó lǚxíng zěnmeyàng?"];

const grammarLinks = {"test":"/grammar", "title": "Путешественник"};

//провинции
// const nameChansha = {"province": "Провинция Хунань 湖南", "city": "г. Чанша 长沙市"};
// const nameGuizhou = { "province": "Провинция Гуйчжоу 贵州 ", "city":"г. Гуйян 贵阳"};
// const nameGuandun = {"province": "Провинция Гуандун 广东 ", "city":"г. Гуанчжоу 广州"};
// const nameGuansi = {"province": "Гуанси-Чжуанский автономный район ", "city":"广西壮族自治区"};
// const nameYunnan = {"province": "Юньнань ", "city":"云南省"};
// const nameFuijan = {"province": "Фуцзянь ", "city":"福建省"};



// const namesForMap = {'chansha': nameChansha, 'guizhou': nameGuizhou, 'guandun': nameGuandun, 'guansi':nameGuansi, 'yunnan':nameYunnan, 'fuijan':nameFuijan};

//ссылки для сайдбара
//для тематического блока
const ThemesSidnav = [{"href":"/main", "text":"Лексика"}];
const BaseVocabSidnav = [{"href":"/baseVocab", "text":"Базовый словарь"}];
const PreGrammarSidnav = [{"href":"/preGrammar", "text":"Грамматика"}];
const GamesMenuSidnav = [{"href":"/gamesMenu", "text":"Игры"}];


//для карты
const MapSidenav = [].concat(ThemesSidnav, [{"href":"/map", "src":"mapicon.png"}]);

//для хунани
const ChanshaSidenav = [].concat(MapSidenav, [{"href":"/province/chansha/location", "text":"Хунань"}]);
const ChanshaFoodSidenav = [].concat(ChanshaSidenav,[{"href":"/province/chansha/food", "text":"Слова"}])
const ChanshaSightsSidenav = [].concat(ChanshaSidenav,[{"href":"/province/chansha/sights", "text":"Слова"}])
const GrammarSidenav = [].concat(PreGrammarSidnav,[{"href":"/grammar", "text":"Путешестве- нник"}]);

//для гуйчжоу
const GuizhouSidenav = [].concat(MapSidenav, [{"href":"/province/guizhou/location", "text":"Гуйчжоу"}]); 
const GuizhouFoodSidenav = [].concat(GuizhouSidenav,[{"href":"/province/guizhou/food", "text":"Слова"}]);
const GuizhouSightsSidenav = [].concat(GuizhouSidenav,[{"href":"/province/guizhou/sights", "text":"Слова"}]);
// const GuizhouGrammarSidenav = [].concat(GuizhouSidenav,[{"href":"/GuizhouGrammar", "text":"Грамматика"}])

//для гуандун
const GuandunSidenav = [].concat(MapSidenav,[{"href":"/province/guandun/location", "text":"Гуандун"}]);
const GuandunFoodSidenav = [].concat(GuandunSidenav,[{"href":"/province/guandun/food", "text":"Слова"}]);
const GuandunSightsSidenav = [].concat(GuandunSidenav,[{"href":"/province/guandun/sights", "text":"Слова"}]);

const GuansiSidenav = [].concat(MapSidenav,[{"href":"/province/guansi/location", "text":"ГЧАР"}]);
const GuansiFoodSidenav = [].concat(GuansiSidenav,[{"href":"/province/guansi/food", "text":"Слова"}]);
const GuansiSightsSidenav = [].concat(GuansiSidenav,[{"href":"/province/guansi/sights", "text":"Слова"}]);

const dynamicSidebar = {"/province/chansha/location":ChanshaSidenav, "/map":MapSidenav, "/province/chansha/food":ChanshaFoodSidenav,"/province/chansha/sights":ChanshaSightsSidenav,"/grammar":GrammarSidenav, "/province/guizhou/location":GuizhouSidenav, "/province/guizhou/food":GuizhouFoodSidenav,"/province/guizhou/sights":GuizhouSightsSidenav, "/province/guandun/location":GuandunSidenav, "/main":ThemesSidnav, "/baseVocab":BaseVocabSidnav, "/preGrammar":PreGrammarSidnav, "/province/guandun/food":GuandunFoodSidenav, "/province/guandun/sights":GuandunSightsSidenav, "/gamesMenu":GamesMenuSidnav, "/province/guansi/location": GuansiSidenav,"/province/guansi/food":GuansiFoodSidenav, "/province/guansi/sights":GuansiSightsSidenav };

//информация о провинциях

function Sidebar() {
  

    const listImg = ["home", "lk", "vocabList"];
    const listImgHints = ["Главная", "Личный кабинет", "Словарь"];


    const SideImages =listImg.map((img, index) =>
      <Link to={"/"+img} key={index}><img key={index} src={"/images/" + img +".png"} title={listImgHints[index]} alt="icon_picture"/></Link>
    );

    const SideDynanic = () => {

      if (location.pathname in dynamicSidebar)
      return (
        dynamicSidebar[location.pathname].map((item,index) => item.href==="/map" ? <Link to={item.href} key={index}><img src={"/images/" + item.src} key={index}alt="icon_picture"/></Link> : <Link to={item.href} key={index}><p key={index}>{item.text}</p></Link>
         )
      )
      return (
        <>
        </>
      )
    };

    
  const location = useLocation();
  const transitions = useTransition(location,{key:location => location.pathname,
    
      from:{
        opacity:0,
      },
      enter:{
        opacity:1,

      },
      leave:{
        opacity:0,

      },
    }
  );

    return(
      <>
      <div className="sidenav">
        {SideImages}
        <hr/>
        <SideDynanic/>
      </div>
      {transitions((props, location)=>(
        <animated.div style={props}>
          {/* <div style={{position:'absolute',width:'100%'}}> */}
        <Routes location={location}>
            <Route exact path="/home" element={<PreMain/>}/>
            <Route exact path="/main" element={<MainMenu/>}/>
            <Route exact path="/" element={<PreMain/>}/>
            <Route exact path="/lk" element={<Lk/>}/>
            <Route exact path="/vocabList" element={<VocabList/>}/>
            <Route exact path="/map" element={<Map list={nameData}/>}/>
            <Route exact path="/baseVocab" element={<BaseVocab gifs={BaseGifs}/>}/>
            <Route exact path="/preGrammar" element={<PreGrammar/>}/>
            <Route exact path="/gamesMenu" element={<GamesMenu/>}/>
            <Route exact path="/game1" element={<Game1 list={game1Props}/>}/>
            <Route exact path="/game2" element={<Game2 list={game1Props}/>}/>
            <Route exact path="/Grammar" element={<Grammar char={grammarChar} phen={grammar} trans={grammarTrans} links={grammarLinks}/>}/>

            <Route path="/province/:provinceName/:section?" element={<ProvincePage />} />

        </Routes>
        {/* </div> */}
        </animated.div>
        ))}
    </>
    )  
  }



function Content() { 
  return(     
    <Router>
    <Sidebar/>

    </Router>
  ) 
} 

root.render(<Content />)









// root.render(
//   <React.StrictMode>
//     <Content />
//   </React.StrictMode>
// );

// reportWebVitals();