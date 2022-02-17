/* Задания на урок 1:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

/* Задания на урок 2:

1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
новый фильм добавляется в список. Страница не должна перезагружаться.
Новый фильм должен добавляться в movieDB.movies.
Для получения доступа к значению input - обращаемся к нему как input.value;
P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.

2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки

3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)

4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
"Добавляем любимый фильм"

5) Фильмы должны быть отсортированы по алфавиту */

'use strict';

document.addEventListener('DOMContentLoaded', () => {
    const movieDB = {
        movies: [
            "Логан",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против..."
        ]
    };

    const ads = document.querySelectorAll(".promo__adv img"),
        promoBg = document.querySelector('.promo__bg'),
        promoGenre = promoBg.querySelector('.promo__genre'),
        movieList = document.querySelector('.promo__interactive-list'),
        form = document.querySelector('form.add'),
        input = form.querySelector('.adding__input'),
        checkBox = form.querySelector('[type="checkbox"]'),

    const deleteAds = (arr) => {
        arr.forEach(ad => {
            ad.remove();
        });
    }

    const makeChanges = () => {
        promoGenre.textContent = "Драма";

        promoBg.style.backgroundImage = 'url("./img/bg.jpg")';
    }

    const sortArr = (arr) => {
        arr.sort();
    }

    const createMovieList = (movies, parent) => {
        parent.textContent = "";
        sortArr(movies);

        movies.forEach((movie, index) => {
            const item = document.createElement('li'),
                deleteBtn = document.createElement('div');
            item.classList.add('promo__interactive-item');
            deleteBtn.classList.add('delete');
            parent.appendChild(item)
            item.textContent = `${index + 1} . ${movie}`
            item.appendChild(deleteBtn);
        });

        document.querySelectorAll('.delete').forEach((btn, i) => {
            btn.addEventListener('click', (e) => {
                e.target.parentNode.remove();
                movieDB.movies.splice(i, 1);

                createMovieList(movies, parent);
            })
        })
    }

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        let newFilm = input.value,
            favorite = checkBox.checked;

        if (newFilm) {

            if (newFilm.length > 21) {
                newFilm = `${newFilm.slice(0, 22)}...`
            }

            if (favorite) {
                console.log('Добавляем любимый фильм');
            }

            movieDB.movies.push(newFilm);
            sortArr(movieDB.movies);

            createMovieList(movieDB.movies, movieList);

            e.target.reset();
        }
    })

    deleteAds(ads);
    makeChanges();
    createMovieList(movieDB.movies, movieList);
});