import {similarDescription} from './data.js';

const dataPicture = similarDescription(1)[0];
const commentsArray = dataPicture.comments;

const socialComments = () => {
  // Принимает массив с комментариями
  // Возвращает фрагмент с комментариями на основе данных
  const fragment = document.createDocumentFragment();
  commentsArray.forEach(({avatar, name, message}) => {

    const newElement = document.createElement('li');
    newElement.classList.add('social__comment');

    const imgTag = document.createElement('img');
    imgTag.classList.add('social__picture');
    imgTag.width = '35';
    imgTag.height = '35';
    newElement.append(imgTag);

    const pTag = document.createElement('p');
    pTag.classList.add('social__text');
    newElement.append(pTag);
    newElement.querySelector('.social__picture').src = avatar;
    newElement.querySelector('.social__picture').alt = name;
    newElement.querySelector('.social__text').textContent = message;

    fragment.appendChild(newElement);
  });
  return fragment;
};

const renderBigPictures = ({url, likes, description}) => {
  // Возвращает и отрисовывает большую картинку на основе данных
  document.body.classList.add('modal-open');
  const bigPicture = document.querySelector('.big-picture');
  const socialCommentsElem = bigPicture.querySelector('.social__comments');
  //console.log(picture.url);
  bigPicture.querySelector('.big-picture__img img').src = url;
  const comments = socialComments();
  socialCommentsElem.appendChild(comments);
  bigPicture.querySelector('.likes-count').textContent = likes;
  bigPicture.querySelector('.social__caption').textContent = description;
  bigPicture.querySelector('.comments-count').textContent = comments.length;

  // 3 пункт в задании скрыть блоки счётчика комментариев и загрузки новых комментариев
  const commentsCountBlock = bigPicture.querySelector('.social__comment-count');
  commentsCountBlock.classList.add('hidden');
  const commentsUploadBlock = bigPicture.querySelector('.comments-loader');
  commentsUploadBlock.classList.add('hidden');

  return bigPicture;
};


export {renderBigPictures};

