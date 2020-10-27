'use strict';

{

  const body = document.body;

  const speed = 10000; //フェイドアウトの処理

  const images = [
    'img/wave01.jpg',
    'img/wave02.jpg',
    'img/wave03.jpg',
    'img/wave04.jpg',
    'img/wave05.jpg',
    'img/wave06.jpg',
  ]

  const imagesSP = [
    'img/wave01-sp.png',
    'img/wave02-sp.png',
    'img/wave03-sp.png',
    'img/wave04-sp.png',
  ]


  // matchMediaの設定
  const mqs = window.matchMedia('screen and (max-width: 480px)');


  console.log(mqs);


  // ブレイクポイントの瞬間に発火
  mqs.addListener(changeMediaQuery);

  // 初期読み込み時用
  let slideImage;
  changeMediaQuery(mqs);


  function changeMediaQuery(mqs) {

    // if文で分岐
    if (mqs.matches === true) {
      // 480未満の時 

      //SP用配列を準備
      console.log('480px未満');
      slideImage = imagesSP.slice();
      // console.log(slideImage);


    } else {
      // PC用配列を準備
      // console.log('480px以上');Ï

      // PC用配列を準備
      console.log('480px以上');
      slideImage = images.slice();

    }
  }

  const elem = document.querySelector('.c-is-slide-active');
  let currentIndex = 0;


  function slide(slideImage) {
    if (currentIndex >= (slideImage.length)) {
      currentIndex = 0;
    }
    elem.style.backgroundImage = `url(${slideImage[currentIndex]})`;
    // setTimeout(function () {
    //   slide(slideImage);
    // }, 2000);
    currentIndex++;
  }
  slide(slideImage);

  setInterval(function () {
    slide(slideImage)
  }, speed); //


  const hMenu = document.getElementById('js-buttonHamburger');

  hMenu.addEventListener('click', () => {
    body.classList.toggle('is-drawerActive');

    if (hMenu.getAttribute('aria-expanded') === 'false') {
      hMenu.setAttribute('aria-expanded', 'true');
    } else {
      hMenu.setAttribute('aria-expanded', 'false');
    }
  });

}


