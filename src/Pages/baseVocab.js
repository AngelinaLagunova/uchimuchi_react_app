import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';
import { fetchWords, fetchWordById } from '../api.js';
import './baseVocab.css';


const BaseVocab = (props) => {
    const [words, setWords] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [selectedWord, setSelectedWord] = useState(null);
    const [modalIsOpen, setModalIsOpen] = useState(false);

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
    };

    const gifSet = (num) => {
        if (!props.gifs || !props.gifs[num]) {
            return null;
        }
        return props.gifs[num].map((item, index) => (
            <img src={item} key={index} alt="animation_of_hieroglyph" />
        ));
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
           
                <div className="Gifs">
                    {gifSet(selectedWord?.id + 1)}
                </div>
                
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