'use strict';

// SHOW MENU SCROLLED BEYOND HERO SECTION

var navHeight
var unscrolledNavHeight
var fixed = false

function stickyNav() {
  $(document).scroll(function () {
    var y = $(this).scrollTop();
    if (y > unscrolledNavHeight && !fixed) {
      fixed = true;
      $('#main-nav').addClass('u-nav--stick');
      addNavPadding();
    }
    
    if (y <= unscrolledNavHeight && fixed) {
      fixed = false;
      $('#main-nav').removeClass('u-nav--stick');
      $('#navpad').remove();
    }
  });
}

function addNavPadding() {
  var div = document.createElement('div');
  div.style.height = navHeight + 'px';
  div.id = 'navpad';
  $(document.body).prepend(div);
}

var heightOfNav = $('#main-nav').outerHeight();

function smoothScrollThang(elementClass) {
  var scrollTop = $(elementClass).offset().top - heightOfNav;
  console.log('!');
  return $('html, body').animate({ scrollTop: scrollTop }, 500);
}

$(function () {
  navHeight = $('#main-nav').outerHeight();
  unscrolledNavHeight = $('.hero').outerHeight();

  stickyNav();

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