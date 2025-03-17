import './game2.css';
import React, { useState, useEffect } from 'react';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { DndProvider, useDrag, useDrop } from 'react-dnd';
// import { Link } from "react-router-dom";


// Тип для перетаскиваемого элемента
const ItemType = 'WORD';

// Список слов


const words = [
    { id: 1, russian: 'книга', chinese: '书' },
    { id: 2, russian: 'стол', chinese: '桌子' },
    { id: 3, russian: 'окно', chinese: '窗户' },
    { id: 4, russian: 'дверь', chinese: '门' },
    { id: 5, russian: 'книга2', chinese: '书2' },
    { id: 6, russian: 'стол2', chinese: '桌子2' },
    { id: 7, russian: 'окно2', chinese: '窗户2' },
    { id: 8, russian: 'дверь2', chinese: '门2' },
    { id: 9, russian: 'книга3', chinese: '书3' },
    { id: 10, russian: 'стол3', chinese: '桌子3' },
    { id: 11, russian: 'окно3', chinese: '窗户3' },
    { id: 12, russian: 'дверь3', chinese: '门3' },
  ];
  
  const DraggableWord = ({ word }) => {
    const [{ isDragging }, drag] = useDrag(() => ({
      type: ItemType,
      item: { id: word.id, chinese: word.chinese },
      collect: (monitor) => ({
        isDragging: !!monitor.isDragging(),
      }),
    }));
  
    return (
      <div
        ref={drag} className="DragObjectGame2"
      >
        {word.chinese}
      </div>
    );
  };
  
  const DropArea = ({ russianWord, onDrop, droppedWords, setDroppedWords, checkResult }) => {
    const [{ isOver }, drop] = useDrop(() => ({
      accept: ItemType,
      drop: (item) => {
        // Проверяем, есть ли уже слово в этой области
        if ((!droppedWords[russianWord] || droppedWords[russianWord].length === 0) ) {
            onDrop(item);
        } else {
            // Если в области уже есть слово, игнорируем новую попытку
            console.log(`В этой области уже есть слово: ${droppedWords[0]}`);
        }
    },
    collect: (monitor) => ({ isOver: !!monitor.isOver() }),
    }));

  
    const isCorrect = checkResult[russianWord];

  
    let backgroundColor = isCorrect === true 
        ? 'lightgreen' 
        : isCorrect === false 
        ? 'lightcoral'
        : isOver ? 'lightyellow' : 'transparent';

    const handleRemove = (chineseWord) => {
        setDroppedWords((prev) => ({
            ...prev,
            [russianWord]: prev[russianWord].filter(word => word !== chineseWord),
        }));
        

    };
  
    return (
      <div
        ref={drop}

        className="DropZoneGame2"
        style={{
          
            backgroundColor: backgroundColor,

        }}
      >
          {droppedWords.map((word, index) => (
            <div key={index} className="DropZoneGameElement2">
              {word}
              <button onClick={() => handleRemove(word)} style={{fontSize: "1vw", backgroundColor: "transparent", border:"1px solid transparent" }}>
                            Удалить
                        </button>
            </div>
          ))}
      </div>
    );
  };

  

  

