'use strict';

window.addEventListener('DOMContentLoaded', runScript);

function runScript() {
  window.addEventListener('scroll', animateHeader);

  function animateHeader() {
    const header = document.querySelector('header'),
      logo = document.querySelector('.logo-wrapper svg path'),
      logoTitle = document.querySelector('.logo-wrapper p'),
      nav = document.querySelector('nav'),
      magnifier = document.querySelector('#magnifier path'),
      pageYOffset = window.pageYOffset,
      checkPoint = 10,
      titleBlocksHeight = +window.getComputedStyle(document.querySelector('.title-blocks-wrapper')).height.replace(/px/g, ''),
      contentBlockEnd = titleBlocksHeight + +window.getComputedStyle(document.querySelector('.content-blocks-wrapper')).height.replace(/px/g, '');

    if (pageYOffset > checkPoint) {
      header.classList.add('scrolled-header');
    } else if (pageYOffset < checkPoint && header.classList.contains('scrolled-header')) {
      header.classList.remove('scrolled-header');
    }
    if (pageYOffset > titleBlocksHeight || pageYOffset > contentBlockEnd) {
      logo.classList.add('scrolled-header-svg');
      logoTitle.classList.add('scrolled-header-text');
      nav.classList.add('scrolled-header-text');
      magnifier.classList.add('scrolled-header-svg')
    } else if (pageYOffset < titleBlocksHeight) {
      logo.classList.remove('scrolled-header-svg');
      logoTitle.classList.remove('scrolled-header-text');
      nav.classList.remove('scrolled-header-text');
      magnifier.classList.remove('scrolled-header-svg')
    }
  }
}