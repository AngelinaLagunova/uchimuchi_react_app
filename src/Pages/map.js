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

                <img src="/images/map.png" useMap="#image-map" alt="China_map_picture"/>
            </div>
                <map name="image-map">
                    <Link to="/province/chansha/location">
                        <area target="" alt="" title={props.list.chansha.province + props.list.chansha.city} coords="576,513,654,596" shape="rect"/>
                    </Link>
                    <Link to="/province/guizhou/location">
                        <area target="" alt="" title={props.list.guizhou.province + props.list.guizhou.city}  coords="568,600,491,540" shape="rect"/>
                    </Link>
                    <Link to="/province/guandun/location">
                        <area target="" alt="" title={props.list.guandun.province + props.list.guandun.city}  coords="592,675,631,603,655,589,668,602,709,599,720,623,595,698" shape="poly"/>
                    </Link>
                    <Link to="/province/guansi/location">
                        <area target="" alt="" title={props.list.guansi.province + props.list.guansi.city}  coords="514,617,599,581,534,600,569,594,512,645,535,661,556,671,584,669,608,650,619,629,625,613,611,601" shape="poly"/>
                    </Link>
                </map>
                {/* <div>
                    <img src='image.gif' />
                </div> */}
        </div>
        {/* </div> */}
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
        </>
    );
}

export default Map;

