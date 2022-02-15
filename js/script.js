/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

const adBlock = document.querySelectorAll(".promo__adv img"),
      promoGenre = document.querySelector('.promo__genre'),
      promoBg = document.querySelector('.promo__bg'),
      movieList = document.querySelector('.promo__interactive-list');


adBlock.forEach(ad => {
    ad.remove();
}); 

promoGenre.textContent = "Драма";

promoBg.style.backgroundImage =  'url("./img/bg.jpg")';

movieList.textContent = "";

movieDB.movies.sort();

movieDB.movies.forEach((movie,index) => {
    const item = document.createElement('li'),
          deleteBtn = document.createElement('div');
    item.classList.add('promo__interactive-item');
    deleteBtn.classList.add('delete');
    movieList.appendChild(item)
    item.textContent = `${index + 1} . ${movie}`
    item.appendChild(deleteBtn);
});

