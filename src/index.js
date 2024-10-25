import React from 'react';
// import React, { useEffect } from 'react';

import ReactDOM from 'react-dom/client';
import { useTransition, animated } from 'react-spring';
import './index.css';
import './buttons.css';
import { BrowserRouter as Router, Routes, Route, useLocation, Link } from "react-router-dom";
import Lk from "./Pages/Lk.js";
import MainMenu from "./Pages/mainmenu.js";
import Map from "./Pages/map.js";
import Location from "./Pages/location.js";
import Vocabulary from "./Pages/vocabulary.js";
import TestSetting from "./Pages/testSetting.js"
import VocabList from "./Pages/vocabList.js";
import TestVocab from "./Pages/testVocab.js";
import TestVocabWrite from "./Pages/testVocabWrite.js";
import Grammar from "./Pages/grammar.js";


const root = ReactDOM.createRoot(document.getElementById('root'));

//слова 

//хунань
const vocabFoodChansha = [{"char":"臭豆腐", "phen":"chòudòufu", "trans":"Вонючий тофу", "pict":"tofu.jpg"}, {"char":"毛氏红烧肉", "phen":"Máo shì hóngshāoròu", "trans":"Тушенное мясо по рецепту семьи Мао", "pict":"meat.jpg"},{"char":"东安子鸡", "phen":"dōng’ān zǐjī", "trans":"Курица Дунъань", "pict":"chicken.jpg"}, {"char":"湘西酸肉", "phen":"xiāngxī suānròu", "trans":"Мясо в кислом соусе по-западнохунаньски", "pict":"meat2.jpg"}, {"char":"剁椒鱼头", "phen":"duòjiāo yútóu", "trans":"Рыбья голова в хлопьях красного перца", "pict":"fish.jpg"}];

const vocabFoodGuizhou = [{"char":"茅台酒", "phen":"máo tái jiǔ ", "trans":"Маотай, высококачественный китайский ликёр", "pict":"liquor.png"}, {"char":"丝娃娃 ", "phen":"sī wá wá", "trans":"Сивава", "pict":"sivava.png"},{"char":"怪噜炒饭", "phen":"guài lū chǎo fàn", "trans":"Жареный рис Гуайлу", "pict":"friedRice.png"}, {"char":"酸汤鱼", "phen":"suān tāng yú", "trans":"Рыба в кислом супе", "pict":"sourFishSoup.png"}, {"char":"肠旺面", "phen":"cháng wáng miàn", "trans":"Лапша с свиными кишками", "pict":"nodlesPorkIntestines.png"}];

const vocabSightsChansha = [{"char":"张家界国家森林公园 ", "phen":"zhāng jiā jiè guó jiā sēn língōng yuán", "trans":"Чжанцзяцзе (природный парк)", "pict":"naturePark.png"}, {"char":"五一广场", "phen":"wǔ yī guǎng chǎng", "trans":"Площадь 'Уи'", "pict":"square.png"},{"char":"洞庭湖", "phen":"dòngtínghú", "trans":"Озеро Дунтинху", "pict":"lake.png"}, {"char":"风凰县", "phen":"fēng huáng xiàn", "trans":"Фенхуан - город Феникc (древний город)", "pict":"acientTown.png"}, {"char":"毛泽东故居", "phen":"máo zé dōng gù jū", "trans":"Дом-музей Мао ЦзеДуна", "pict":"musemMao.png"},{"char":"马王堆", "phen":"mǎ wáng duī", "trans":"Мавадуй", "pict":"Mavaduy.png"},{"char":"南方长城", "phen":"nán fāng cháng chéng", "trans":"Южная Великая стена", "pict":"wall.png"}];

//гуйчжоу
const vocabSightsGuizhou = [{"char":"黄果树瀑布 ", "phen":"huáng guǒ shù pù bù", "trans":"Водопады Хуангошу", "pict":"waterFall.png"}, {"char":"梵净山", "phen":"fàn jìng shān", "trans":"Фаньцзиншань, горы Фаньцзин", "pict":"mountains.png"},{"char":"毕节织金洞", "phen":"bì jié zhī jīn tóng", "trans":"Карстовые пещеры Чжицзинь в Бицзе", "pict":"cave.png"}, {"char":"西江苗寨", "phen":"xī jiāng miáo zhài", "trans":"Деревня Мяо на реке Сицзян", "pict":"village.png"}, {"char":"同仁大峡谷", "phen":"tóng rén dà xiá gǔ", "trans":"Гранд-Каньон Тунжэнь", "pict":"canyon.png"}];

