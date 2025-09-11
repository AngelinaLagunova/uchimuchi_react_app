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

                {/* <img src="/images/map.png" useMap="#image-map" alt="China_map_picture"/> */}

                <svg
                version="1.1"
                id="svg1"
                width="788.95999"
                height="540.96001"
                viewBox="0 0 288.95999 240.96001">
                    <Link to="/province/chansha/location" component="g" style={{ cursor: 'pointer' }}>
                    <path
                    className="highlightable" 
                    // style={{ fill: "none", stroke: "#000000", strokeOpacity: 1 }}
                    d="m 182.09454,167.1475 0.27301,3.82208 1.09202,1.43328 -0.27301,1.02377 v 0.95551 l 0.40951,1.22853 0.34126,0.54601 v 0.61426 l -0.54601,0.34126 -0.20476,0.54601 -0.1365,0.273 -0.95552,0.20476 -1.36502,1.43327 -0.34126,0.40951 0.40951,0.47776 0.1365,0.27301 0.75077,-0.20476 0.47776,-0.61426 h 1.09202 l 0.1365,-0.40951 0.75076,0.0683 0.54601,0.61427 0.0683,1.22852 -0.81902,0.88727 -0.1365,0.34125 0.54601,0.75077 -0.13651,0.47776 -0.54601,0.273 v 0.81902 l 0.61427,0.81902 0.4095,0.273 -0.0682,1.09202 0.75077,-0.54601 0.54601,0.68251 0.61426,0.0683 0.61426,-0.95552 0.27301,-0.95552 0.1365,-0.47776 h 0.68251 l 0.40951,0.47776 v 0.95552 l 1.09202,-0.13651 0.40951,-0.34125 0.54601,-0.68252 0.27301,-0.34125 0.20475,-0.20476 v -0.47776 l 1.43328,0.20476 0.40951,-0.27301 1.63803,-0.0683 0.61426,0.40951 -0.27301,1.84279 1.36503,0.273 v 0.68251 l -0.40951,0.34126 -0.0682,2.2523 -0.95552,0.20475 v 0.75076 l -0.61426,0.81902 -0.1365,0.68251 0.34126,0.47776 1.36502,-1.22852 0.88727,0.273 0.20475,0.68252 v 1.84278 l 0.40951,0.20476 0.54601,-0.68252 0.1365,-0.273 h 1.97929 l 0.75077,0.1365 0.40951,-1.02377 -0.34126,-1.84278 1.63789,-0.40955 1.50153,0.68251 0.54601,1.09202 1.02377,-0.20475 0.1365,-2.04754 -0.4095,-0.34126 v -0.54601 l 1.63803,-1.02377 0.88726,0.68251 h 2.18405 l 1.16027,-0.81901 -0.0683,-1.29678 -0.68252,-0.68251 0.68252,-2.18404 -0.54601,-0.88727 0.47776,-1.63803 -1.91104,-2.2523 -2.25229,-4.29983 3.27606,-5.80136 -1.84279,-4.16333 -3.07131,-4.7776 -16.65332,0.47776 z"
                    id="chansha"
                    />
                    </Link>
                    <path
                    // style="fill:none;stroke:#000000;stroke-opacity:1"
                    className="highlightable" 
                    d="m 181.89939,171.62144 -0.20352,1.01762 -1.01762,0.20352 -1.3229,-1.22114 -1.11939,-1.52643 -0.76321,-0.15264 -0.30529,-2.49317 h -1.93347 l -0.61057,0.86498 -1.01762,-1.22114 h -1.47555 l 0.0509,1.3229 0.35617,0.55969 -0.91586,0.66145 -1.47555,-0.66145 -0.81409,0.40705 -0.50881,1.98436 -1.32291,0.35616 -0.50881,-1.72995 -0.35616,1.67907 -2.44229,-1.17026 -1.62819,0.91586 v 1.72995 l 2.69669,0.96674 0.96674,2.18788 -2.95109,0.76321 -2.39141,-0.50881 -1.01762,2.64581 -5.03721,0.0509 -0.76322,0.91586 -1.01762,-0.91586 -2.03523,2.08612 1.17026,0.45793 -0.0509,0.91586 -0.50881,0.40705 0.66145,0.66145 0.0509,0.81409 1.32291,0.40705 0.30528,-1.0685 1.32291,0.0509 0.50881,-0.35617 1.37378,1.72996 v 0.55969 l -0.81409,0.66145 -0.15265,2.08612 -1.01762,1.37378 0.86498,1.8826 1.17026,0.40705 0.25441,2.69669 -1.11938,1.17026 -0.0509,1.01762 1.67907,-0.55969 1.57731,-1.01762 0.35616,-1.11938 2.18788,0.35616 0.35617,1.17027 3.00198,0.66145 0.81409,-0.66145 -0.10176,-1.32291 1.17026,-0.0509 1.57731,-1.67907 1.57731,0.20352 0.66145,-1.88259 1.11938,-0.71234 1.27203,1.52643 h 1.22114 l 1.0685,0.91586 1.42467,-0.61057 0.10176,-1.22114 1.01762,-1.0685 1.3229,0.76321 0.50881,0.15264 0.76322,-1.42466 1.37378,0.0509 -0.30528,-1.47555 1.62819,0.15264 0.40704,-2.03523 -1.52643,-1.67908 1.32291,-3.25638 0.15264,-1.27202 -3.51078,1.62819 -0.91586,-2.08612 2.18788,-2.64581 1.0685,-0.55969 -0.50881,-2.54405 0.30529,-1.67907 z"
                    id="guizhou"/>
                </svg>

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
                    <Link to="/province/yunnan/location">
                        <area target="" alt="" title={props.list.yunnan.province + props.list.yunnan.city}  coords="384,539,402,545,414,562,431,578,458,584,474,538,497,558,476,566,480,577,487,613,513,637,430,687,356,622,389,576" shape="poly"/>
                    </Link>
                    <Link to="/province/fuijan/location">
                        <area target="" alt="" title={props.list.fuijan.province + props.list.fuijan.city}  coords="735,523,761,538,755,570,746,586,736,602,723,611,710,593,696,587,704,556,714,532,724,530" shape="poly"/>
                    </Link>
                    <Link to="/province/jiangxi/location">
                        <area target="" alt="" title={props.list.jiangxi.province + props.list.jiangxi.city}  coords="671,604,692,596,698,576,701,556,709,542,720,527,730,519,724,507,714,498,688,497,673,501,655,516,652,540,662,584" shape="poly"/>
                    </Link>
                    <Link to="/province/hainan/location">
                        <area target="" alt="" title={props.list.hainan.province + props.list.hainan.city}  coords="613,708,607,730,591,741,571,737,574,718,597,704,613,709" shape="poly"/>
                    </Link>
                    <Link to="/province/sichuan/location">
                        <area target="" alt="" title={props.list.sichuan.province + props.list.sichuan.city}  coords="369,448,405,447,422,464,430,450,449,450,453,428,479,449,492,467,511,457,530,463,548,470,551,488,534,504,511,501,497,521,509,538,513,556,499,550,487,551,483,536,467,547,459,563,457,583,438,583,412,541,399,539,396,511,392,478" shape="poly"/>
                    </Link>
                    <Link to="/province/chongqing/location">
                        <area target="" alt="" title={props.list.chongqing.province + props.list.chongqing.city}  coords="564,541,573,537,556,494,584,484,575,468,559,465,544,490,530,505,512,500,504,515,522,537,538,526,553,522" shape="poly"/>
                    </Link>
                    <Link to="/province/tibet/location">
                        <area target="" alt="" title={props.list.tibet.province + props.list.tibet.city}  coords="69,384,90,370,112,369,142,370,169,375,197,366,229,366,245,374,246,387,240,409,250,433,284,445,320,452,339,470,355,474,362,459,374,457,386,469,386,484,391,516,382,538,361,538,309,519,276,544,186,544,92,471,51,434" shape="poly"/>
                    </Link>
                    <Link to="/province/hubei/location">
                        <area target="" alt="" title={props.list.hubei.province + props.list.hubei.city}  coords="557,503,562,492,582,488,580,471,571,455,580,449,571,439,590,440,598,445,620,456,641,451,647,462,681,473,687,497,651,513,643,500,622,509,595,499,579,509,570,523" shape="poly"/>
                    </Link>
                    <Link to="/province/anhui/location">
                        <area target="" alt="" title={props.list.anhui.province + props.list.anhui.city}  coords="679,402,702,415,722,437,721,452,740,463,729,497,709,498,700,491,687,488,675,466,671,441,663,433,670,413,684,417" shape="poly"/>
                    </Link>
                    <Link to="/province/zhejiang/location">
                        <area target="" alt="" title={props.list.zhejiang.province + props.list.zhejiang.city}  coords="766,463,750,464,739,469,730,494,723,509,736,520,747,532,767,532,786,513,796,478" shape="poly"/>
                    </Link>
                    <Link to="/province/shanghai/location">
                        <area target="" alt="" title={props.list.shanghai.province + props.list.shanghai.city}  coords="768,449,785,449,776,466,763,462" shape="poly"/>
                    </Link>
                    <Link to="/province/jiangsu/location">
                        <area target="" alt="" title={props.list.jiangsu.province + props.list.jiangsu.city}  coords="719,389,706,400,678,399,707,416,715,430,736,428,722,447,729,455,749,465,762,462,767,447,785,447,750,412,743,402" shape="poly"/>
                    </Link>
                </map>
        </div>
        {/* </div> */}
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
        </>
    );
}

export default Map;

