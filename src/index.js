import React from 'react';
// import React, { useEffect } from 'react';

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



const root = ReactDOM.createRoot(document.getElementById('root'));

const BaseVocabList = [{"char": "他", "phen": "tā", "trans": "он, его"}, {"char": "她", "phen": "tā", "trans": "она, её"}, {"char": "它", "phen": "tā", "trans": "оно"}, {"char": "他们", "phen": "tāmen", "trans": "они, их"}, {"char": "你", "phen": "nǐ", "trans": "ты"}, {"char": "您", "phen": "nín", "trans": "Вы, Ваш (вежливое обращение к одному лицу)"}, {"char": "你们", "phen": "nǐmen", "trans": "вы (множество лиц)"}, {"char": "我", "phen": "wǒ", "trans": "я"}, {"char": "我们", "phen": "wǒmen", "trans": "мы"}, {"char": "昨天", "phen": "zuótiān", "trans": "вчера"}, {"char": "今天", "phen": "jīntiān", "trans": "сегодня, нынче"}, {"char": "明天", "phen": "míngtiān", "trans": "завтра"}, {"char": "后天", "phen": "hòutiān", "trans": "послезавтра"}, {"char": "前天", "phen": "qiántiān", "trans": "позавчера"}, {"char": "去年", "phen": "qùnián", "trans": "прошлый год; в прошлом году"}, {"char": "新年", "phen": "xīnnián", "trans": "Новый год"}, {"char": "上年", "phen": "shàngnián", "trans": "прошлый год, в прошлом году"}, {"char": "点(菜)", "phen": "diǎn", "trans": "заказывать"}, {"char": "做", "phen": "zuò", "trans": "делать, изготавливать"}, {"char": "吃", "phen": "chī", "trans": "кушать"}, {"char": "买", "phen": "mǎi", "trans": "купить, покупать"}, {"char": "看", "phen": "kān", "trans": "смотреть (за кем-либо/чем-либо), любоваться чем-либо; читать"}, {"char": "想", "phen": "xiǎng", "trans": "думать, мыслить, намереваться, хотеть, ожидать, мечтать; тосковать, скучать; вспоминать"}, {"char": "菜", "phen": "cài", "trans": "овощи, зелень; блюдо"}, {"char": "票", "phen": "piào", "trans": "билет"}, {"char": "钱", "phen": "qián", "trans": "деньги, монетка"}, {"char": "辣", "phen": "là", "trans": "острый (вкус)"}, {"char": "甜", "phen": "tián", "trans": "сладкий (вкус)"}, {"char": "酸", "phen": "suān", "trans": "кислый (вкус); прокиснуть"}, {"char": "苦", "phen": "kǔ", "trans": "горький, горечь (вкус); тяжёлый, горький, горе"}, {"char": "饭馆", "phen": "fànguǎn", "trans": "кафе, столовая, ресторан"}, {"char": "喜欢", "phen": "xǐhuan", "trans": "нравиться"}, {"char": "好吃", "phen": "hǎochī, hàochī", "trans": "hǎochī вкусный, приятный на вкус; hàochī быть обжорой, любить поесть"}, {"char": "旅行", "phen": "lǚxíng", "trans": "путешествовать; путешествие, поездка"}, {"char": "中国", "phen": "zhōngguó", "trans": "Китай"}]

const BaseGifs = [["gif1.gif"], ["gif2.gif"], ["gif3.gif"], ["gif1.gif", "gif4.gif"], ["gif5.gif"], ["gif6.gif"],["gif5.gif", "gif4.gif"], ["gif7.gif"], ["gif7.gif", "gif4.gif"], ["gif8.gif", "gif9.gif"], ["gif10.gif", "gif9.gif"], ["gif11.gif", "gif9.gif"], ["gif12.gif", "gif9.gif"], ["gif13.gif", "gif9.gif"], ["gif14.gif", "gif15.gif"], ["gif16.gif", "gif15.gif"], ["gif17.gif", "gif15.gif"], ["gif18.gif", "gif19.gif"], ["gif20.gif"], ["gif21.gif"], ["gif22.gif"], ["gif23.gif"], ["gif24.gif"], ["gif25.gif"], ["gif26.gif"], ["gif27.gif"], ["gif28.gif"], ["gif29.gif"], ["gif30.gif"], ["gif31.gif"], ["gif32.gif", "gif33.gif"], ["gif34.gif", "gif35.gif"], ["gif36.gif", "gif37.gif"], ["gif38.gif", "gif39.gif"], ["gif40.gif", "gif41.gif"]]
//слова 

