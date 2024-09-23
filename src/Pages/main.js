import './main.css';

function Main() {
  return (
    <>
      <div className="page">
        <div className="mainHeader">
          Учи Мучи
        </div>
        <div className="main">
          <div className="wrap"><a href="/map">
              <button className="button">Путешествие 旅行</button></a></div>
          <div className="wrap"><a href="/">
              <button className="button">Второй модуль</button></a></div>
          <div className="wrap"><a href="/">
              <button className="button">Третий модуль</button></a></div>
        </div>
      </div>
  </>
  );
}

export default Main;