//тесты
//хунань
const vocabFoodTestChansha =[{"char":"臭豆腐", "phen":"chòudòufu","pict":"tofu.jpg", "var1":"Вонючий тофу", "var2":"Тушенное мясо по рецепту семьи Мао", "var3":"Курица Дунъань", "rightVar":"var1"}, {"char":"毛氏红烧肉", "phen":"Máo shì hóngshāoròu","pict":"meat.jpg", "var1":"Вонючий тофу", "var2":"Тушенное мясо по рецепту семьи Мао", "var3":"Курица Дунъань", "rightVar":"var2"}, {"char":"东安子鸡", "phen":"dōng’ān zǐjī","pict":"chicken.jpg", "var1":"Вонючий тофу", "var2":"Тушенное мясо по рецепту семьи Мао", "var3":"Курица Дунъань", "rightVar":"var3"}]

const vocabFoodTestWriteChansha =[{"char":"Вонючий тофу", "phen":"","pict":"tofu.jpg", "trans":"臭豆腐", "trans2":"chòudòufu"}, {"char":"臭豆腐", "phen":"chòudòufu","pict":"tofu.jpg", "trans":"Вонючий тофу", "trans2":"Вонючий тофу"}, {"char":"毛氏红烧肉", "phen":"Máo shì hóngshāoròu","pict":"meat.jpg","trans":"Тушенное мясо по рецепту семьи Мао", "trans2":"Тушенное мясо по рецепту семьи Мао"}, {"char":"东安子鸡", "phen":"dōng’ān zǐjī","pict":"chicken.jpg","trans":"Курица Дунъань", "trans2":"Курица Дунъань"}]

//грамматика
//хунань
const ChanshaGrammarChar = [[{"char":"这个菜", "color":"white"},{"char":"是", "color":"grey"},{"char":"臭豆腐","color":"white"}], 
[{"char":"昨天", "color":"grey"},{"char":"他/她点了毛氏红烧肉", "color":"white"}], 
[{"char":"那个饭馆", "color":"white"},{"char":"不", "color":"grey"},{"char":"做东安子鸡","color":"white"}],
[{"char":"以前你", "color":"white"},{"char":"吃过", "color":"grey"},{"char":"湘西酸肉吗？","color":"white"}],
[{"char":"我", "color":"white"},{"char":"喜欢", "color":"grey"},{"char":"剁椒鱼头","color":"white"}],
[{"char":"今天我们参观马王堆", "color":"white"},{"char":"和", "color":"grey"},{"char":"毛泽东故居","color":"white"}],
[{"char":"他", "color":"white"},{"char":"在", "color":"grey"},{"char":"张家界国家森林公园","color":"white"}],
[{"char":"洞庭湖", "color":"white"},{"char":"离", "color":"grey"},{"char":"五一广场很近","color":"white"}],
[{"char":"你更喜欢凤凰县", "color":"white"},{"char":"还是", "color":"grey"},{"char":"南方长城","color":"white"}]];

const ChanshaGrammarTrans = [["Это блюдо - вонючий тофу."],["Вчера он/она заказал(а) тушенное мясо по рецепту семьи Мао."], ["Тот ресторан не готовит курицу Дунъань."], ["Раньше ты пробовал мясо в кисло-сладком соусе?"], ["Мне нравится рыбья голова в хлопьях красного перца."],["Сегодня мы посетим Мавадуй и Дом-музей Мао."], ["Он в природном лесном парке Чжанцзяцзе."], ['Озеро Дунтинху находится недалеко от площади "Уи".'], ["Тебе больше понравился город Феникс или Южная Великая стена?"]];

const ChanshaGrammar = ["zhè gè cài shì chòudòufu.","zuótiān tā/tā diǎn le máoshì hóngshāoròu.", "nà ge fànguǎn bù zuò dōng ān zǐ jī.", "yǐqián nǐ chī guò xiāngxī suānròu mǎ?", "wǒ xǐhuan duòjiāo yútóu.", "jīn tiān wǒ men cān guān mǎ wáng duī hé máo zé dōng gù jū.", "tā zài zhāng jiā jiè guó jiā sēn lín gōng yuán.", "dòng tíng hú lí wǔ yī guǎng chǎng hěn jìn.", "nǐ gèng xǐ huan fēng huáng xiàn hái shi nán fāng cháng chéng?"];

const ChanshaGrammarLinks = {"test":"/ChanshaGrammar"};