//хунань
const vocabFoodChansha = [{"char":"臭豆腐", "phen":"chòudòufu", "trans":"Вонючий тофу", "pict":"tofu.jpg"}, {"char":"毛氏红烧肉", "phen":"Máo shì hóngshāoròu", "trans":"Тушенное мясо по рецепту семьи Мао", "pict":"meat.jpg"},{"char":"东安子鸡", "phen":"dōng’ān zǐjī", "trans":"Курица Дунъань", "pict":"chicken.jpg"}, {"char":"湘西酸肉", "phen":"xiāngxī suānròu", "trans":"Мясо в кислом соусе по-западнохунаньски", "pict":"meat2.jpg"}, {"char":"剁椒鱼头", "phen":"duòjiāo yútóu", "trans":"Рыбья голова в хлопьях красного перца", "pict":"fish.jpg"}];

const vocabSightsChansha = [{"char":"张家界国家森林公园 ", "phen":"zhāng jiā jiè guó jiā sēn língōng yuán", "trans":"Чжанцзяцзе (природный парк)", "pict":"naturePark.png"}, {"char":"五一广场", "phen":"wǔ yī guǎng chǎng", "trans":"Площадь 'Уи'", "pict":"square.png"},{"char":"洞庭湖", "phen":"dòngtínghú", "trans":"Озеро Дунтинху", "pict":"lake.png"}, {"char":"风凰县", "phen":"fēng huáng xiàn", "trans":"Фенхуан - город Феникc (древний город)", "pict":"acientTown.png"}, {"char":"毛泽东故居", "phen":"máo zé dōng gù jū", "trans":"Чжанцзяцзе (природный парк)", "pict":"musemMao.png"},{"char":"马王堆", "phen":"mǎ wáng duī", "trans":"Мавадуй", "pict":"Mavaduy.png"},{"char":"南方长城", "phen":"nán fāng cháng chéng", "trans":"Южная Великая стена", "pict":"wall.png"}];

//гуйчжоу
const vocabFoodGuizhou = [{"char":"茅台酒", "phen":"máo tái jiǔ", "trans":"Маотай, высоко качественный китайский ликёр", "pict":"liquor.png"}, {"char":"丝娃娃 ", "phen":"sī wá wá", "trans":"Сивава", "pict":"sivava.png"},{"char":"怪噜炒饭", "phen":"guài lū chǎo fàn", "trans":"Жареный рис Гуайлу", "pict":"friedRice.png"}, {"char":"酸汤鱼", "phen":"suān tāng yú", "trans":"Рыба в кислом супе", "pict":"sourFishSoup.png"}, {"char":"肠旺面", "phen":"cháng wáng miàn", "trans":"Лапша с свиными кишками", "pict":"nodlesPorkIntestines.png"}];

const vocabSightsGuizhou = [{"char":"黄果树瀑布", "phen":"huáng guǒ shù pù bù", "trans":"Водопады Хуангошу", "pict":"waterFall.png"}, {"char":"梵净山", "phen":"fàn jìng shān", "trans":"Фаньцзиншань, горы Фаньцзин", "pict":"mountains.png"},{"char":"毕节织金洞", "phen":"bì jié zhī jīn tóng", "trans":"Карстовые пещеры Чжицзинь в Бицзе", "pict":"cave.png"}, {"char":"西江苗寨", "phen":"xī jiāng miáo zhài", "trans":"Деревня Мяо на реке Сицзян", "pict":"village.png"}, {"char":"同仁大峡谷", "phen":"tóng rén dà xiá gǔ", "trans":"Гранд-Каньон Тунжэнь", "pict":"canyon.png"}];

