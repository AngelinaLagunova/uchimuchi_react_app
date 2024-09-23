import "./location.css";



const Location =(props) =>
{
    return(
        <>
            <div className="page">

                <div className="locationHeader"> 
                    <img src={props.links.pictmap} alt="chansha_map_picture"/>
                    <h1>{props.name.province} <br/> {props.name.city}</h1>
                </div>
                
                <article>
                    <div className="info"> 
                        {props.info}
                    </div>
                    <div> 
                        <div className="sectionName">Категории новых слов</div>
                        <div className="wrap"><a href={props.links.food}>
                            <button className="button" width="500px">Еда 中国菜</button></a></div>
                        <div className="wrap"><a href={props.links.sights}>
                            <button className="button">Достопримечательности 名胜古迹</button></a></div>
                        <div className="wrap"><a href={props.links.food}>
                            <button className="button">Еще одна категория</button></a></div>
                        <div className="wrap"><a href={props.links.food}>
                            <button className="button2">Грамматика</button></a></div>
                    </div>
                </article>
            </div>
        </>
    )
}


export default Location