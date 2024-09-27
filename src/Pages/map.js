import './map.css';
import React, { useEffect } from 'react';

function Map(props) {


    
    useEffect(() => {
        let sidenav = document.getElementsByClassName("sidenav")[0];
    
        if (sidenav.children.length < props.sdnv.length+4)
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
    


    return (
        <>
        <div className="page">
            <div className="pict">
                <h1>Путешествие 旅行</h1>
                <img src="map.png" useMap="#image-map" alt="China_map_picture"/>
            </div>
                <map name="image-map">
                    <a href="/chansha">
                        <area target="" alt="" title="Провинция Хунань 湖南 г. Чанша 长沙市"  coords="576,513,654,596" shape="rect"/>
                    </a>
                    <a href="/guizhou">
                        <area target="" alt="" title="Провинция Гуйчжоу 贵州"  coords="568,600,491,540" shape="rect"/>
                    </a>
                    <a href="/guandun">
                        <area target="" alt="" title="Провинция Гуйчжоу 贵州"  coords="592,675,631,603,655,589,668,602,709,599,720,623,595,698" shape="poly"/>
                    </a>
                </map>
        </div>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
        </>
    );
}

export default Map;

