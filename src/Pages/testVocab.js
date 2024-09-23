import "./testVocab.css";
import React from 'react';

const TestVocab =(props) =>{

    const [numOfTest, setTestNum] = React.useState(0);


    return(
        <div className="page">
            <h1>Тест 1/5</h1>
            <div className="testVocabPage">
                <div>
                    <div className="arrowLeftTest">
                        <img src="arrowLeft.png" alt="arrow_left_button"/>
                    </div>
                </div>
                
                <div className="testVocab">
                    <div className="testPict">
                        <img src={props.words[numOfTest].pict} alt="test_pict"/>
                        {props.words[numOfTest].char} <br/> <br/> {props.words[numOfTest].phen}
                    </div>
                    <div className="testVariants">
                        <div className = "checkTestSetting" >
                            <img id="0test" src="checkTest.png" alt="first_radio_button"/>
                            <p>{props.words[numOfTest].trans}</p>
                        </div>

                        <div className = "checkTestSetting" >
                            <img id="1test" src="uncheckTest.png" alt="first_radio_button"/>
                            <p>{props.words[numOfTest].trans}</p>
                        </div>

                        <div className = "checkTestSetting" >
                            <img id="2test" src="uncheckTest.png" alt="first_radio_button"/>
                            <p>{props.words[numOfTest].trans}</p>
                        </div>
                        
                       
                    </div>
                    <button className="button">Ответить</button>

                </div>
                <div>
                    <div className="arrowRightTest">
                        <img src="arrowRight.png" alt="arrow_right_button"/>
                    </div>
                </div>

            </div>
        </div>

    )
}

export default TestVocab;