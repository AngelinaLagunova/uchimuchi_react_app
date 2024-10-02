import './map.css';
import React from 'react';
import { Link } from "react-router-dom";

function Map(props) {
    

    return (
        <>
        <div className="page">
            {/* <div className="map"> */}

            <div className="pict">
            <h1>Путешествие 旅行</h1>

                <img src="map.png" useMap="#image-map" alt="China_map_picture"/>
            </div>
                <map name="image-map">
                    <Link to="/chansha">
                        <area target="" alt="" title="Провинция Хунань 湖南 г. Чанша 长沙市"  coords="576,513,654,596" shape="rect"/>
                    </Link>
                    <Link to="/guizhou">
                        <area target="" alt="" title="Провинция Гуйчжоу 贵州"  coords="568,600,491,540" shape="rect"/>
                    </Link>
                    <Link to="/guandun">
                        <area target="" alt="" title="Провинция Гуйчжоу 贵州"  coords="592,675,631,603,655,589,668,602,709,599,720,623,595,698" shape="poly"/>
                    </Link>
                </map>
        </div>
        {/* </div> */}
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
        </>
    );
}

export default Map;

