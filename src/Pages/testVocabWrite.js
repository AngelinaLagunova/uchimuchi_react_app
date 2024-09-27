import React from 'react';


const TestVocabWrite =(props) =>{
    
  

    const [ testState, setTestState ] = React.useState(true);
    const [ answers, setAnsw ] = React.useState([]);


    const EndTest = (event) =>{
        setTestState(false)
    }

    const [numOfTest, setTestNum] = React.useState(0);

    const Next =(event)=>{

        if (numOfTest < props.words.length - 1){
            setTestNum(numOfTest + 1);
            document.getElementById("submitButton").classList.remove("wrongAnswer");
            document.getElementById("submitButton").classList.remove("rightAnswer");
            setInput("");

        }
        else {
            document.getElementsByClassName("arrowRightTest")[0].classList.add("hidden");
            document.getElementById("endTest").classList.remove("hidden");

        }
        document.getElementsByClassName("page")[0].classList.remove("rightAnswerBg");
        document.getElementsByClassName("page")[0].classList.remove("wrongAnswerBg");
        

        
    }
    
    const Prev =(event)=>{
        if (numOfTest > 0) {
            setTestNum((numOfTest - 1));
            document.getElementById("submitButton").classList.remove("wrongAnswer");
            document.getElementById("submitButton").classList.remove("rightAnswer");
            setInput("");
        }
        else {
            document.getElementsByClassName("arrowLeftTest")[0].classList.add("hidden");

        }
        if (numOfTest === props.words.length - 1){
            document.getElementsByClassName("arrowRightTest")[0].classList.remove("hidden");
            document.getElementById("endTest").classList.add("hidden");
        }
        document.getElementsByClassName("page")[0].classList.remove("rightAnswerBg");
        document.getElementsByClassName("page")[0].classList.remove("wrongAnswerBg");


    }

    const [input, setInput] = React.useState(props?.value ?? '');

    const formSubmit =(e)=> {

        e.preventDefault();
        console.log(input.toLowerCase());



        if (input.toLowerCase()===props.words[numOfTest].trans.toLowerCase() || input.toLowerCase()===props.words[numOfTest].trans2.toLowerCase())
        {
            console.log("r");
            document.getElementById("submitButton").classList.add("rightAnswer");
            document.getElementById("submitButton").classList.remove("wrongAnswer");
            document.getElementsByClassName("page")[0].classList.add("rightAnswerBg");

            
            if (!(numOfTest in answers)) {
                answers.push({
                    id:numOfTest,
                    answ: "r",
                })
                setAnsw(answers);
            }
            console.log(answers);

        }
        else {
            console.log("w");
            document.getElementById("submitButton").classList.add("wrongAnswer");
            
            document.getElementsByClassName("page")[0].classList.add("wrongAnswerBg");


            
            if (!(numOfTest in answers)) {
                answers.push({
                    id:numOfTest,
                    answ: "w",
                })
                setAnsw(answers);
            }
            console.log(answers);

        }

    }
           
    const Results = () =>{
        let r=0;
        for(let i=0; i<answers.length; i++){
            if (answers[i].answ==="r") r++;
        }
        return r +"/"+ answers.length
    }   

        if (testState){
        return(
            <div className="page">
            <h1>Тест {Number(numOfTest +1) +"/"+ props.words.length}</h1>
            <div className="testVocabPage">
                <div>
                    <div onClick={Prev} className={Number(numOfTest)===0 ? "arrowLeftTest hidden" : "arrowLeftTest"}>
                        <img src="arrowLeft.png" alt="arrow_left_button"/>
                    </div>
                </div>
                
                <div className="testVocab">
                    <div className="testPict">
                        <img src={props.words[numOfTest].pict} alt="test_pict"/>
                        {props.words[numOfTest].char} <br/> <br/> {props.words[numOfTest].phen}
                    </div>
                    <div className="testVariants">

                        <form onSubmit={formSubmit}>

                        <div className="inputTest">
                            <input  type="text" id="test1" placeholder="Напишите перевод" value={input} onInput={e => setInput(e.target.value)}/>
                            
                            <div id="submitButton" >
                                <button className="button"  type="submit">Ответить</button> 
                            </div>
                            </div>

                        </form>
                    </div>

                    </div>
                <div>
                    <div onClick={Next} className="arrowRightTest">
                        <img src="arrowRight.png" alt="arrow_right_button"/>
                    </div>
                    <div className="grammTestButton hidden" id="endTest">
                        <button className="button" onClick={EndTest}>Завершить тест</button> 
                    </div>
                </div>

            </div>
            </div>

        )
    }

    return (
        <div className="page">
            <h1>Тест</h1>

            <div className="endOfTest">
                Тест пройден!
            </div>

            <div className = "results">
                Вы набрали <Results/> баллов! <a href={props.links.testVocab}> Пройти еще раз? </a>

            </div>
            <div className="testResults">
            <a href={props.links.grammar}><button className="button" >Перейти к изучению грамматики</button> </a>
            </div>
            <div className="testResults">
            <a href={props.links.location}><button className="button" >Вернуться к категориям слов</button> </a>
            </div>
            

        </div>
    )
    
}

export default TestVocabWrite;