import React, { useState } from 'react';
import Modal from 'react-modal';

import './baseVocab.css';

const BaseVocab = (props) => {
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const [index, setIndex] = useState(0);

    const openModal = (event) => {
        setModalIsOpen(true);
        let str_index = String(event.target.id);
        setIndex(Number(str_index.substring(4)));
        
        // if (!isNaN(event.target.id[0])){
        //     console.log(event.target.id);
        //     setIndex(event.target.id.substring(4));
        // }
        // else if (!isNaN(event.target.parentNode.id[0])){
        //     console.log(event.target.parentNode.id[0]);
        //     setIndex(event.target.parentNode.id[4]);
        // }
    };

    const closeModal = () => {
        setModalIsOpen(false);
    };

    const gifSet = (num) =>  props.gifs[num].map((item, index) =>
        <img src={item} key={index} alt="animation_of_hieroglyph"/>
    ) 

    const modalContent = (
        <div>
          <div className="closeModal" onClick={closeModal}></div>
          <div>
            <div className="ModalCardImg">
                <img src="sound.png" alt="sound"/>
                <p title="Пиньинь" className="ModalCardText">{props.list[index].phen}</p>
                <img src="star2.png" alt="star"/>
            </div>
            {/* <div className="ModalCardImg"> */}
                <div className="Gifs">
                    {gifSet(index)}
                </div>
                {/* <p>Слово: <b><big>{props.list[index].char}</big></b></p>
                
                <p>Перевод: {props.list[index].trans}</p> */}
            {/* </div> */}
          
          </div>
          {/* <button onClick={closeModal}>Закрыть</button> */}
        </div>
      );

    const list = props.list.map((item, index) => <p key={"word" + index} className="base_vocab_list"> <span key={"char" + index}>{item.char}</span> <span key={"phen" + index}>{item.phen}</span> - <span key={"trans" + index}>{item.trans}</span> <button className="clictBaseWord" onClick={openModal} id={"word" + index} key="click">подробнее</button></p>);


    return (
        <div className="page">
            <h1>Базовый словарь 基础词 jīchǔ cí</h1>
            <div>
                <Modal className = "Modal" isOpen={modalIsOpen} ariaHideApp={false} onRequestClose={closeModal}>
                {modalContent}
                </Modal>
            </div>
            {list}

        </div>
    )
}

export default BaseVocab