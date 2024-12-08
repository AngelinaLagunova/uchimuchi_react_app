import './game1.css';

import React, { useState } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

import { useDrag } from 'react-dnd';
import { useDrop } from 'react-dnd';

const DropZone = ({ onDrop }) => {
    const [{ isOver }, drop] = useDrop(() => ({
        accept: 'item',
        drop: (item) => onDrop(item),
        collect: (monitor) => ({
            isOver: monitor.isOver(),
        }),
    }));

    return (
        <div
            ref={drop}
            style={{
                border: `1px dashed ${isOver ? 'green' : 'black'}`,
                padding: '10px',
            }}>
            Перетаскивайте <br/>
            блоки сюда
        </div>
    );
};


const DragItem = ({ name }) => {
    const [{ isDragging }, drag] = useDrag(() => ({
        type: 'item',
        item: { name },
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
        }),
    }));

    return (
        <div 
            ref={drag}
            style={{
                opacity: isDragging ? 0.5 : 1,
                cursor: 'move',
                border: '1px solid #ccc',
                padding: '10px',
                borderRadius: '5px',
                margin: '5px',
                backgroundColor: '#b5f4e1',
                
            }}>
            {name}
        </div>
    );
};


const Game1 = () => {
    const [droppedItems, setDroppedItems] = useState([]);

    const handleDrop = (item) => {
        setDroppedItems((prevItems) => [...prevItems, item]);
    };

    const handleRemoveItem = (index) => {
        const updatedItems = [...droppedItems];
        updatedItems.splice(index, 1);
        setDroppedItems(updatedItems);
    };

    return (
        <div className="page">
            <h1>
                Игры
            </h1>
        <DndProvider  backend={HTML5Backend}>
            <div style={{
                // display: 'flex',
                // justifyContent: 'center',
                // alignItems: 'center',
                // height: '100vh',
                width: '70vw',
                margin: '4vw 0vw',
            }}>
                <div style={{
                    border: '1px solid #ccc',
                    padding: '0.5vw',
                    borderRadius: '5px'
                }}>
                    <h1>Это блюдо - вонючий тофу</h1>
                    <div className="Game1page">
                        <div style={{
                            border: '1px solid #ccc',
                            padding: '0.5vw', borderRadius: '5px'
                        }}>
                            <h2>Блоки</h2>
                            <div className="TestDrag">
                                <DragItem name="这个菜" />
                                <DragItem name="是" />
                                <DragItem name="臭豆腐" />
                            </div>
                        </div>
                        <div  style={{
                            border: '1px solid #ccc',
                            padding: '0.5vw', borderRadius: '5px'
                        }}>
                            <h2>Поставьте блоки так, как они должны быть в предложении</h2>
                            <div className="Drop">
                            <DropZone onDrop={handleDrop} />
                            {droppedItems.map((item, index) => (
                                <div className="DropElement"
                                    key={index}>
                                    <p style={{margin:'0px'}}>{item.name}</p>
                                    <button className="clictDeleteBlock" onClick={
                                        () => handleRemoveItem(index)}>
                                        Удалить
                                    </button>
                                </div>
                            ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </DndProvider>
        </div>
    );
};

export default Game1;
