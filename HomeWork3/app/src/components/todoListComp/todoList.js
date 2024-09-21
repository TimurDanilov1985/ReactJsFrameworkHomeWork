// Задание 2: Список дел с Material UI

// Цель: Разработать компонент TodoList для управления задачами: добавление, отображение, и удаление задач.

// Компоненты:
// Используйте TextField для ввода новой задачи.
// Добавьте Button для добавления задачи в список.
// Для каждой задачи в списке используйте Card или ListItem из Material UI. Внутри каждого элемента списка разместите текст задачи и IconButton с иконкой удаления (например, DeleteIcon).

// Логика:
// При нажатии на кнопку добавления, новая задача должна добавляться в список.
// Рядом с каждой задачей должна быть кнопка для её удаления.

import * as React from 'react';
import './style.css';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import { useState } from 'react';

function TodoList() {

    const [text, setText] = useState('');
    const [arrayTodo, setArrayTodo] = useState([{ id: 1, text: "Задание 1" }, { id: 2, text: "Задание 2" }]);

    function addText(event) {
        setText(event.target.value);
    }

    function addTask() {
        if (text !== '') {
            let task = {};
            let id = 1;
            let array = [];
            let newArray = [];
            if (arrayTodo.length !== 0) {
                task.id = arrayTodo[arrayTodo.length - 1].id + 1;
            } else {
                task.id = id;
            }
            task.text = text;
            array.push(task);
            newArray = [...arrayTodo, ...array];
            setArrayTodo(newArray);
        }
    }

    function deletTask(id) {
        let newArray = arrayTodo.filter((element) => element.id !== id);
        setArrayTodo(newArray);
    }

    return (
        <div className='todo'>

            <div className='todo__name'>
                <h3>Список дел</h3>
            </div>

            <div className='todo__input'>
                <TextField className='todo__input__field' id="outlined-basic" label="Введите текст задания" variant="outlined" value={text} onChange={addText} />
                <div className='todo__input__button'>
                    <Button variant="outlined" onClick={addTask}>Добавить задание</Button>
                </div>
            </div>

            <div className='todo__list'>
                {arrayTodo.map((task) =>
                    <Card key={task.id} className='todo__list__card' variant="outlined"><React.Fragment>
                        <CardContent>
                            <p className='todo__list__card__text'>{task.text}</p>
                        </CardContent>
                        <CardActions>
                            <Button size="small" onClick={() => deletTask(task.id)}>Удалить задание</Button>
                        </CardActions>
                    </React.Fragment></Card>
                )}
            </div>

        </div>
    );
}

export default TodoList;