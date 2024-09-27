import './words.css';
// import React from 'react'; 
import React, { useEffect } from 'react';



const Card = (props)=>{

    // состояни и функция для контроля переворота мини-карт, хранится массив из индексов
    const [fleshMini, setFleshMini] = React.useState([]);

    const MiniFlesh = (event) =>{
        let index =  Number(event.target.parentNode.id[8]);

        if (fleshMini.indexOf(index)===-1){
            setFleshMini(fleshMini => [...fleshMini,index]);
        }
        else {
            setFleshMini(fleshMini => fleshMini.filter(item => item !== index));
        }

    }

    const MiniCardFlesh = (props) =>{
        if (fleshMini.indexOf(Number(props.id[8]))===-1){
            return(
                <>
                <div className="charMin" >{props.item.char}</div>
                <div className="phenMin">{props.item.phen}</div>
                </>
            )
        }
        return(
            <div className="rusTransMin">{props.item.trans}</div>
        )
    }
    // генерация сразу всех мини-карт

    const MiniCardsGeneration = props.words.map((item,index) =>
        <div id={"miniCard" + index} onClick={MiniFlesh} className="miniCard" key={index} > 
            <MiniCardFlesh item={item} id={"miniCard" + index}/>
         </div>
    )
    
   
    
    const BigCardFlesh = (props) => {

        if (props.flesh){
        return(
            <>  
            {/* сторона с иероглифами */}
                <div className="translate"><img src="translate.png" alt="translate_button"/></div>
                <div>
                    <div className="star"><img src="star.png" alt="add_to_list_button"/></div>
                    <div className="rusTrans">{props.words[Number(props.num)].trans}</div>
                    <div className="pictWord"> <img src={props.words[Number(props.num)].pict} className="zoom-effect" alt={props.num + "chansha_words_picture"}/></div>
                </div>
                <div></div>
                <div className="count">{Number(props.num)+1}/{props.words.length}</div> 
            </>
            )
        }
        return(
            <>
            {/* сторона с переводом */}
                <div>
                    <div className="translate"><img src="translate.png" alt="translate_button"/></div>
                    <div className="sound"><img src="sound.png" alt="sound_button"/></div>
                </div>
                <div>
                    <div className="star"><img src="star.png" alt="add_to_list_button"/></div>
                    <div className="char">{props.words[Number(props.num)].char}</div>
                    <div className="phen">{props.words[Number(props.num)].phen}</div>
                </div>
                <div></div>
                <div className="count">{Number(props.num)+1}/{props.words.length}</div>
            </>
    
        )
    }
   

    //состояние и функция для контроля переворота карт
    const [sideOfCard, setFlesh] = React.useState(false);

    const fleshCard = (event) =>{
        setFlesh(!sideOfCard);
    }

    //состояние для пролистывания карт, хранится индект карты
    const [numOfCard, setNum] = React.useState(0);

    //перелистывание на следующую карточку
    const nextCard = (event) =>{
        if (numOfCard < props.words.length - 1){
            setNum(numOfCard + 1);
            setFlesh(false);
        }
        //контроль исчезновения правой стрелочки появления кнопки "пройти тест"
        else {
            document.getElementsByClassName("arrowRight")[0].classList.add("hidden");
            document.getElementById("testButton2").classList.remove("hidden");
        }
        //контроль появления левой стрелочки
        if (numOfCard > -1) {
            document.getElementsByClassName("arrowLeft")[0].classList.remove("hidden");
        }

    }

    //перелистывание на предыдущую карточку
    const prevCard = (event) => {
        if (numOfCard > 0) {
            setNum((numOfCard - 1));
            setFlesh(false);
        }
        // контроль исчезновения левой стрелочки 
        if (numOfCard < 2){ 
            document.getElementsByClassName("arrowLeft")[0].classList.add("hidden");
        }
        // контроль появления правой стрелочки и исчезновения кнопки "пройти тест"
        if (numOfCard === props.words.length - 1){
            document.getElementsByClassName("arrowRight")[0].classList.remove("hidden");
            document.getElementById("testButton2").classList.add("hidden");
        }
        
    }

    if(props.mode==="Показать все"){
        return(
            <>
            {/* BigCardGeneration */}
            <div>
                <div onClick={prevCard} className="arrowLeft hidden">
                    <img src="arrowLeft.png" alt="arrow_left_button"/>
                </div>
            </div>

            <div onClick = {fleshCard} className="bigCard"> 
                <BigCardFlesh words={props.words} num={numOfCard} flesh={sideOfCard}/> 
            </div>

            <div>
                <div onClick={nextCard} className="arrowRight">
                    <img src="arrowRight.png" alt="arrow_right_button"/>
                </div>

                <a id="testButton2" className="hidden testButton" href={props.links.test}>
                    <button className="button">Пройти тест</button>
                </a>
            </div>
            </>
            
        )
    }
    return(
        <>
        {MiniCardsGeneration}  
        </>
    )
}




const Vocabulary =(props)=>{

    // состояние кнопки смены страниц
    const [modeOfWatch, setMode] = React.useState("Учить");

    const SetMode = (event) =>{
        setMode (event.target.innerHTML === "Показать все" ? "Учить" : "Показать все")
    }

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
        
        <div className="page">
            
            <div className="wordPage">

                <div className="words">
                    <h1>Еда 中国菜</h1>
                </div>

                {/* кнопка смены страниц: Учиться или Посмотреть все */}
                <div className="wordsButton">
                        <button onClick ={SetMode} className="button">{modeOfWatch}</button>
                </div>


                <div className="wordsButton">
                    <a href={props.links.test}>
                        <button className="button">Пройти тест</button>
                    </a>
                </div>

                {/* блок с карточками: все или по одной */}

                <Card words={props.words} mode={modeOfWatch} links={props.links}/>
                
            </div>
        </div>
  
    )
}

export default Vocabulary