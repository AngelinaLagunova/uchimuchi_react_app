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
        <div ref={drop} className="DropZone" style={{border: `1px dashed ${isOver ? 'green' : 'black'}`}}>
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
        <div ref={drag} className="DragItem" style={{ opacity: isDragging ? 0.5 : 1 }}>
            {name}
        </div>
    );
};


const Game1 = () => {
    const [droppedItems, setDroppedItems] = useState([]);

    const handleDrop = (item) => {
        setDroppedItems((prevItems) => [...prevItems, item]);
        console.log(droppedItems);
    };

    const handleRemoveItem = (index) => {
        const updatedItems = [...droppedItems];
        updatedItems.splice(index, 1);
        setDroppedItems(updatedItems);
        console.log(updatedItems);
    };

    return (
        <div className="page">
            <h1>
                Игры
            </h1>

            <DndProvider  backend={HTML5Backend}>
                <div className="GameFrame">
                        <h1>"Это блюдо - вонючий тофу"</h1>
                        <div className="Game1page">

                            <div style={{padding: '0.5vw'}}>
                                <h2>Переведите предложение. Расположите слова в правильном порядке</h2>
                                <div className="TestDrag">
                                    <DragItem name="这个菜" />
                                    <DragItem name="是" />
                                    <DragItem name="臭豆腐" />
                                </div>
                            </div>

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
            </DndProvider>
        </div>
    );
};

export default Game1;
