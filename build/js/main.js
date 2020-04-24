'use strict';

var ESC_KEYCODE = 27;
var SCROLL_DURATION = 500;

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
var feedbackBlock = document.querySelector('#feedback');
var advantagesBlock = document.querySelector('#advantages');
var footerColumns = document.querySelectorAll('.page-footer__column');
var phoneInputs = document.querySelectorAll('input[type="tel"]');

var onPopupEscPress = function (evt) {
  if (evt.keyCode === ESC_KEYCODE) {
    evt.preventDefault();
    closePopup();
  }
};

var openPopup = function () {
  popup.classList.add('popup--show');
  overlay.classList.add('overlay--show');
  body.classList.add('overflow');
  window.addEventListener('keydown', onPopupEscPress);
};

var closePopup = function () {
  popup.classList.remove('popup--show');
  overlay.classList.remove('overlay--show');
  body.classList.remove('overflow');
  window.removeEventListener('keydown', onPopupEscPress);
};

var onHeaderButtonClick = function (evt) {
  evt.preventDefault();
  openPopup();
  userName.focus();
};

var onPopupButtonClick = function (evt) {
  evt.preventDefault();
  closePopup();
};

var onOverlayClick = function (evt) {
  evt.preventDefault();
  closePopup();
};

if (headerButton) {
  headerButton.addEventListener('click', onHeaderButtonClick);
}

if (popupButton) {
  popupButton.addEventListener('click', onPopupButtonClick);
}

if (overlay) {
  overlay.addEventListener('click', onOverlayClick);
}

var onFormSubmit = function (evt) {
  evt.preventDefault();
  localStorage.setItem('user-name', userName.value);
  localStorage.setItem('user-phone', userPhone.value);
  localStorage.setItem('user-question', userQuestion.value);
};

if (form) {
  form.addEventListener('submit', onFormSubmit);
}

var animation = function (duration) {
  var temp;
  return function (element) {
    cancelAnimationFrame(temp);
    var start = performance.now();
    var from = window.pageYOffset || document.documentElement.scrollTop;
    var to = element.getBoundingClientRect().top;
    requestAnimationFrame(function step(timestamp) {
      var progress = (timestamp - start) / duration;
      progress > 1 && (progress = 1);
      window.scrollTo(0, from + to * progress | 0);
      progress < 1 && (temp = requestAnimationFrame(step));
    });
  };
};

var scrollMenu = animation(SCROLL_DURATION);

var onPromoButtonClick = function () {
  scrollMenu(feedbackBlock);
};

var onPromoScrollClick = function () {
  scrollMenu(advantagesBlock);
};

promoButton.addEventListener('click', onPromoButtonClick);
promoScroll.addEventListener('click', onPromoScrollClick);

footerColumns.forEach(function (footerColumn) {
  footerColumn.classList.remove('page-footer__column--nojs');
  var footerButton = footerColumn.querySelector('.page-footer__button');

  var onFooterButtonClick = function (evt) {
    evt.preventDefault();
    footerColumn.classList.toggle('page-footer__column--closed');
    footerColumn.classList.toggle('page-footer__column--opened');
  };

  if (footerButton) {
    footerButton.addEventListener('click', onFooterButtonClick);
  }
});

var im = new Inputmask('+7(999)999-99-99');
im.mask(phoneInputs);
