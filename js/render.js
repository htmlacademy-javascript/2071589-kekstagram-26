import {renderPictures} from './pictures.js';
import {similarDescription} from './data.js';
import {renderBigPictures} from './big-pictures.js';


const usersPictures = similarDescription(10);
const pictures = renderPictures(usersPictures);
const picItems = pictures.querySelectorAll('a');


const addPictureClickHandler = (picItem) => {
  picItem.addEventListener('click', () => {
    const picData = {
      url: picItem.querySelector('img').src,
      description: picItem.querySelector('img').alt,
      likes: picItem.querySelector('.picture__likes').textContent,
    };

    const bigPicture = renderBigPictures(picData);
    bigPicture.classList.remove('hidden');

    const cancelButton = bigPicture.querySelector('.big-picture__cancel');
    cancelButton.addEventListener('click', () => {
      bigPicture.classList.add('hidden');
      document.body.classList.remove('modal-open');
    });

    document.addEventListener('keydown', (evt) => {
      if (evt.code === 'Escape') {
        bigPicture.classList.add('hidden');
        document.body.classList.remove('modal-open');
      }
    });
  });
};

for (let i = 0; i < picItems.length; i++) {
  addPictureClickHandler(picItems[i]);
}