const GuizhouGrammarChar = [[{"char":"他们", "color":"white"},{"char":"都", "color":"grey"},{"char":"买茅台酒","color":"white"}],
[{"char":"丝娃娃", "color":"white"},{"char":"真", "color":"grey"},{"char":"好吃","color":"white"}],
[{"char":"肠旺面", "color":"white"},{"char":"比", "color":"grey"},{"char":"怪噜炒饭辣","color":"white"}],
[{"char":"酸汤鱼有", "color":"white"},{"char":"什么", "color":"grey"},{"char":"味儿?","color":"white"}],
[{"char":"你看过黄果树瀑布", "color":"white"},{"char":"吗?", "color":"grey"}],
[{"char":"我想", "color":"white"},{"char":"去", "color":"grey"},{"char":"梵净山","color":"white"}],
[{"char":"毕节织金洞票是", "color":"white"},{"char":"多少", "color":"grey"},{"char":"钱?","color":"white"}],
[{"char":"西江苗寨", "color":"white"},{"char":"怎么样?", "color":"grey"}],
[{"char":"因为", "color":"grey"},{"char":"铜仁大峡谷很美丽", "color":"white"}, {"char":"所以", "color":"grey"},{"char":"游客非常多", "color":"white"}]
];

const GuizhouGrammarTrans = [["Они все купили Маотай."], ["Сивава очень вкусные."], ["Лапша со свиными кишками острее, чем Гуайлу."], ['Какой вкус у "Рыба в кислом супе"?'], ["Ты видел/смотрел на водопады Хуангошу?"], ["Я хочу пойти в Фаньцзиншань."], ["Сколько стоит билет в карстовые пещеры Чжицзинь в Бицзе?"], ["Как тебе деревня Мяо на реке Сицзян?"], ["Так как Гранд-Каньон Тунжэнь очень красивый, поэтому там очень много туристов."]];

const GuizhouGrammar = ["tā men dōu mǎi máo tái jiǔ.","sī wá wá zhēn hào chī.", "cháng wàng miàn bǐ guài lū chǎo fàn là.", "suan tang yu you shen me wei er?", "nǐ kàn guò huáng guǒ shù pù bù ma?", "wǒ xiǎng qù fàn jìng shān.", "bì jié zhī jīn tóng piào shì duō shao qián?", "xī jiāng miáo zhài zěn me yàng?", "yīn wèi tóng rén dà xiá gǔ hěn měi lì suǒ yǐ yóu kè fēi cháng duō."];

const GuizhouGrammarLinks = {"test":"/GuizhouGrammar"};


//провинции
const nameChansha = {"province": "Провинция Хунань 湖南", "city":"г. Чанша 长沙市"};
const nameGuizhou = {"province": "Провинция Гуйчжоу 贵州", "city":" "};
const nameGuandun = {"province": "Гуандун 广东", "city":" "};

//ссылки провинций

const ChanshaLinks ={"pictmap":"chansha.png", "food":"/ChanshaFood", "sights":"/ChanshaSights", "grammar":"/ChanshaGrammar"}
const GuizhouLinks ={"pictmap":"guizhou.png", "food":"/GuizhouFood", "sights":"/GuizhouSights", "grammar":"/GuizhouGrammar"}
const GuandunLinks ={"pictmap":"guandun.png", "food":"/GuizhouFood", "sights":"/GuizhouSights"}

//сылки на слова
//хунань
const ChanshaFoodLinks ={"test":"/ChanshaFoodTestSetting", "title":"Еда 中国菜", "title2":""}
const ChanshaSightsLinks ={"test":"/ChanshaFoodTestSetting", "title":"Достопримечательности", "title2":"名胜地方"}
//гуйчжоу
const GuizhouFoodLinks ={"test":"/ChanshaFoodTestSetting", "title":"Еда 中国菜", "title2":""}
const GuizhouSightsLinks ={"test":"/ChanshaFoodTestSetting", "title":"Достопримечательности", "title2":"名胜地方"}

//ссылки тестов и настройки тестов
//хунань
const ChanshaFoodTestSettingLinks = {"testVocab":"/ChanshaFoodTestVocab", "testVocabWrite":"/ChanshaFoodTestVocabWrite"}
const ChanshaTestLinks ={ "grammar":"/ChanshaGrammar", "testVocab":"/ChanshaFoodTestSetting", "location":"/chansha"}

//ссылки для сайдбара
//для карты
const MapSidenav = [{"href":"/map", "src":"mapicon.png"}];