const vocabFoodGuandun = [{"char":"广东烧腊", "phen":"guǎngdōng shāo là", "trans":"Жаркое по-кантонски", "pict":"guandunFood1.png"}, {"char":"石岐乳鸽", "phen":"shí qí rǔ gē", "trans":"Молодой голубь Шици", "pict":"guandunFood2.png"},{"char":"广式早茶点心", "phen":"guǎngshì zǎochá diǎnxin", "trans":"Десерты к чаю в кантонском стиле", "pict":"guandunFood3.png"}, {"char":"叉烧包", "phen":"chāshāobāo", "trans":"Баоцзы с маринованной свининой", "pict":"guandunFood4.png"}, {"char":"双皮奶", "phen":"shuāng pí nǎi", "trans":"Молоко с двойной пенкой", "pict":"guandunFood5.png"}];

const vocabSightsGuandun = [{"char":"海上古堡 ", "phen":"hǎishàng gǔbǎo", "trans":"Старинный замок в море", "pict":"guandunSights1.png"}, {"char":"逢简水乡", "phen":"féng jiǎn shuǐxiāng", "trans":"Деревня Фэнцзянь", "pict":"guandunSights2.png"},{"char":"深圳虹桥公园", "phen":"shēnzhèn hóngqiáo gōngyuán", "trans":"Парк «Красный мост» в Шэньчжэне", "pict":"guandunSights3.png"}, {"char":"千年瑶寨", "phen":"qiānnián yáo zhài", "trans":"Тысячелетняя деревня ЯоЧжай", "pict":"guandunSights4.png"}, {"char":"鼎湖山", "phen":"Dǐnghúshān", "trans":"Динхушань", "pict":"guandunSights5.png"}];


//тесты
//хунань
const vocabFoodTestChansha =[{"char":"五一广场", "phen":"wǔ yī guǎng chǎng","pict":"tofu.jpg", "var1":"Вонючий тофу", "var2":"Тушенное мясо по рецепту семьи Мао", "var3":"Курица Дунъань", "rightVar":"var1"}, {"char":"毛氏红烧肉", "phen":"Máo shì hóngshāoròu","pict":"meat.jpg", "var1":"Вонючий тофу", "var2":"Тушенное мясо по рецепту семьи Мао", "var3":"Курица Дунъань", "rightVar":"var2"}, {"char":"东安子鸡", "phen":"dōng’ān zǐjī","pict":"chicken.jpg", "var1":"Вонючий тофу", "var2":"Тушенное мясо по рецепту семьи Мао", "var3":"Курица Дунъань", "rightVar":"var3"}]

const vocabSightsTestChansha =[{"char":"臭豆腐", "phen":"zhāng jiā jiè guó jiā sēn língōng yuán","pict":"square.png", "var1":"Площадь 'Уи'", "var2":"Дом-музей Мао ЦзеДуна", "var3":"Южная Великая стена", "rightVar":"var1"}, {"char":"洞庭湖", "phen":"dòngtínghú","pict":"lake.png", "var1":"Фенхуан - город Феникc (древний город", "var2":"Мавадуй", "var3":"Озеро Дунтинху", "rightVar":"var3"}, {"char":"南方长城", "phen":"nán fāng cháng chéng", "pict":"wall.png", "var1":"Южная Великая стена", "var2":"Мавадуй", "var3":"Чжанцзяцзе (природный парк)", "rightVar":"var1"}]

const vocabFoodTestGuizhou =[{"char":"茅台酒", "phen":"máo tái jiǔ","pict":"liquor.png", "var1":"Сивава", "var2":"Маотай, высоко качественный китайский ликёр", "var3":"Рыба в кислом супе", "rightVar":"var2"}, {"char":"酸汤鱼", "phen":"sī wá wá","pict":"sivava.png", "var1":"Сивава", "var2":"Рыба в кислом супе", "var3":"Маотай", "rightVar":"var1"}, {"char":"肠旺面", "phen":"cháng wáng miàn","pict":"nodlesPorkIntestines.png", "var1":"Жареный рис Гуайлу", "var2":"Тушенное мясо по рецепту семьи Мао", "var3":"Лапша с свиными кишками", "rightVar":"var3"}]

