// src/api.js
import axios from 'axios';

const API_URL = 'http://uchimuchi.ru:8000/api/v1/basevocabs/';

export const fetchWords = async () => {
    try {
        const response = await axios.get(API_URL);
        return response.data;
    } catch (error) {
        console.error('Ошибка при получении данных:', error);
        throw error;
    }
};

// Функция для получения слова по pk
export const fetchWordById = async (id) => {
    try {
        const response = await axios.get(`${API_URL}${id}/`);  // Используем `${API_URL}${id}/` для конкретного слова
        return response.data;
    } catch (error) {
        console.error('Ошибка при получении слова:', error);
        throw error;
    }
};