'use strict';

var ESC_KEYCODE = 27;

var navButton = document.querySelector('.main-nav__button');
var popup = document.querySelector('.popup');
var popupButton = document.querySelector('.popup__button');
var overlay = document.querySelector('.overlay');
var userName = popup.querySelector('#name-popup');
var userPhone = popup.querySelector('#phone-popup');
var userQuestion = popup.querySelector('#question-popup');
var form = popup.querySelector('form');
var footerColumns = document.querySelectorAll('.page-footer__column');

if (navButton) {
  navButton.addEventListener('click', function (evt) {
    evt.preventDefault();
    popup.classList.add('popup--show');
    overlay.classList.add('overlay--show');
    userName.focus();
  });
}

if (popupButton) {
  popupButton.addEventListener('click', function (evt) {
    evt.preventDefault();
    popup.classList.remove('popup--show');
    overlay.classList.remove('overlay--show');
  });
}

if (overlay) {
  overlay.addEventListener('click', function (evt) {
    evt.preventDefault();
    popup.classList.remove('popup--show');
    overlay.classList.remove('overlay--show');
  });
}

window.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ESC_KEYCODE) {
    if (popup.classList.contains('popup--show')) {
      evt.preventDefault();
      popup.classList.remove('popup--show');
      overlay.classList.remove('overlay--show');
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
