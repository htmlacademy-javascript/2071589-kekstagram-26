import {similarDescription} from './data.js';

const picturesPool = document.querySelector('.pictures');
const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');


const usersPictures = similarDescription(5);

const picFragment = document.createDocumentFragment();

usersPictures.forEach(({url, likes, comments}) => {
  const pictureElement = pictureTemplate.cloneNode(true);
  pictureElement.querySelector('.picture__img').src = url;
  pictureElement.querySelector('.picture__likes').textContent = likes;
  pictureElement.querySelector('.picture__comments').textContent = comments.length;
  picFragment.appendChild(pictureElement);
});

picturesPool.appendChild(picFragment);

