'use strict';

// SHOW MENU SCROLLED BEYOND HERO SECTION

function ultimateStickyNav(){
  $(window).scroll(function() {
    var o = $(window).scrollTop(),
      n = $("#nav-anchor").offset().top;
    o > n ? $(".main-nav").addClass("sticko") : $(".main-nav").removeClass("sticko")
  })
}

var heightOfNav = $('#main-nav').outerHeight();

function smoothScrollThang(elementClass) {
  var scrollTop = $(elementClass).offset().top - heightOfNav;
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