//для хунани
const ChanshaSidenav = [].concat(MapSidenav, [{"href":"/chansha", "text":"Хунань"}]);
const ChanshaFoodSidenav = [].concat(ChanshaSidenav,[{"href":"/ChanshaFood", "text":"Слова"}])
const ChanshaSightsSidenav = [].concat(ChanshaSidenav,[{"href":"/ChanshaSights", "text":"Слова"}])
const ChanshaGrammarSidenav = [].concat(ChanshaSidenav,[{"href":"/ChanshaGrammar", "text":"Грамматика"}])

//для гуйчжоу
const GuizhouSidenav = [].concat(MapSidenav, [{"href":"/guizhou", "text":"Гуйчжоу"}]); 
const GuizhouFoodSidenav = [].concat(GuizhouSidenav,[{"href":"/GuizhouFood", "text":"Слова"}]);
const GuizhouSightsSidenav = [].concat(GuizhouSidenav,[{"href":"/GuizhouSights", "text":"Слова"}]);
const GuizhouGrammarSidenav = [].concat(GuizhouSidenav,[{"href":"/GuizhouGrammar", "text":"Грамматика"}])

//для гуандун
const GuandunSidenav = [].concat(MapSidenav,[{"href":"/guandun", "text":"Гуандун"}]);

const dynamicSidebar = {"/chansha":ChanshaSidenav, "/map":MapSidenav, "/ChanshaFood":ChanshaFoodSidenav,"/ChanshaSights":ChanshaSightsSidenav,"/ChanshaGrammar":ChanshaGrammarSidenav, "/guizhou":GuizhouSidenav, "/GuizhouFood":GuizhouFoodSidenav,"/GuizhouSights":GuizhouSightsSidenav, "/GuizhouGrammar":GuizhouGrammarSidenav, "/guandun":GuandunSidenav};

//информация о провинциях
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

function Sidebar() {
  

    const listImg = ["home", "lk", "vocabList"];

    const SideImages =listImg.map((img, index) =>
      <Link to={"/"+img} key={index}><img key={index} src={img +".png"} alt="icon_picture"/></Link>
    );

    const SideDynanic = () => {

      if (location.pathname in dynamicSidebar)
      return (
        dynamicSidebar[location.pathname].map((item,index) => index===0 ? <Link to={item.href} key={index}><img src={item.src} key={index}alt="icon_picture"/></Link> : <Link to={item.href} key={index}><p key={index}>{item.text}</p></Link>
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
            <Route exact path="/home" element={<MainMenu/>}/>
            <Route exact path="/" element={<MainMenu/>}/>
            <Route exact path="/lk" element={<Lk/>}/>
            <Route exact path="/vocabList" element={<VocabList/>}/>
            <Route exact path="/map" element={<Map />}/>

            <Route exact path="/chansha" element={<Location name={nameChansha} info={InfoChansha()} links={ChanshaLinks}/>}/>
            <Route exact path="/guizhou" element={<Location name={nameGuizhou} info={InfoGuizhou()} links={GuizhouLinks}/>}/>
            <Route exact path="/guandun" element={<Location name={nameGuandun} info={InfoGuandun()} links={GuandunLinks}/>}/>


            <Route exact path="/ChanshaFood" element={<Vocabulary words={vocabFoodChansha} links={ChanshaFoodLinks}/>}/>
            <Route exact path="/ChanshaSights" element={<Vocabulary words={vocabSightsChansha} links={ChanshaSightsLinks}/>}/>
            <Route exact path="/ChanshaGrammar" element={<Grammar char={ChanshaGrammarChar} phen={ChanshaGrammar} trans={ChanshaGrammarTrans} links={ChanshaGrammarLinks}/>}/>
            <Route exact path="/GuizhouGrammar" element={<Grammar char={GuizhouGrammarChar} phen={GuizhouGrammar} trans={GuizhouGrammarTrans} links={GuizhouGrammarLinks}/>}/>


            <Route exact path="/GuizhouFood" element={<Vocabulary words={vocabFoodGuizhou} links={GuizhouFoodLinks}/>}/>
            <Route exact path="/GuizhouSights" element={<Vocabulary words={vocabSightsGuizhou} links={GuizhouSightsLinks}/>}/>


            <Route exact path="/ChanshaFoodTestSetting" element={<TestSetting links={ChanshaFoodTestSettingLinks}/>}/>
            <Route exact path="/ChanshaFoodTestVocab" element={<TestVocab words={vocabFoodTestChansha} links={ChanshaTestLinks}/>}/>
            <Route exact path="/ChanshaFoodTestVocabWrite" element={<TestVocabWrite words={vocabFoodTestWriteChansha} links={ChanshaTestLinks}/>}/>




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