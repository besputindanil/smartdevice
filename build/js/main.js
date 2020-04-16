'use strict';

var footerColumns = document.querySelectorAll('.page-footer__column');

footerColumns.forEach(function (footerColumn) {
  footerColumn.classList.remove('page-footer__column--nojs');
  var footerButton = footerColumn.querySelector('.page-footer__button');

  footerButton.addEventListener('click', function () {
    footerColumn.classList.toggle('page-footer__column--closed');
    footerColumn.classList.toggle('page-footer__column--opened');
  });
});
