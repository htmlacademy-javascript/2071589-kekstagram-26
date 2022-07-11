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


function createPhotoDescription() {
  // Генерирует дату для фоток юзеров
  return {
    id: getRandomPositiveInteger(1, 25),
    url: `photos/${getRandomPositiveInteger(1, 25)}.jpg`,
    description: getRandomArrayElement(DESCRIPTIONS),
    likes: getRandomPositiveInteger(15, 200),
    comments: Array.from( { length: getRandomPositiveInteger(0, 10) }, createRandomComments),
  };
}

function createRandomComments() {
  // Генерирует массив рандомной длины с комментариями
  return {
    id: getRandomPositiveInteger(1, 1000),
    avatar: `img/avatar-${getRandomPositiveInteger(1, 6)}.svg`,
    message: getRandomArrayElement(MESSAGES),
    name: getRandomArrayElement(NAMES)
  };
}

const similarDescription = (count) => Array.from( { length: count }, createPhotoDescription);


export {similarDescription};
