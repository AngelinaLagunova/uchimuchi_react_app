import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';
import { fetchWords } from '../api.js';
import './baseVocab.css';


const BaseVocab = (props) => {
    const [words, setWords] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [selectedWord, setSelectedWord] = useState(null);
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [numOfGif, setNum] = React.useState(0);


    useEffect(() => {
        const getWords = async () => {
            try {
                const data = await fetchWords();
                setWords(data);
            } catch (error) {
                setError('Не удалось загрузить слова');
            } finally {
                setLoading(false);
            }
        };
        getWords();
    }, []);


    if (loading) return <div>Загрузка...</div>;
    if (error) return <div>{error}</div>;

    const openModel = async (word) => {
        setSelectedWord(word);
        console.log(selectedWord);
        setModalIsOpen(true);
    }



    const closeModal = () => {
        setModalIsOpen(false);
        setNum(0);
    };

    //перелистывание на следующую карточку
    const nextGif = (event) =>{
        if (numOfGif < props.gifs[selectedWord?.id - 1].length - 1){
            setNum(numOfGif + 1);
        }
        //контроль исчезновения правой стрелочки появления кнопки "пройти тест"
        else {
            document.getElementsByClassName("miniarrowRight")[0].classList.add("hidden");
        }
        //контроль появления левой стрелочки
        if (numOfGif > -1) {
            document.getElementsByClassName("miniarrowLeft")[0].classList.remove("hidden");
        }

    }
  
    const prevGif = (event) => {
        if (numOfGif > 0) {
            setNum((numOfGif - 1));
        }
        // контроль исчезновения левой стрелочки 
        if (numOfGif < 2){ 
            document.getElementsByClassName("miniarrowLeft")[0].classList.add("hidden");
        }
        if (numOfGif === props.gifs[selectedWord?.id - 1].length - 1){
            document.getElementsByClassName("miniarrowRight")[0].classList.remove("hidden");
        }
        
    }

    const gifSet = (num) => {
        if (!props.gifs || !props.gifs[num]) {
            return null;
        }
        return (
            <div className="ScrollGifs">

                <div>
                    <div onClick={prevGif} className="miniarrowLeft hidden">
                        <img src="arrowLeft.png" alt="arrow_left_button"/>
                    </div>
                </div>

                    <div className="Gifs">
                        <img src={props.gifs[num][numOfGif]} key={numOfGif} alt="animation_of_hieroglyph" />
                    </div>

                <div>
                    <div onClick={nextGif} className={props.gifs[num].length > 1 ? "miniarrowRight" : "hidden"}>
                        <img src="arrowRight.png" alt="arrow_right_button"/>
                    </div>
                </div>

            </div>
            
        );
    };

    const modalContent = (
        <div>
          <div className="closeModal" onClick={closeModal}></div>
          <div>
            <div className="ModalCardImg">
                <img src="sound.png" alt="sound"/>
                <div title="Пиньинь">{selectedWord?.phen}</div>
                <img src="star2.png" alt="star"/>
            </div>

            {gifSet(selectedWord?.id - 1)}
                
          </div>
        
        </div>
      );

    




    const list = words.map(word => (<p key={"word" + word.id} className="base_vocab_list" onClick={() => openModel(word)}> <span key={"char" + word.id}>{word.char}</span> <span key={"phen" + word.id}>{word.phen}</span> - <span key={"trans" + word.id}>{word.trans}</span> <button className="clictBaseWord" onClick={() => openModel(word)} id={"word" + word.id} key="click">подробнее</button></p>))

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
    );
}


export default BaseVocab