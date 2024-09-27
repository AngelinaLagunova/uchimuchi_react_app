import "./location.css";
import React, { useEffect } from 'react';



const Location =(props) =>
{
    useEffect(() => {
        let sidenav = document.getElementsByClassName("sidenav")[0];
    
        for(let i=0; i<props.sdnv.length; i++){
            let nav = document.createElement('a');
            nav.href=props.sdnv[i].href;
    
            let innerA
            if(i===0){
            innerA = document.createElement("img");
            innerA.src=props.sdnv[i].src;
            innerA.alt="icon_picture";
            }
            else {
                innerA = document.createElement("p");
                innerA.innerHTML=props.sdnv[i].text;
            }
            nav.appendChild(innerA);
    
            sidenav.appendChild(nav) ;
            console.log(sidenav);
        }
        
        });

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
                        <div className="wrap"><a href={props.links.grammar}>
                            <button className="button2">Грамматика</button></a></div>
                    </div>
                </article>
            </div>
        </>
    )
}


export default Location