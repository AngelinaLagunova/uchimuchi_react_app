import './mainmenu.css';
import { Link } from "react-router-dom";

function MainMenu() {
  return (
    <>
      <div className="page">
        <div className="mainHeader">
          Учи Мучи
        </div>
        <div className="main">
          <div className="wrap"><Link to="/map">
              <button className="button">Путешествие 旅行</button></Link></div>
          <div className="wrap"><Link to="/">
              <button className="button">Второй модуль</button></Link></div>
          <div className="wrap"><Link href="/">
              <button className="button">Третий модуль</button></Link></div>
        </div>
      </div>
  </>
  );
}

export default MainMenu;