// Основной компонент игры
const Game2 = () => {

    const [numOfTest, setTestNum] = React.useState(0);

    const Next =(event)=>{
        console.log(numOfTest);
        if (numOfTest <words.length/4 - 1){
            // setDroppedItems([]);
            // let DropZone = document.getElementById("DropZone");
            // DropZone.classList.remove("wrongDrop");
            // DropZone.innerHTML = "Перетаскивайте блоки сюда"
            setTestNum(numOfTest + 1);
            // document.getElementById("submitButton").classList.remove("wrongAnswer");
            // document.getElementById("submitButton").classList.remove("rightAnswer");
        }
        else if(numOfTest === words.length/4) {
            // document.getElementsByClassName("arrowRightTest")[0].classList.add("hidden");
            console.log("hi");
            setTestNum(numOfTest + 1);
        }
        else {
            // setTestState(false)
            // document.getElementsByClassName("page")[0].classList.remove("rightAnswerBg");
            // document.getElementsByClassName("page")[0].classList.remove("wrongAnswerBg");
            console.log("nehi");

        }
        // document.getElementsByClassName("page")[0].classList.remove("rightAnswerBg");
        // document.getElementsByClassName("page")[0].classList.remove("wrongAnswerBg");
        // setRightAnswer(false);

        
    }
    
    const Prev =(event)=>{
        if (numOfTest > 0) {
            setTestNum((numOfTest - 1));
            // setDroppedItems([]);
            // let DropZone = document.getElementById("DropZone");
            // DropZone.classList.remove("wrongDrop");
            // DropZone.innerHTML = "Перетаскивайте блоки сюда"
            // document.getElementById("submitButton").classList.remove("wrongAnswer");
            // document.getElementById("submitButton").classList.remove("rightAnswer");

        }
        else {
            document.getElementsByClassName("arrowLeftTest")[0].classList.add("hidden");

        }
        if (numOfTest === words.length - 1){
            document.getElementsByClassName("arrowRightTest")[0].classList.remove("hidden");
        }
        // document.getElementsByClassName("page")[0].classList.remove("rightAnswerBg");
        // document.getElementsByClassName("page")[0].classList.remove("wrongAnswerBg");
        // document.getElementById("submitButton").classList.remove("hidden");
        // document.getElementById("endButton").classList.add("hidden");
        // setRightAnswer(false);

    }

    const [droppedWords, setDroppedWords] = useState({});
    const [checkResult, setCheckResult] = useState({});
  
    const handleDrop = (item, russianWord) => {
        // Проверяем, существует ли ключ для russianWord
        if (!droppedWords[russianWord]) {
            // Если нет, инициализируем его как пустой массив
            setDroppedWords(prev => ({
                ...prev,
                [russianWord]: [item.chinese], // добавляем новое слово
            }));
        } else {
            // Если существует и длина равна 0, добавляем слово
            if (droppedWords[russianWord].length === 0) {
                setDroppedWords(prev => ({
                    ...prev,
                    [russianWord]: [item.chinese], // добавляем новое слово
                }));
            } else {
                console.log(`В этой области уже есть слово: ${droppedWords[russianWord][0]}`);
            }
        }
    };
  
    const handleCheck = () => {
      const results = {};
      words.forEach((word) => {
        const lastDroppedWord = droppedWords[word.russian]?.[droppedWords[word.russian].length - 1];
        results[word.russian] = lastDroppedWord === word.chinese ? true : false;
      });
      setCheckResult(results);
    };

    const GameField = (num) => {
        return(
            <div className="GameFrame2">
                <div>
                    <div onClick={Prev} className={Number(num)===0 ? "arrowLeftTest hidden" : "arrowLeftTest"}>
                        <img src="arrowLeft.png" alt="arrow_left_button"/>
                    </div>
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', width: '30vw', margin: 'auto' }}>
                    <div style={{ flex: 1 }}>
                        <h3 style={{fontSize:"2vw"}}>Слово</h3>
                         <div className="wordsColumnGame2">
                         {words.slice(num*4, (num + 1)*4).map((word) => (
                            <div className="wordsColumnElementGame2" key={word.id}>
                                {word.russian}
                            </div>
                        ))}
                        </div>
                    </div>
                    <div style={{ flex: 1 }}>
                        <h3 style={{fontSize:"2vw"}}>Перевод</h3>
                        <div className="transColumnGame2">
                        {words.slice(num*4, (num + 1)*4).map((word) => (
                            <DropArea
                            key={word.id}
                            russianWord={word.russian}
                            onDrop={(item) => handleDrop(item, word.russian)}
                            droppedWords={droppedWords[word.russian] || []}
                            setDroppedWords={setDroppedWords}
                            checkResult={checkResult}
                            />
                        ))}
                        </div>
                    </div>
                </div>

                <div>
                    <div onClick={Next} className="arrowRightTest">
                        <img src="arrowRight.png" alt="arrow_right_button"/>
                    </div>
                </div>

                <div></div>

                <div style={{textAlign: 'center', fontSize: '2vw'}}>
                    {/* <h3>Перетащите слово в соответствующее место</h3> */}
                    <br/>
                    <div className="DropListGame2">
                    {words.slice(num*4, (num + 1)*4).map((word) => (
                    <DraggableWord key={word.id} word={word}/>
                    ))}
                    </div>
                </div>

                <div></div>
                
                <div></div>
                <div className="game2SubmitButton">
                    <button onClick={handleCheck} className="button">Проверить</button>
                </div>
                <div></div>
            </div>
        )
    }
  

  return (
    <div className="page">
            <h1>Игра "Найди перевод слова"</h1>
            <DndProvider backend={HTML5Backend}>
                {GameField(numOfTest)}  
            </DndProvider>
    </div>
  );
};




export default Game2;