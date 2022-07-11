import {similarDescription} from './data.js';

const bigPicture = document.querySelector('.big-picture');
bigPicture.classList.remove('hidden');

const dataPicture = similarDescription(1);
//console.log(dataPicture);

dataPicture.forEach((pic) => {
  bigPicture.querySelector('.big-picture__img').src = pic.url;
  bigPicture.querySelector('.likes-count').textContent = pic.likes;
  bigPicture.querySelector('.social__caption').textContent = pic.description;
  bigPicture.querySelector('.comments-count').textContent = pic.comments.id;
});


