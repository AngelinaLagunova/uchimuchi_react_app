import React, { useState } from 'react';
import Modal from 'react-modal';

import './baseVocab.css';

const BaseVocab = (props) => {
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const [index, setIndex] = useState(0);

    const openModal = (event) => {
        setModalIsOpen(true);
        if (!isNaN(event.target.id[4])){
            setIndex(event.target.id[4]);
        }
        else if (!isNaN(event.target.parentNode.id[4])){
            setIndex(event.target.parentNode.id[4]);
        }
    };

    const closeModal = () => {
        setModalIsOpen(false);
    };

    const gifSet = (num) =>  props.gifs[num].map((item, index) =>
        <img src={item} className="zoom-effect2" alt="animation_of_hieroglyph"/>
    ) 

    const modalContent = (
        <div>
          <div className="closeModal" onClick={closeModal}></div>
          <dev>
            <div className="ModalCardImg">
                <img src="sound.png" alt="sound"/>
                <div className="Gifs">
                    {gifSet(index)}
                </div>
                <img src="star2.png" alt="star"/>
            </div>
            <div className="ModalCardText">
                <p>Слово: <b><big>{props.list[index].char}</big></b></p>
                <p>Пиньинь: {props.list[index].phen}</p>
                <p>Перевод: {props.list[index].trans}</p>
            </div>
          
          </dev>
          {/* <button onClick={closeModal}>Закрыть</button> */}
        </div>
      );

    const list = props.list.map((item, index) => <p id={"word" + index} key={"word" + index} onClick={openModal} className="base_vocab_list"> <span key={"char" + index}>{item.char}</span> <span key={"phen" + index}>{item.phen}</span> - <span key={"trans" + index}>{item.trans}</span> <button className="clictBaseWord" onClick={openModal} key="click">подробнее</button></p>);


    return (
        <div className="page">
            <h1>Базовый словарь 基础词 jīchǔ cí</h1>
            <div>
                <Modal className = "Modal" isOpen={modalIsOpen} onRequestClose={closeModal}>
                {modalContent}
                </Modal>
            </div>
            {list}

        </div>
    )
}

export default BaseVocab