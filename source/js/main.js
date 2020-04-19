'use strict';

var ESC_KEYCODE = 27;

var body = document.querySelector('body');
var headerButton = document.querySelector('.page-header__button');
var popup = document.querySelector('.popup');
var popupButton = document.querySelector('.popup__button');
var overlay = document.querySelector('.overlay');
var userName = popup.querySelector('#name-popup');
var userPhone = popup.querySelector('#phone-popup');
var userQuestion = popup.querySelector('#question-popup');
var form = popup.querySelector('form');
var promoButton = document.querySelector('.promo-block__button');
var promoScroll = document.querySelector('.promo-block__scroll');
var feedback = document.querySelector('.feedback');
var advantages = document.querySelector('.advantages');
var footerColumns = document.querySelectorAll('.page-footer__column');
var phoneInputs = document.querySelectorAll('input[type="tel"]');

if (headerButton) {
  headerButton.addEventListener('click', function (evt) {
    evt.preventDefault();
    popup.classList.add('popup--show');
    overlay.classList.add('overlay--show');
    body.classList.add('overflow');
    userName.focus();
  });
}

if (popupButton) {
  popupButton.addEventListener('click', function (evt) {
    evt.preventDefault();
    popup.classList.remove('popup--show');
    overlay.classList.remove('overlay--show');
    body.classList.remove('overflow');
  });
}

if (overlay) {
  overlay.addEventListener('click', function (evt) {
    evt.preventDefault();
    popup.classList.remove('popup--show');
    overlay.classList.remove('overlay--show');
    body.classList.remove('overflow');
  });
}

window.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ESC_KEYCODE) {
    if (popup.classList.contains('popup--show')) {
      evt.preventDefault();
      popup.classList.remove('popup--show');
      overlay.classList.remove('overlay--show');
      body.classList.remove('overflow');
    }
  }
});

if (form) {
  form.addEventListener('submit', function (evt) {
    evt.preventDefault();
    localStorage.setItem('user-name', userName.value);
    localStorage.setItem('user-phone', userPhone.value);
    localStorage.setItem('user-question', userQuestion.value);
  });
}

if (promoButton) {
  promoButton.addEventListener('click', function (evt) {
    evt.preventDefault();
    window.scrollBy({top: (feedback.offsetTop - window.scrollY), behavior: 'smooth'});
  });
}

if (promoScroll) {
  promoScroll.addEventListener('click', function (evt) {
    evt.preventDefault();
    window.scrollBy({top: (advantages.offsetTop - window.scrollY), behavior: 'smooth'});
  });
}

footerColumns.forEach(function (footerColumn) {
  footerColumn.classList.remove('page-footer__column--nojs');
  var footerButton = footerColumn.querySelector('.page-footer__button');

  if (footerButton) {
    footerButton.addEventListener('click', function () {
      footerColumn.classList.toggle('page-footer__column--closed');
      footerColumn.classList.toggle('page-footer__column--opened');
    });
  }
});

var im = new Inputmask('+7(999)999-99-99');
im.mask(phoneInputs);
