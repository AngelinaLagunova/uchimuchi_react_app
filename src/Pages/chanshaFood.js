import './words.css';
import React from 'react'; 



const Card=(props)=>{

    if (props.flesh){
    return(
        <>  
            <div className="translate"><img src="translate.png"/></div>
            <div>
                <div className="star"><img src="star.png"/></div>
                <div className="rusTrans">{props.food[Number(props.num)].trans}</div>
                <div className="pictWord"> <img src={props.food[Number(props.num)].pict}/></div>
            </div>
            <div></div>
            <div className="count">{Number(props.num)+1}/5</div> 
        </>
        )
    }
    return(
        <>
            <div>
                <div className="translate"><img src="translate.png"/></div>
                <div className="sound"><img src="sound.png"/></div>
            </div>
            <div>
                <div className="star"><img src="star.png"/></div>
                <div className="char">{props.food[Number(props.num)].char}</div>
                <div className="phen">{props.food[Number(props.num)].phen}</div>
            </div>
            <div></div>
            <div className="count">{Number(props.num)+1}/5</div>
        </>

    )
}


const ChanshaFood =(props)=>{

    const [sideOfCard, setFlesh] = React.useState(false);

    const fleshCard = (event) =>{
        setFlesh(!sideOfCard);
    }

    const [numOfCard, setNum] = React.useState(0);

    const nextCard = (event) =>{
        if (numOfCard < 4){
            setNum(numOfCard + 1);
        }
        else {
            document.getElementsByClassName("arrowRight")[0].classList.add("hidden");
            document.getElementById("testButton2").classList.remove("hidden");
        }
        
        if (numOfCard > -1) {
            document.getElementsByClassName("arrowLeft")[0].classList.remove("hidden");
        }

    }

    const prevCard = (event) => {
        if (numOfCard > 0) {
            setNum((numOfCard - 1));
        }
        if (numOfCard < 2){ 
            document.getElementsByClassName("arrowLeft")[0].classList.add("hidden");
        }
        if (numOfCard == 4){
            document.getElementsByClassName("arrowRight")[0].classList.remove("hidden");
            document.getElementById("testButton2").classList.add("hidden");
        }
        
    }
    return(
        
        <div className="page">
            
            <div className="wordPage">

                <div className="words">
                    <h1>Еда 中国菜</h1>
                </div>
                <div className="wordsButton">
                    <a href="/chanshaFood">
                        <button className="button">Показать все</button>
                    </a>
                </div>
                <div className="wordsButton">
                    <a href="/chanshaFood">
                        <button className="button">Пройти тест</button>
                    </a>
                </div>


                <div><div onClick={prevCard} className="arrowLeft hidden"><img src="arrowLeft.png"/></div></div>
                <div onClick = {fleshCard} className="bigCard"> <Card food={props.food} num={numOfCard} flesh={sideOfCard}/> </div>
                <div>
                    <div onClick={nextCard} className="arrowRight"><img src="arrowRight.png"/></div>
                    <a id="testButton2" className="hidden testButton" href="/chanshaFood">
                        <button className="button">Пройти тест</button>
                    </a>
                </div>

            </div>
        </div>
  
    )
}

export default ChanshaFood