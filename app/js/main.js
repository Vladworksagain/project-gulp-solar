const buttonTabs = document.querySelectorAll('.rate-tab__btn');
const tabsInfo = document.querySelectorAll('.rate-tabs__content');

buttonTabs.forEach((tabs) => {
    tabs.addEventListener('click', () => {
        let currentButton = tabs;

        let dataTabs = currentButton.getAttribute('data-tabs');

        let activeTabs = document.querySelector(dataTabs);

        if ( ! tabs.classList.contains('tabs-active__btn')) {

            buttonTabs.forEach((tabs) => {
                tabs.classList.remove('tabs-active__btn');
            });

            tabsInfo.forEach((infoTabs) => {
                infoTabs.classList.remove('active__tabs');
            });

            currentButton.classList.add('tabs-active__btn');
            activeTabs.classList.add('active__tabs');
        }
    });
})
document.querySelector('.rate-tab__btn').click();

var swiper = new Swiper(".mySwiper", {

    effect: 'fade',
    fadeEffect: {
        crossFade: true
    },
    speed: 600,

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});