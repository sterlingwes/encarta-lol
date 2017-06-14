'use strict';

// SHOW MENU SCROLLED BEYOND HERO SECTION

var navHeight;
var heightOfNav;
var heroHeight;
var fixed = false;
var mainNav;

function ultimateStickyNav(){
  $(window).scroll(function() {
    var currentPos = $(this).scrollTop();
    if (currentPos > heroHeight && !fixed) {
      fixed = true;
      mainNav.addClass("sticko")
      addNavPadding();
    }

    if (currentPos <= heroHeight && fixed) {
      fixed = false;
      mainNav.removeClass("sticko")
      $('#navpad').remove();
    }
  })
}

function addNavPadding() {
  var div = document.createElement('div');
  div.style.height = navHeight + 'px';
  div.id = 'navpad';
  $(document.body).prepend(div);
}

function smoothScrollThang(elementClass) {
  var scrollTop = $(elementClass).offset().top - navHeight;
  return $('html, body').animate({ scrollTop: scrollTop }, 500);
}

function hamburger(){
  $('.hamburger').on('click', function() {
    $('.palm-nav').toggleClass('palm-nav--show');
    $('i.fa.fa-close').toggleClass('u-display--block');
    $('i.fa.fa-bars').toggleClass('u-display--none');
  })
}

$(function () {
  ultimateStickyNav();

  hamburger();

  mainNav = $("#main-nav");
  navHeight = mainNav.outerHeight();
  heroHeight = $('.hero').outerHeight();

  $('#nav-about').on('click', function () {
    smoothScrollThang('#about');
  });

  $('#nav-portfolio').on('click', function () {
    smoothScrollThang('#portfolio');
  });

  $('#nav-hireme').on('click', function () {
    smoothScrollThang('#hireme');
  });

  $('#nav-contact').on('click', function () {
    smoothScrollThang('#contact');
  });
});