// import './game1.css';
// import React, { useEffect } from 'react';
// import { DndProvider } from 'react-dnd';
// import { HTML5Backend } from 'react-dnd-html5-backend';

// import { useDrag } from 'react-dnd';
// import { useDrop } from 'react-dnd';




// const DropZone = ({ onDrop }) => {
//     const [{ isOver }, drop] = useDrop(() => ({
//         accept: 'item',
//         drop: (item) => onDrop(item),
//         collect: (monitor) => ({
//             isOver: monitor.isOver(),
//         }),
//     }));

//     return (
//         <div ref={drop} className="DropZone" style={{border: `1px dashed ${isOver ? 'green' : 'black'}`}}>
//             Перетаскивайте <br/>
//             блоки сюда
//         </div>
//     );
// };


// const DragItem = ({ name }) => {
//     const [{ isDragging }, drag] = useDrag(() => ({
//         type: 'item',
//         item: { name },
//         collect: (monitor) => {
//             const item = monitor.getItem();
//             if (item) {
//                 // Выводим элемент в консоль во время перетаскивания
//                 console.log('Currently dragging:', item);
//             }
//             return {
//                 isDragging: monitor.isDragging(),
//             };
//         },
//     }));

//     return (
//         <div ref={drag} className="DragItem" style={{ opacity: isDragging ? 0.5 : 1 }}>
//             {name}
//         </div>
//     );
// };


const Game1 = (props) => {
    // const [droppedItems, setDroppedItems] = React.useState([]);

    // const handleDrop = (item) => {
    //     console.log(item);
    //     setDroppedItems((prevItems) => {
    //         const newItems = [...prevItems, item];
    //         console.log(newItems);  // Это будет выводить обновленный массив
    //         return newItems;
    //     });
    // };

    // const handleRemoveItem = (index) => {
    //     const updatedItems = [...droppedItems];
    //     updatedItems.splice(index, 1);
    //     setDroppedItems(updatedItems);
    //     console.log(updatedItems);
    // };

    // const [numOfTest, setTestNum] = React.useState(0);

    // const Next =(event)=>{

    //     if (numOfTest < props.list.length - 1){
    //         setDroppedItems([]);
    //         setTestNum(numOfTest + 1);
    //     }
    //     else {
    //         document.getElementsByClassName("arrowRightTest")[0].classList.add("hidden");

    //     }
        

        
    // }
    
    // const Prev =(event)=>{
    //     if (numOfTest > 0) {
    //         setTestNum((numOfTest - 1));
    //         setDroppedItems([]);

    //     }
    //     else {
    //         document.getElementsByClassName("arrowLeftTest")[0].classList.add("hidden");

    //     }
    //     if (numOfTest === props.list.length - 1){
    //         document.getElementsByClassName("arrowRightTest")[0].classList.remove("hidden");
    //     }


    // }

    // useEffect(() => {
    //     console.log('Current level index (num):', numOfTest);
    //     console.log('Current list items:', props.list[numOfTest][0]);
    // }, [numOfTest]); 

    // useEffect(() => {
    //     setDroppedItems([]); // При каждом обновлении уровня очищаем droppedItems
    // }, [numOfTest]); 

    // const GameField = (num) => {
        

        // return(
            
                // <div className="GameFrame">

                //     <div>
                //         <div onClick={Prev} className={Number(num)===0 ? "arrowLeftTest hidden" : "arrowLeftTest"}>
                //             <img src="arrowLeft.png" alt="arrow_left_button"/>
                //         </div>
                //     </div>
                //     <div>

                //         <h1>"{props.list[num][2]}"</h1>

                //         <div className="Game1page">
                //             <div style={{padding: '0.5vw'}}>
                //                 <h2>Переведите предложение. Расположите слова в правильном порядке</h2>
                //                 <div className="TestDrag">
                //                     {props.list[num][0].map((i, index) => (
                //                         <DragItem key={index} name={i} />
                //                     ))}
                //                 </div>
                //             </div>

                //             <div className="Drop">
                //                 <DropZone onDrop={handleDrop} />

                //                 {droppedItems.map((i, index) => (
                //                     <div className="DropElement"
                //                         key={i.name}>
                //                         <p style={{margin:'0px'}}>{i.name}</p>
                //                         <button className="clictDeleteBlock" onClick={
                //                             () => handleRemoveItem(index)}>
                //                             Удалить
                //                         </button>
                //                     </div>
                //                 ))}
                                
                //             </div>
                //         </div>

                //     </div>

                //     <div>
                //         <div onClick={Next} className="arrowRightTest">
                //             <img src="arrowRight.png" alt="arrow_right_button"/>
                //         </div>
                //     </div>

                // </div>
    //     )
    // }


    return (
        <div className="page">
            <h1>
                Игры
            </h1>

            {/* <DndProvider  backend={HTML5Backend}>
                {GameField(numOfTest)}      

            </DndProvider> */}
            <h2>Пока в стадии разработки</h2>
            
            

            
        </div>
    );
};

export default Game1;

