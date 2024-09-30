/**
 * !(i)
 * Код попадает в итоговый файл, только когда вызвана функция, например FLSFunctions.spollers();
 * Или когда импортирован весь файл, например import "files/script.js";
 * Неиспользуемый код в итоговый файл не попадает.

 * Если мы хотим добавить модуль следует его раскомментировать
*/
// import MousePRLX from './libs/parallaxMouse'
// import AOS from 'aos'
import Swiper, { Navigation, Pagination } from 'swiper';

import BaseHelpers from './helpers/BaseHelpers.js';
import PopupManager from './modules/PopupManager';
import BurgerMenu from './modules/BurgerMenu';
import Tabs from './modules/Tabs';
import Accordion from './modules/Accordion.js';

BaseHelpers.checkWebpSupport();

BaseHelpers.addTouchClass();

BaseHelpers.addLoadedClass();

BaseHelpers.headerFixed();

/**
 * Открытие/закрытие модальных окон
 * Чтобы модальное окно открывалось и закрывалось
 * На окно повешай атрибут data-popup="<название окна>"
 * На кнопку, которая вызывает окно повешай атрибут data-type="<название окна>"

 * На обертку(.popup) окна добавь атрибут '[data-close-overlay]'
 * На кнопку для закрытия окна добавь класс '.button-close'
 * */
new PopupManager();

/**
 *  Модуль для работы с меню (Бургер)
 * */
new BurgerMenu().init();

/**
 *  Библиотека для анимаций
 *  документация: https://michalsnik.github.io/aos
 * */
// AOS.init();

/**
 * Параллакс мышей
 * */
// new MousePRLX();

new Tabs('tabs-example', {
	onChange: (data) => {
		console.log(data);
	},
});

new Tabs('tabs-build', {
	onChange: (data) => {
		console.log(data);
	},
});
new Tabs('tabs-comparison', {
	onChange: (data) => {
		console.log(data);
	},
});

new Accordion('.accordion', {
	shouldOpenAll: false, // true
	defaultOpen: [], // [0,1]
	collapsedClass: 'open',
});



const swiper = new Swiper('.swiper', {
	// Optional parameters
	direction: 'horizontal',
	loop: true,
	spaceBetween: 30,

	modules: [Navigation, Pagination],
	// Navigation arrows
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},

});


const swiperBuild = new Swiper('.build', {
	// Optional parameters
	direction: 'horizontal',
	wrapperClass: 'build__wrapper',
	slideClass: 'build__slide',
	loop: true,
	modules: [Navigation, Pagination],
	slidesPerView: 3,
	spaceBetween: 137,
	// Navigation arrows
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
	breakpoints: {
		// when window width is >= 320px
		320: {
			slidesPerView: 1,
			spaceBetween: 10,
		},
		// when window width is >= 480px
		480: {
			slidesPerView: 2,
			spaceBetween: 20
		},
		1000: {
			slidesPerView: 3,
			spaceBetween: 40
		},
		1200: {
			slidesPerView: 3,
			spaceBetween: 100
		},
		1300: {
			slidesPerView: 3,
			spaceBetween: 137,
		},
	}
});

const swiperSliders = new Swiper('.sliders', {
	// Optional parameters
	direction: 'horizontal',
	wrapperClass: 'sliders__wrapper',
	slideClass: 'sliders__slide',
	loop: true,
	modules: [Navigation, Pagination],
	slidesPerView: 1,
	// Navigation arrows
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
	breakpoints: {
		// when window width is >= 320px
		320: {
			slidesPerView: 1,
			spaceBetween: 20,
		},
	}
});




const burgerBtn = document.querySelector('.header__burger');
const headerMenu = document.querySelector('.header__menu');

burgerBtn.addEventListener('click', ()=> {
	headerMenu.classList.toggle('active')
})
