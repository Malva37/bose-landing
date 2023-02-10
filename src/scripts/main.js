'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});

const btnContactUs = document.querySelector('.contact-us__button');

btnContactUs.addEventListener('click', checkboxClick, false);

function checkboxClick(event) {
  event.preventDefault();
}
