import './mainmenu.css';
import { Link } from "react-router-dom";

function PreMain() {
  return (
    <>
      <div className="page">
        <div className="mainHeader">
          Учи Мучи
        </div>
        <div className="main">
          <div className="wrap"><Link to="/game1">
              <button className="button">Игры</button></Link></div>
              
          <div className="wrap"><Link to="/main">
              <button className="button">Темы</button></Link></div>

          <div className="wrap"><Link to="/preGrammar">
              <button className="button">Грамматика</button></Link></div>

          <div className="wrap"><Link to="/baseVocab">
              <button className="button">Базовый словарь</button></Link></div>
        </div>
      </div>
  </>
  );
}

export default PreMain;
