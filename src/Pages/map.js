import './map.css';

function Map() {
  return (
    <>
    <div className="page">
        <div className="pict">
            <h1>Путешествие 旅行</h1>
            <img src="map.png" usemap="#image-map"/>
        </div>
            <map name="image-map">
                <a href="/chansha">
                    <area target="" alt="" title="Провинция Хунань 湖南 г. Чанша 长沙市" coords="698,638,616,551" shape="rect"/>
                </a>
            </map>
    </div>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
    </>
  );
}

export default Map;
