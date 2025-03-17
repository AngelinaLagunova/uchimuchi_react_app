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
        ref={drag}
        style={{
          opacity: isDragging ? 0.5 : 1,
          padding: '8px',
          border: '1px solid #ccc',
          marginBottom: '4px',
          display: 'inline-block',
        }}
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
            if (droppedWords[russianWord])
                console.log(droppedWords[russianWord].length);
        } else {
            // Если в области уже есть слово, игнорируем новую попытку
            console.log(`В этой области уже есть слово: ${droppedWords[0]}`);
        }
    },
    collect: (monitor) => ({ isOver: !!monitor.isOver() }),
    }));

    const handleRemove = (chineseWord) => {
        setDroppedWords((prev) => ({
            ...prev,
            [russianWord]: prev[russianWord].filter(word => word !== chineseWord),
        }));
    };
  
    const isCorrect = checkResult[russianWord];
  
    const backgroundColor = isCorrect === true 
      ? 'lightgreen' 
      : isCorrect === false 
      ? 'lightcoral' 
      : isOver ? 'lightyellow' : 'transparent';
  
    return (
      <div
        ref={drop}
        style={{
          padding: '16px',
          border: '1px dashed #333',
          backgroundColor,
          marginBottom: '8px',
        }}
      >
        <strong>{russianWord}</strong>
        <div>
          {droppedWords.map((word, index) => (
            <div key={index} style={{ marginTop: '8px' }}>
              {word}
              <button onClick={() => handleRemove(word)} style={{ marginLeft: '8px' }}>
                            Удалить
                        </button>
            </div>
          ))}
        </div>
      </div>
    );
  };

  

  

// Основной компонент игры
const Game2 = () => {
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
  

  return (
    <div className="page">
            <h1>Игра "Найди перевод слова"</h1>
            <DndProvider backend={HTML5Backend}>
      <div style={{ display: 'flex', justifyContent: 'space-between', width: '600px', margin: 'auto' }}>
        <div style={{ flex: 1 }}>
          <h3>Русские слова</h3>
          {words.map((word) => (
            <div key={word.id} style={{ marginBottom: '8px' }}>
              {word.russian}
            </div>
          ))}
        </div>
        <div style={{ flex: 1 }}>
          <h3>Drop зоны</h3>
          {words.map((word) => (
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
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
        <h3>Слова на китайском языке</h3>
        {words.map((word) => (
          <DraggableWord key={word.id} word={word} />
        ))}
      </div>
      <button onClick={handleCheck} style={{ display: 'block', margin: '20px auto' }}>Проверить</button>
    </DndProvider>
    </div>
  );
};

export default Game2;