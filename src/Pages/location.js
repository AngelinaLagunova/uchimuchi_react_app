import "./location.css";
import React from 'react';
import { Link } from "react-router-dom";



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
                        <div className="wrap2"><Link to={props.links.food}>
                            <button className="button" width="500px">Блюда 有名的美食</button></Link></div>
                        <div className="wrap2"><Link to={props.links.sights}>
                            <button className="button">Достопримечательности 名胜古迹</button></Link></div>
                        <div className="wrap2"><Link to={props.links.food}>
                            <button className="button">Еще одна категория</button></Link></div>
                        {/* <div className="wrap"><Link to={props.links.grammar}>
                            <button className="button2">Грамматика</button></Link></div> */}
                    </div>
                </article>
            </div>
        </>
    )
}


export default Location