const vocabSightsTestGuizhou =[{"char":"黄果树瀑布", "phen":"huáng guǒ shù pù bù","pict":"waterFall.png", "var1":"Водопады Хуангошу", "var2":"Гранд-Каньон Тунжэнь", "var3":"Карстовые пещеры Чжицзинь в Бицзе", "rightVar":"var1"}, {"char":"西江苗寨", "phen":"xī jiāng miáo zhài","pict":"village.png", "var1":"Фаньцзиншань, горы Фаньцзин", "var2":"Деревня Мяо на реке Сицзян", "var3":"Гранд-Каньон Тунжэнь", "rightVar":"var2"}, {"char":"同仁大峡谷", "phen":"tóng rén dà xiá gǔ","pict":"canyon.png", "var1":"Фаньцзиншань, горы Фаньцзин", "var2":"Карстовые пещеры Чжицзинь в Бицзе", "var3":"Гранд-Каньон Тунжэнь", "rightVar":"var3"}]

const vocabFoodTestGuandun =[{"char":"广东烧腊", "phen":"guǎngdōng shāo là","pict":"guandunFood1.png", "var1":"Жаркое по-кантонски", "var2":"Рыба в кислом супе", "var3":"Курица Дунъань", "rightVar":"var1"}, {"char":"叉烧包", "phen":"chāshāobāo","pict":"guandunFood4.png", "var1":"Вонючий тофу", "var2":"Тушенное мясо по рецепту семьи Мао", "var3":"Баоцзы с маринованной свининой", "rightVar":"var3"}, {"char":"石岐乳鸽", "phen":"shí qí rǔ gē","pict":"guandunFood2.png", "var1":"Молодой голубь Шици", "var2":"Десерты к чаю в кантонском стиле", "var3":"Жареный рис Гуайлу", "rightVar":"var1"}]

const vocabSightsTestGuandun =[{"char":"海上古堡", "phen":"hǎishàng gǔbǎo","pict":"guandunSights1.png", "var1":"Деревня Фэнцзянь", "var2":"Старинный замок в море", "var3":"Парк «Красный мост» в Шэньчжэне", "rightVar":"var2"}, {"char":"千年瑶寨", "phen":"qiānnián yáo zhài","pict":"guandunSights4.png", "var1":"Динхушань", "var2":"Тысячелетняя деревня ЯоЧжай", "var3":"Деревня Фэнцзянь", "rightVar":"var2"}, {"char":"鼎湖山", "phen":"Dǐnghúshān","pict":"guandunSights5.png", "var1":"Старинный замок в море", "var2":"Тысячелетняя деревня ЯоЧжай", "var3":"Динхушань", "rightVar":"var3"}]

// const vocabFoodTestWriteChansha =[{"char":"Вонючий тофу", "phen":"","pict":"tofu.jpg", "trans":"臭豆腐", "trans2":"chòudòufu"}, {"char":"臭豆腐", "phen":"chòudòufu","pict":"tofu.jpg", "trans":"Вонючий тофу", "trans2":"Вонючий тофу"}, {"char":"毛氏红烧肉", "phen":"Máo shì hóngshāoròu","pict":"meat.jpg","trans":"Тушенное мясо по рецепту семьи Мао", "trans2":"Тушенное мясо по рецепту семьи Мао"}, {"char":"东安子鸡", "phen":"dōng’ān zǐjī","pict":"chicken.jpg","trans":"Курица Дунъань", "trans2":"Курица Дунъань"}]

