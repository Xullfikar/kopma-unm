let list = document.querySelector('.slider .list');
let items = document.querySelectorAll('.slider .list .item');
let dots  = document.querySelectorAll('.slider .dots li');
let prev = document.getElementById('prev');
let next = document.getElementById('next');

let active = 0;
let lengthItems = items.length - 1;

next.onclick = function() {
    if(active + 1 > lengthItems){
        active = -1;
    } else {
        active + 1;
    }
    active += 1;
    reloadSlider();
}

prev.onclick = function () {
    if(active - 1 < 0) {
        active = lengthItems;
    } else {
        active = active - 1;
    }
    reloadSlider();
}

let refreshSlider = setInterval(() => {next.click()}, 10000);

function reloadSlider() {
    let checkLeft = items[active].offsetLeft;
    list.style.left = -checkLeft + 'px';

    let lastActiveDot = document.querySelector('.slider .dots li.active');
    lastActiveDot.classList.remove('active');
    dots[active].classList.add('active');
}

dots.forEach((li, key) => {
    li.addEventListener('click', function(){
        active = key;
        reloadSlider();
    })
})

// Konten6
let listKonten6 = document.querySelector('.slider-konten6 .list-konten6');
let itemsKonten6 = document.querySelectorAll('.slider-konten6 .list-konten6 .item-konten6');
let dotsKonten6  = document.querySelectorAll('.slider-konten6 .dots-konten6 li');
let prevKonten6 = document.getElementById('prev-konten6');
let nextKonten6 = document.getElementById('next-konten6');

let activekonten6 = 0;
let lengthItemskonten6 = itemsKonten6.length - 1;

nextKonten6.onclick = function() {
    if(activekonten6 + 1 > lengthItemskonten6){
        activekonten6 = -1;
    } else {
        activekonten6 + 1;
    }
    activekonten6 += 1;
    reloadSliderKonten6();
}

prevKonten6.onclick = function () {
    if(activekonten6 - 1 < 0) {
        activekonten6 = lengthItemskonten6;
    } else {
        activekonten6 = activekonten6 - 1;
    }
    reloadSliderKonten6();
}

let refreshSliderKonten6 = setInterval(() => {nextKonten6.click()}, 10000);

function reloadSliderKonten6() {
    let checkLeft = itemsKonten6[activekonten6].offsetLeft;
    listKonten6.style.left = -checkLeft + 'px';

    let lastActiveDot = document.querySelector('.slider-konten6 .dots-konten6 li.active-konten6');
    lastActiveDot.classList.remove('active-konten6');
    dotsKonten6[activekonten6].classList.add('active-konten6');
}

dotsKonten6.forEach((li, key) => {
    li.addEventListener('click', function(){
        activekonten6 = key;
        reloadSliderKonten6();
    })
})

// Konten7
let listKonten7 = document.querySelector('.slider7 .list7');
let itemsKonten7 = document.querySelectorAll('.slider7 .list7 .item7');
let dotsKonten7  = document.querySelectorAll('.slider7 .dots7 li');
let prevKonten7 = document.getElementById('prev7');
let nextKonten7 = document.getElementById('next7');

let activekonten7 = 0;
let lengthItemskonten7 = itemsKonten7.length - 1;

nextKonten7.onclick = function() {
    if(activekonten7 + 1 > lengthItemskonten7){
        activekonten7 = -1;
    } else {
        activekonten7 + 1;
    }
    activekonten7 += 1;
    reloadSliderKonten7();
}

prevKonten7.onclick = function () {
    if(activekonten7 - 1 < 0) {
        activekonten7 = lengthItemskonten7;
    } else {
        activekonten7 = activekonten7 - 1;
    }
    reloadSliderKonten7();
}

let refreshSliderKonten7 = setInterval(() => {nextKonten7.click()}, 10000);

function reloadSliderKonten7() {
    let checkLeft = itemsKonten7[activekonten7].offsetLeft;
    listKonten7.style.left = -checkLeft + 'px';

    let lastActiveDot = document.querySelector('.slider7 .dots7 li.active7');
    lastActiveDot.classList.remove('active7');
    dotsKonten7[activekonten7].classList.add('active7');
}

dotsKonten7.forEach((li, key) => {
    li.addEventListener('click', function(){
        activekonten7 = key;
        reloadSliderKonten6();
    })
})

// Link Footer
let ig = document.querySelector('.ig');
ig.addEventListener('click', function(){
    window.location.href = "https://www.instagram.com/kopma.unm/";
});

let tk = document.querySelector('.tk');
tk.addEventListener('click', function(){
    window.location.href = "https://www.tiktok.com/@media.kopmaunm";
});