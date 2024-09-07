import "./location.css";



const Chansha =() =>
{
    return(
        <>
            <div className="page">
                <header> <img src="chansha.png"/>
                    <h1>Провинция Хунань 湖南 <br/> г. Чанша 长沙市</h1>
                
                </header>
                <article>
                    <div className="info"> 
                        <p><b>Хунань</b> – провинция на юге Китая, расположеная к югу от крупного озера Дунтин (Дунтинху). Это обстоятельство и повлияло на название региона, которое на русский переводится как «Провинция к Югу от Озера»., расположенна в горной местности. На северо-востоке этого региона в городе Шаошань в 1893 года родился Мао Цзэдун. <br/> </p>
                        <p>Город <b>Чанша</b> – административный центр провинции Хунань. Расположен он на реке Сянцзян, в гористой местности, между горной вершиной Юэлушань на западе и реками Люянхэ и Лаодаохэ на востоке. <br/> </p>
                        <p>Население Чанша составляет 6,529 человек, большинство жителей города – этнические китайцы. </p>
                    </div>
                    <div> 
                        <div className="sectionName">Категории новых слов</div>
                        <div className="wrap"><a href="/chansha">
                            <button className="button">Еда 中国菜</button></a></div>
                        <div className="wrap"><a href="/chansha">
                            <button className="button">Достопримечательности 名胜古迹</button></a></div>
                        <div className="wrap"><a href="/chansha">
                            <button className="button">Еще одна категория</button></a></div>
                        <div className="wrap"><a href="/chansha">
                            <button className="button2">Грамматика</button></a></div>
                    </div>
                </article>
            </div>
        </>
    )
}


export default Chansha