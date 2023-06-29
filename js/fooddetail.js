var swiper = new Swiper(".slide-fooddetail", {
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  scrollbar: {
    el: ".swiper-scrollbar",
    hide: true,
  },
});

//search
let searchBtn = document.querySelector('#search-btn');
let searchBar = document.querySelector('.search-bar-container');

window.onscroll = () => {
  searchBtn.classList.remove('fa-times');
  searchBar.classList.remove('active');
}

searchBtn.addEventListener('click', () => {
  searchBtn.classList.toggle('fa-times');
  searchBar.classList.toggle('active');
});


// Lọc món ăn khi nhấn nút Filter
document.getElementById('filterButton').addEventListener('click', function () {
  var priceRangeValue = document.getElementById('priceRange').value;
  var ngonCheckbox = document.getElementById('ngonCheckbox').checked;
  var nhanhCheckbox = document.getElementById('nhanhCheckbox').checked;
  var gnhietCheckbox = document.getElementById('gnhietCheckbox').checked;
  var categorySelectValue = document.getElementById('categorySelect').value;

  var cards = document.getElementsByClassName('card');
  for (var i = 0; i < cards.length; i++) {
    var card = cards[i];
    var price = parseInt(card.getAttribute('data-price'));
    var attributes = card.getAttribute('data-attributes');
    var category = card.getAttribute('data-category');

    // Kiểm tra điều kiện lọc
    var priceCondition = price <= priceRangeValue;
    var attributesCondition = true;
    if (ngonCheckbox && !attributes.includes('ngon')) {
      attributesCondition = false;
    }
    if (nhanhCheckbox && !attributes.includes('nhanh')) {
      attributesCondition = false;
    }
    if (gnhietCheckbox && !attributes.includes('gnhiet')) {
      attributesCondition = false;
    }
    var categoryCondition = categorySelectValue === 'all' || category === categorySelectValue;

    // Ẩn/Hiện card dựa trên kết quả lọc
    if (priceCondition && attributesCondition && categoryCondition) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  }
});
// Cập nhật giá trị hiển thị của thanh range giá
var priceRange = document.getElementById('priceRange');
var priceValue = document.getElementById('priceValue');
priceValue.innerText = priceRange.value;

priceRange.addEventListener('input', function () {
  priceValue.innerText = priceRange.value;
});


// hien thi mon an chi tiet
// let previewContainer = document.querySelector('.food-preview-container');
// let previewBox = previewContainer.querySelectorAll('.food-preview');

document.querySelectorAll('#foodmenu .monan').forEach(food => {
  food.onclick = () => {
    previewContainer.style.display = 'flex';
    let name = food.getAttribute('name');
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

var noti = document.querySelector('#cart_btn');
var select = document.querySelector('.select');
var button = document.getElementsByTagName('button');
for (var but of button) {
  but.addEventListener('click', (e) => {
    var add = Number(noti.getAttribute('data-count') || 0);
    noti.setAttribute('data-count', add + 1);
    noti.classList.add('zero')

    // image --animation to cart ---//
    var image = e.target.parentNode.querySelector('img');
    var span = e.target.parentNode.querySelector('span');
    var s_image = image.cloneNode(false);
    span.appendChild(s_image);
    span.classList.add("active");
    setTimeout(() => {
      span.classList.remove("active");
      span.removeChild(s_image);
    }, 500);


    // copy and paste //
    var parent = e.target.parentNode;
    var clone = parent.cloneNode(true);
    select.appendChild(clone);
    clone.lastElementChild.innerText = "Add_cart";

  })
}

window.onscroll = () => {
  select.classList.remove('fa-times');
  select.classList.remove('active');
}
noti.addEventListener('click', () => {
  noti.classList.toggle('fa-times');
  select.classList.toggle('active');
});


