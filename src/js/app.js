import Widget from './widget';

const test = new Widget(document.querySelector('.container'));
test.createModule();

const button = document.querySelector('.btn-open');
const contentContainer = document.querySelector('.content-container');

button.addEventListener('click', (ev) => {
  ev.preventDefault();

  contentContainer.classList.toggle('expansion-hide');
});
