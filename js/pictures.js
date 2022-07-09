import {similarDescription} from './data.js';

const picturesPool = document.querySelector('.pictures');
const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');


const usersPictures = similarDescription(5);

const picFragment = document.createDocumentFragment();

usersPictures.forEach(({url, likes, comments}) => {
  const pictureElement = pictureTemplate.cloneNode(true);

  pictureElement.querySelector('.picture__img').src = url;
  pictureElement.querySelector('.picture__likes').content = likes;
  pictureElement.querySelector('.picture__comments').content = comments;
  console.log(pictureElement);
  picFragment.appendChild(pictureElement);
});

picturesPool.appendChild(picFragment);