//грамматика
//хунань
const ChanshaGrammarChar = [[{"char":"这个菜", "color":"white"},{"char":"是", "color":"grey"},{"char":"臭豆腐","color":"white"}], 
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

const ChanshaGrammarTrans = [["Это блюдо - вонючий тофу."],["Вчера он/она заказал(а) тушенное мясо по рецепту семьи Мао."], ["Тот ресторан не готовит курицу Дунъань."], ["Раньше ты пробовал мясо в кисло-сладком соусе?"], ["Мне нравится рыбья голова в хлопьях красного перца."],["Они все купили Маотай."], ["Сивава очень вкусные."], ['Лапша со свиными кишками острее, чем Гуайлу.'], ["Ты купил какие сувениры?"], ["Ты видел водопады Хуангошу?"], ["Я хочу пойти в горы Фаньцзиншань."], ["Сколько стоит билет в карстовые пещеры Чжицзинь в Бицзе?"], ["Как прошла твоя поездка в Китай?"]];

const ChanshaGrammar = ["zhè gè cài shì chòudòufu.","zuótiān tā/tā diǎn le máoshì hóngshāoròu.", "nà ge fànguǎn bù zuò dōng ān zǐ jī.", "yǐqián nǐ chī guò xiāngxī suānròu mǎ?", "wǒ xǐhuan duòjiāo yútóu.", "tā men dōu mǎi máo tái jiǔ.", "sī wá wá zhēn hào chī.", "cháng wàng miàn bǐ guài lū chǎo fàn là.", "nǐ mǎi le shénme jìniànpǐn?", "nǐ kàn guò huáng guǒ shù pù bù ma?", "wǒ xiǎng qù fàn jìng shān", "bì jié zhī jīn tóng piào shì duō shao qián?", "nǐ de zhōngguó lǚxíng zěnmeyàng?"];

const ChanshaGrammarLinks = {"test":"/ChanshaGrammar", "title": "Путешественник"};

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
const nameChansha = {"province": "Провинция Хунань 湖南 ", "city":"г. Чанша 长沙市"};
const nameGuizhou = {"province": "Провинция Гуйчжоу 贵州 ", "city":"г. Гуйян 贵阳"};
const nameGuandun = {"province": "Гуандун 广东 ", "city":"г. Гуанчжоу 广州"};

const namesForMap = {'chansha': nameChansha, 'guizhou': nameGuizhou, 'guandun': nameGuandun};
//ссылки провинций

const ChanshaLinks ={"pictmap":"chansha.png", "food":"/ChanshaFood", "sights":"/ChanshaSights"}
const GuizhouLinks ={"pictmap":"guizhou.png", "food":"/GuizhouFood", "sights":"/GuizhouSights"}
const GuandunLinks ={"pictmap":"guandun.png", "food":"/GuandunFood", "sights":"/GuandunSights"}

//сылки на слова
//хунань
const ChanshaFoodLinks ={"test":"/ChanshaFoodTest", "title":"Блюда 有名的美食", "title2":""}
const ChanshaSightsLinks ={"test":"/ChanshaSightsTest", "title":"Достопримечательности 名胜地方", "title2":""}
//гуйчжоу
const GuizhouFoodLinks ={"test":"/GuizhouFoodTest", "title":"Блюда 有名的美食", "title2":""}
const GuizhouSightsLinks ={"test":"/GuizhouSightsTest", "title":"Достопримечательности 名胜地方", "title2":""}

const GuandunFoodLinks ={"test":"/GuandunFoodTest", "title":"Блюда 有名的美食", "title2":""}
const GuandunSightsLinks ={"test":"/GuandunSightsTest", "title":"Достопримечательности 名胜地方", "title2":""}

//ссылки тестов и настройки тестов
//хунань
// const ChanshaFoodTestSettingLinks = {"testVocab":"/ChanshaFoodTestVocab", "testVocabWrite":"/ChanshaFoodTestVocabWrite"}
const ChanshaFoodTestLinks ={ "grammar":"/ChanshaGrammar", "testVocab":"/ChanshaFoodTest", "location":"/chansha"}
const ChanshaSightsTestLinks ={ "grammar":"/ChanshaGrammar", "testVocab":"/ChanshaSightsTest", "location":"/chansha"}
const GuizhouFoodTestLinks ={ "grammar":"/ChanshaGrammar", "testVocab":"/GuizhouFoodTest", "location":"/guizhou"}
const GuizhouSightsTestLinks ={ "grammar":"/ChanshaGrammar", "testVocab":"/GuizhouSightsTest", "location":"/guizhou"}
const GuandunFoodTestLinks ={ "grammar":"/ChanshaGrammar", "testVocab":"/GuandunFoodTest", "location":"/guandun"}
const GuandunSightsTestLinks ={ "grammar":"/ChanshaGrammar", "testVocab":"/GuandunSightsTest", "location":"/guandun"}


//ссылки для сайдбара
//для тематического блока
const ThemesSidnav = [{"href":"/main", "text":"Темы"}];
const BaseVocabSidnav = [{"href":"/baseVocab", "text":"Базовый словарь"}];
const PreGrammarSidnav = [{"href":"/preGrammar", "text":"Грамматика"}];



//для карты
const MapSidenav = [].concat(ThemesSidnav, [{"href":"/map", "src":"mapicon.png"}]);

//для хунани
const ChanshaSidenav = [].concat(MapSidenav, [{"href":"/chansha", "text":"Хунань"}]);
const ChanshaFoodSidenav = [].concat(ChanshaSidenav,[{"href":"/ChanshaFood", "text":"Слова"}])
const ChanshaSightsSidenav = [].concat(ChanshaSidenav,[{"href":"/ChanshaSights", "text":"Слова"}])
const ChanshaGrammarSidenav = [].concat(PreGrammarSidnav,[{"href":"/ChanshaGrammar", "text":"Путешестве- нник"}]);

//для гуйчжоу
const GuizhouSidenav = [].concat(MapSidenav, [{"href":"/guizhou", "text":"Гуйчжоу"}]); 
const GuizhouFoodSidenav = [].concat(GuizhouSidenav,[{"href":"/GuizhouFood", "text":"Слова"}]);
const GuizhouSightsSidenav = [].concat(GuizhouSidenav,[{"href":"/GuizhouSights", "text":"Слова"}]);
const GuizhouGrammarSidenav = [].concat(GuizhouSidenav,[{"href":"/GuizhouGrammar", "text":"Грамматика"}])

//для гуандун
const GuandunSidenav = [].concat(MapSidenav,[{"href":"/guandun", "text":"Гуандун"}]);
const GuandunFoodSidenav = [].concat(GuandunSidenav,[{"href":"/GuandunFood", "text":"Слова"}]);
const GuandunSightsSidenav = [].concat(GuandunSidenav,[{"href":"/GuandunSights", "text":"Слова"}]);

const dynamicSidebar = {"/chansha":ChanshaSidenav, "/map":MapSidenav, "/ChanshaFood":ChanshaFoodSidenav,"/ChanshaSights":ChanshaSightsSidenav,"/ChanshaGrammar":ChanshaGrammarSidenav, "/guizhou":GuizhouSidenav, "/GuizhouFood":GuizhouFoodSidenav,"/GuizhouSights":GuizhouSightsSidenav, "/GuizhouGrammar":GuizhouGrammarSidenav, "/guandun":GuandunSidenav, "/main":ThemesSidnav, "/baseVocab":BaseVocabSidnav, "/preGrammar":PreGrammarSidnav, "/GuandunFood":GuandunFoodSidenav, "/GuandunSights":GuandunSightsSidenav};

//информация о провинциях
const InfoChansha = () =>(
  <>
      <p><b>Хунань</b> – провинция на юге Китая, расположеная к югу от крупного озера Дунтин (Дунтинху). Это обстоятельство и повлияло на название региона, которое на русский переводится как «Провинция к Югу от Озера»., расположенна в горной местности. На северо-востоке этого региона в городе Шаошань в 1893 года родился Мао Цзэдун. <br/> </p><p>Город <b>Чанша</b> – административный центр провинции Хунань. Расположен он на реке Сянцзян, в гористой местности, между горной вершиной Юэлушань на западе и реками Люянхэ и Лаодаохэ на востоке. <br/> </p><p>Население Чанша составляет 6,529 человек, большинство жителей города – этнические китайцы. </p>
  </>
)
const InfoGuizhou = () =>(
  <>
      <p><b>Гуйчжоу</b> – горная многонациональная провинция на юго-западе Китая. Здесь проживает более 50 этнических групп, включая мяо, донг, буи и другие. Каждая группа имеет свои уникальные традиции, язык и культуру. Провинцию часто называют «китайской Швейцарией»: более 80% территории покрыто горами, лесами, руслами рек и водопадами. <br/>Гуйчжоу также славится своей кухней, которая включает острые блюда и использование местных ингредиентов.</p>
      <p><b>Гуйян</b> - Административный центр провинции. Это крупный городской центр, который играет важную роль в экономике и культуре региона. Гуйян известен своим красивыми парками и историческими достопримечательностями.<br/>
      В провинции субтропический и влажный климат. Зимой не холодно, летом - не жарко. Средняя температура года - 15 С.</p>
  </>
)

const InfoGuandun = () =>(
  <>
      <p><b>Гуандун</b> — это прибрежный регион на юге Китая, традиционно известный на Западе как Кантон, всегда занимал стратегически важное положение из-за доступа к Южно-Китайскому морю и близости к Гонконгу и Макао. Это одна из самых экономически развитых и плотно населённых провинций в Китае, и она играет важную роль как в национальной, так и в международной торговле.</p>
      
      <p><b>Гуанчжоу</b> — столица и крупнейший город провинции Гуандун, который стал первым открытым китайским портом для европейцев. Гуанчжоу является крупным транспортным узлом, важным промышленным и коммерческим центром, где хорошо развиты автомобильная промышленность, электроника, нефтехимия, фармацевтическая, пищевая и текстильная промышленности. Кроме того, город знаменит торговыми выставками, включая Кантонскую ярмарку — одну из крупнейших и старейших международных торговых выставок в мире.</p>

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
        dynamicSidebar[location.pathname].map((item,index) => item.href==="/map" ? <Link to={item.href} key={index}><img src={item.src} key={index}alt="icon_picture"/></Link> : <Link to={item.href} key={index}><p key={index}>{item.text}</p></Link>
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
            <Route exact path="/map" element={<Map list={namesForMap}/>}/>
            <Route exact path="/baseVocab" element={<BaseVocab list={BaseVocabList} gifs={BaseGifs}/>}/>
            <Route exact path="/preGrammar" element={<PreGrammar/>}/>
            <Route exact path="/game1" element={<Game1/>}/>

            <Route exact path="/chansha" element={<Location name={nameChansha} info={InfoChansha()} links={ChanshaLinks}/>}/>
            <Route exact path="/guizhou" element={<Location name={nameGuizhou} info={InfoGuizhou()} links={GuizhouLinks}/>}/>
            <Route exact path="/guandun" element={<Location name={nameGuandun} info={InfoGuandun()} links={GuandunLinks}/>}/>


            <Route exact path="/ChanshaFood" element={<Vocabulary words={vocabFoodChansha} links={ChanshaFoodLinks}/>}/>
            <Route exact path="/ChanshaSights" element={<Vocabulary words={vocabSightsChansha} links={ChanshaSightsLinks}/>}/>
            <Route exact path="/ChanshaGrammar" element={<Grammar char={ChanshaGrammarChar} phen={ChanshaGrammar} trans={ChanshaGrammarTrans} links={ChanshaGrammarLinks}/>}/>
            <Route exact path="/GuizhouGrammar" element={<Grammar char={GuizhouGrammarChar} phen={GuizhouGrammar} trans={GuizhouGrammarTrans} links={GuizhouGrammarLinks}/>}/>
            <Route exact path="/GuandunFood" element={<Vocabulary words={vocabFoodGuandun} links={GuandunFoodLinks}/>}/>
            <Route exact path="/GuandunSights" element={<Vocabulary words={vocabSightsGuandun} links={GuandunSightsLinks}/>}/>


            <Route exact path="/GuizhouFood" element={<Vocabulary words={vocabFoodGuizhou} links={GuizhouFoodLinks}/>}/>
            <Route exact path="/GuizhouSights" element={<Vocabulary words={vocabSightsGuizhou} links={GuizhouSightsLinks}/>}/>


            {/* <Route exact path="/ChanshaFoodTestSetting" element={<TestSetting links={ChanshaFoodTestSettingLinks}/>}/> */}
            <Route exact path="/ChanshaFoodTest" element={<TestVocab words={vocabFoodTestChansha} links={ChanshaFoodTestLinks}/>}/>
            <Route exact path="/ChanshaSightsTest" element={<TestVocab words={vocabSightsTestChansha} links={ChanshaSightsTestLinks}/>}/>
            <Route exact path="/GuizhouFoodTest" element={<TestVocab words={vocabFoodTestGuizhou} links={GuizhouFoodTestLinks}/>}/>
            <Route exact path="/GuizhouSightsTest" element={<TestVocab words={vocabSightsTestGuizhou} links={GuizhouSightsTestLinks}/>}/>
            <Route exact path="/GuandunFoodTest" element={<TestVocab words={vocabFoodTestGuandun} links={GuandunFoodTestLinks}/>}/>
            <Route exact path="/GuandunSightsTest" element={<TestVocab words={vocabSightsTestGuandun} links={GuandunSightsTestLinks}/>}/>

            {/* <Route exact path="/ChanshaFoodTestVocabWrite" element={<TestVocabWrite words={vocabFoodTestWriteChansha} links={ChanshaTestLinks}/>}/> */}




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