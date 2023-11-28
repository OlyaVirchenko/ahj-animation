export default class Widget {
  constructor(element) {
    this.element = element;
  }

  createModule() {
    const btnOpen = document.createElement('button');
    btnOpen.classList.add('btn-open');
    btnOpen.textContent = 'Collapse';

    const contentContainer = document.createElement('div');
    contentContainer.classList.add('content-container');

    const content = document.createElement('p');
    content.classList.add('paragraph');
    content.textContent = 'The transition property is used when we need to smoothly change CSS properties between two states of an element. For example, when hovering the mouse.';

    const btnCopyContainer = document.createElement('div');
    btnCopyContainer.classList.add('btn-copy-container');

    const btnCopy = document.createElement('button');
    btnCopy.classList.add('btn-copy');
    btnCopy.textContent = 'Copy';

    contentContainer.insertAdjacentElement('afterbegin', content);
    btnCopyContainer.insertAdjacentElement('afterbegin', btnCopy);

    this.element.insertAdjacentElement('afterbegin', btnCopyContainer);
    this.element.insertAdjacentElement('afterbegin', contentContainer);
    this.element.insertAdjacentElement('afterbegin', btnOpen);
  }
}
