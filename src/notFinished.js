import React, { useState, useEffect } from 'react';
import axios from 'axios';

const API_URL = 'ваш_API_URL'; // Замените на ваш URL

const WordList = (props) => {
    const [words, setWords] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [searchQuery, setSearchQuery] = useState('');
    const [copyPopup, setCopyPopup] = useState({ visible: false, text: '' }); // состояние для всплывающего окна

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

    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
    };

    const filteredWords = words.filter(word => {
        const lowerCaseQuery = searchQuery.toLowerCase();
        return (
            word.hieroglyph.toLowerCase().includes(lowerCaseQuery) ||
            word.transcription.toLowerCase().includes(lowerCaseQuery) ||
            word.translation.toLowerCase().includes(lowerCaseQuery)
        );
    });

    const copyToClipboard = (text) => {
        navigator.clipboard.writeText(text).then(() => {
            setCopyPopup({ visible: true, text });
            setTimeout(() => {
                setCopyPopup({ visible: false, text: '' });
            }, 2000); // Скрыть всплывающее окно через 2 секунды
        });
    };

    if (loading) return <div>Загрузка...</div>;
    if (error) return <div>{error}</div>;

    return (
        <div>
            <input
                type="text"
                placeholder="Поиск по словам..."
                value={searchQuery}
                onChange={handleSearchChange}
            />
            <ul>
                {filteredWords.map((word, index) => (
                    <li key={index}>
                        <span 
                            onMouseEnter={() => setCopyPopup({ visible: false })} // скрыть перед новым наведением
                            onClick={() => copyToClipboard(word.hieroglyph)}
                            style={{ cursor: 'pointer' }}
                        >
                            {word.hieroglyph}
                        </span>
                        <span 
                            onMouseEnter={() => setCopyPopup({ visible: false })}
                            onClick={() => copyToClipboard(word.transcription)}
                            style={{ cursor: 'pointer', marginLeft: '10px' }}
                        >
                            {word.transcription}
                        </span>
                        <span 
                            onMouseEnter={() => setCopyPopup({ visible: false })}
                            onClick={() => copyToClipboard(word.translation)}
                            style={{ cursor: 'pointer', marginLeft: '10px' }}
                        >
                            {word.translation}
                        </span>
                    </li>
                ))}
            </ul>
            {copyPopup.visible && (
                <div style={{ position: 'absolute', background: '#eee', border: '1px solid #ccc', padding: '5px' }}>
                    Текст скопирован: {copyPopup.text}
                </div>
            )}
        </div>
    );
};

export default WordList;