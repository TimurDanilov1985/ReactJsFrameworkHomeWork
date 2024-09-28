import React, { useState } from 'react';
import './style.css';
import { useDispatch } from "react-redux";
import { changeTheme } from '../../store/themeReducer';
import { useSelector } from "react-redux";

function Theme() {

    const dark = { background: 'black', color: 'white', haight: '100vh' };
    const light = { background: 'white', color: 'black' };

    const [theme, setTheme] = useState(dark);

    const dispatch = useDispatch();
    const { style } = useSelector((state) => state.style);

    function themeChange() {
        if (Object.keys(theme).length === 2) {
            setTheme(dark);
        } else {
            setTheme(light);
        }
        dispatch(changeTheme(theme));
    }

    return (
        <div className='component center' style={style}>
            <div className='head'>
                <h1 className='head__text'>Домашняя работа</h1>
            </div>
            <div className='button'>
                <button className='button__btn' onClick={themeChange}>Сменить тему</button>
            </div>
            <div>
                <p className='text'>
                    <span className='text__bold'>Урок 5. Компоненты высшего порядка знакомство с Redux</span><br /><br />
                    <span className='text__bold'>Приложение для переключения темы сайта</span><br />
                    Создать приложение, позволяющее пользователю переключать между светлой и темной темой сайта.<br /><br />
                    <span className='text__bold'>Функционал:</span><br /><br />
                    <span className='text__bold'>Action types:</span> TOGGLE_THEME.<br />
                    <span className='text__bold'>Actions:</span> Создайте действие для переключения темы.<br />
                    <span className='text__bold'>Reducer:</span> Реализуйте редьюсер, который обрабатывает это действие и изменяет тему в состоянии приложения.<br />
                    <span className='text__bold'>Component:</span> Создайте компонент, который отображает переключатель для изменения темы сайта.<br /><br /><br />
                    <span className='text__bold'>Описание:</span><br /><br />
                    <span className='text__bold'>Состояние:</span> Для хранения текущей темы можно использовать логическую переменную (true для темной темы и false для светлой) или<br />
                    строку ("dark" или "light").<br /><br />
                    <span className='text__bold'>Интерфейс:</span> Ваш интерфейс может состоять из переключателя, который изменяет тему с светлой на темную и обратно.
                </p>
            </div>
        </div>
    )
}

export default Theme;