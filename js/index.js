let navbar = document.querySelector('.header .navbar');
let menuBtn = document.querySelector('#menu-btn');

menuBtn.onclick = () => {
  menuBtn.classList.toggle('fa-times');
  navbar.classList.toggle('active');
};


// ĐĂNG NHẬP - ĐĂNG KÝ
let formBtn = document.querySelector('#login-btn');
let dkBtn = document.querySelector('#register-btn');
let loginForm = document.querySelector('.login-form-container');
let dkForm = document.querySelector('.register-form-container');
let loginFormClose = document.querySelector('#login-form-close');
let dkFormClose = document.querySelector('#register-form-close');

formBtn.addEventListener('click', () => {
  loginForm.classList.add('active');
  dkForm.classList.remove('active');
});

dkBtn.addEventListener('click', () => {
  loginForm.classList.remove('active');
  dkForm.classList.add('active');
});

loginFormClose.addEventListener('click', () => {
  loginForm.classList.remove('active');
});

dkFormClose.addEventListener('click', () => {
  dkForm.classList.remove('active');
  // loginForm.classList.add('active');
});


var swiper = new Swiper(".home-slider", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

var swiper = new Swiper(".food-slider", {
  grabCursor: true,
  loop: true,
  centeredSlides: true,
  spaceBetween: 20,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    600: {
      slidesPerView: 2,
    },
    900: {
      slidesPerView: 3,
    },

  },
});

// Food preview

let previewContainer = document.querySelector('.food-preview-container');
let previewBox = previewContainer.querySelectorAll('.food-preview');

document.querySelectorAll('.popular .slide').forEach(food => {
  food.onclick = () => {
    previewContainer.style.display = 'flex';
    let name = food.getAttribute('data-name');
    previewBox.forEach(preveiw => {
      let target = preveiw.getAttribute('data-target');
      if (name == target) {
        preveiw.classList.add('active');
      }
    });
  };
});

previewContainer.querySelector('#close-preview').onclick = () => {
  previewContainer.style.display = 'none';
  previewBox.forEach(close => {
    close.classList.remove('active');
  });
};


// List dishes
var swiper = new Swiper(".list-slider", {
  grabCursor: true,
  loop: true,
  autoHeight: true,
  centeredSlides: true,
  spaceBetween: 20,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

// BLOGS
var swiper = new Swiper(".blogs-slider", {
  grabCursor: true,
  loop: true,
  autoHeight: true,
  centeredSlides: true,
  spaceBetween: 20,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    600: {
      slidesPerView: 2,
    },
    900: {
      slidesPerView: 3,
    },

  },
});


