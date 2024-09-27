
import "./grammar.css";
// import React from "react";
import React, { useEffect } from 'react';






const Grammar = (props) =>{

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
    const [numOfGram, setTestNum] = React.useState(0);

    const Next =(event)=>{

        if (numOfGram < props.phen.length - 1){
            setTestNum(numOfGram + 1);

        }
        else {
            document.getElementsByClassName("arrowRightTest")[0].classList.add("hidden");
            document.getElementById("testButton").classList.remove("hidden");

        }

        
    }

    const Prev =(event)=>{
        if (numOfGram > 0) {
            setTestNum((numOfGram - 1));

        }
        else {
            document.getElementsByClassName("arrowLeftTest")[0].classList.add("hidden");

        }
        if (numOfGram === props.phen.length - 1){
            document.getElementsByClassName("arrowRightTest")[0].classList.remove("hidden");
            document.getElementById("testButton").classList.add("hidden");
        }

    }
    // const colorClases = ["blue", "green","orange","pink","yellow","violet"];
    

    const CharSet = props.char[numOfGram].map((item, index) =>
        <span className={item.color}>
                {item.char}
        </span>
    )
    const TransSet = props.trans[numOfGram].map((item, index) =>
        <span className="Trans">
                {item}
        </span>
    )

    return(
        <div className="page">
            <div className="GrammarHeader">
                <h1>Грамматика</h1> 
                <div></div>
                <div className="wordsButton">
                    <a href={props.links.test}>
                        <button className="button">Пройти тест</button>
                    </a>
                </div>
                
            </div>
            <div className="testVocabPage">
                <div>
                    <div onClick={Prev} className={numOfGram===0 ? "arrowLeftTest hidden" : "arrowLeftTest"}>
                        <img src="arrowLeft.png" alt="arrow_left_button"/>
                    </div>
                </div>
                <div>
                    
                    <div className="grammarChar">
                        {CharSet}
                    </div>
                    <div className="grammarPhen">
                        {props.phen[numOfGram]}
                    </div>
                    <div className="grammarTrans">
                        {TransSet}
                    </div>
                    <div className="grammarNum">
                        {(numOfGram+1)+ "/" + props.phen.length}
                    </div>
                    
                    
                </div>
                <div>
                    <div onClick={Next} className="arrowRightTest">
                        <img src="arrowRight.png" alt="arrow_right_button"/>
                    </div>
                    <a id="testButton" className="hidden grammTestButton" href={props.links.test}>
                        <button className="button">Пройти тест</button>
                    </a>
                </div>

            </div>
        </div>
    )
}

export default Grammar