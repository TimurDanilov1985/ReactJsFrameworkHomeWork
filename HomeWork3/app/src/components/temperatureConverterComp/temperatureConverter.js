// Задание 1: Температурный конвертер с Material UI

// Цель: Создать компонент TemperatureConverter, используя компоненты TextField и Button из Material UI для ввода и отображения температур в градусах Цельсия и Фаренгейта.

// Компоненты:
// Используйте TextField для ввода значения температуры.
// Добавьте лейблы к каждому TextField, указывая единицы измерения (Цельсия и Фаренгейта).

// Логика:
// При вводе значения в одно поле, автоматически конвертируйте его и отобразите в другом.
// Реализуйте конвертацию температур в обоих направлениях.

import './style.css'
import * as React from 'react';
import TextField from '@mui/material/TextField';
import { useState, useEffect } from "react";
import Button from '@mui/material/Button';

function TemperatureConverter() {

    const [celsius, setCelsius] = useState(0);
    const [fahrenheit, setFahrenheit] = useState(32);
    const [logic, setLogic] = useState(0);
    const [logic1, setLogic1] = useState(0);
    const [fieldC, setFieldC] = useState(
        <div className='converter__block__input'>
            <TextField id="standard-basic" label="градусы по Цельсию" variant="standard" type='number' onFocus={focusCels} onChange={cels} value={celsius} />
        </div>);
    const [fieldF, setFieldF] = useState(
        <div className='converter__block__input'>
            <TextField id="standard-basic" label="градусы по Фаренгейту" variant="standard" type='number' onFocus={focusFahr} onChange={fahr} value={fahrenheit} />
        </div>);

    function change() {
        if (logic1 === 1) {
            setFieldC(
                <div className='converter__block__input'>
                    <TextField id="standard-basic" label="градусы по Фаренгейту" variant="standard" type='number' onFocus={focusFahr} onChange={fahr} value={fahrenheit} />
                </div>);
            setFieldF(
                <div className='converter__block__input'>
                    <TextField id="standard-basic" label="градусы по Цельсию" variant="standard" type='number' onFocus={focusCels} onChange={cels} value={celsius} />
                </div>);
        } else {
            setFieldC(
                <div className='converter__block__input'>
                    <TextField id="standard-basic" label="градусы по Цельсию" variant="standard" type='number' onFocus={focusCels} onChange={cels} value={celsius} />
                </div>);
            setFieldF(
                <div className='converter__block__input'>
                    <TextField id="standard-basic" label="градусы по Фаренгейту" variant="standard" type='number' onFocus={focusFahr} onChange={fahr} value={fahrenheit} />
                </div>
            );
        }
    }

    useEffect(() => {
        change();
    })

    function logicChange() {
        if (logic1 === 1) {
            setLogic1(0);
        } else {
            setLogic1(1);
        }
    }

    useEffect(() => {
        convertCelsiusToFahrenheit();
    });

    useEffect(() => {
        convertFahrenheitToCelsius();
    });

    function focusCels() {
        setLogic(0);
    }

    function focusFahr() {
        setLogic(1);
    }

    function cels(event) {
        setCelsius(event.target.value);
    }

    function fahr(event) {
        setFahrenheit(event.target.value);
    }

    function convertCelsiusToFahrenheit() {
        if (logic === 0) {
            setFahrenheit(1.8 * celsius + 32);
        }
    }

    function convertFahrenheitToCelsius() {
        if (logic === 1) {
            setCelsius((fahrenheit - 32) / 1.8);
        }
    }

    return (
        <div>

            <div className='converter'>

                <div className='converter__name'>
                    <h2>Температурный конвертер</h2>
                </div>

                <div className='converter__block'>

                    {fieldC}

                    <div>
                        <Button variant="contained" onClick={logicChange}>Поменять</Button>
                    </div>

                    {fieldF}

                </div>

            </div>

        </div>
    );
}

export default TemperatureConverter;