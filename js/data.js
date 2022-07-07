import {getRandomArrayElement, getRandomPositiveInteger} from './util.js';

const DESCRIPTIONS = [
  'Природа',
  'Селфи',
  'Пейзажи',
  'Натюрморт',
  'Кокакола',
  'Путешествия',
  'Инстаграм'
];

const NAMES = [
  'Иван',
  'Хуан Себастьян',
  'Мария',
  'Кристоф',
  'Виктор',
  'Юлия',
  'Люпита',
  'Вашингтон'
];

const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  `Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.
Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.
Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!`
];

const PHOTO_DESCRIPTION_COUNT = 4;

function createPhotoDescription() {
  return {
    id: getRandomPositiveInteger(1, 25),
    url: `photos/${getRandomPositiveInteger(1, 25)}.jpg`,
    description: getRandomArrayElement(DESCRIPTIONS),
    likes: getRandomPositiveInteger(15, 200),
    comments: {
      id: getRandomPositiveInteger(1, 1000),
      avatar: `img/avatar-${getRandomPositiveInteger(1, 6)}.svg`,
      message: getRandomArrayElement(MESSAGES),
      name: getRandomArrayElement(NAMES),
    }
  };
}

// eslint-disable-next-line no-unused-vars
const similarDescription = Array.from( { length: PHOTO_DESCRIPTION_COUNT }, createPhotoDescription);

export {similarDescription};
