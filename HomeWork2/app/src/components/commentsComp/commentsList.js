// Урок 2. State, Props. Жизненный цикл react компонента. Хуки
// Задание: Список комментариев с удалением.

// Цель: Комбинирование useState, рендеринга списков и обработки событий для создания интерактивного интерфейса.

// Задача:
// Создать компонент CommentsList, который отображает список комментариев. Каждый комментарий должен иметь кнопку для его удаления. При нажатии на кнопку комментарий должен удаляться из списка.

// Можно использовать заготовку:

// const [comments, setComments] = useState([
// { id: 1, text: "Это первый комментарий" },
// { id: 2, text: "Это второй комментарий" },
// { id: 3, text: "Это третий комментарий" }
// ]);

import './style.css';
import { useState } from "react";

function CommentsList() {

    const [comments, setComments] = useState([
        { id: 1, text: "Это первый комментарий" },
        { id: 2, text: "Это второй комментарий" },
        { id: 3, text: "Это третий комментарий" },
        { id: 4, text: "Это четвертый комментарий" },
        { id: 5, text: "Это пятый комментарий" }
    ]);

    function remov(event) {
        const id = Number(event.target.getAttribute('id'));
        let array = comments.filter((el) => el.id !== id);
        setComments(array);
    }

    return (
        <div>

            <div className="heading">
                <h2 className="heading__text">Список комментариев</h2>
            </div>

            <div className='list'>
                <ul className="list__ul">
                    {comments.map((comment) =>
                        <div className="list__block" key={comment.id}>
                            <li className="list__block__item">{comment.text}</li>
                            <button className="list__block__button" id={comment.id} onClick={remov}>Удалить комментарий</button>
                        </div>
                    )}
                </ul>
            </div>

        </div>
    );
}

export default CommentsList;