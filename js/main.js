

'use strict';

{
  const BODY = document.body;

  const H_MENU = document.getElementById('js-buttonHamburger');

  H_MENU.addEventListener('click', () => {
    BODY.classList.toggle('is-drawerActive');

    if (H_MENU.getAttribute('aria-expanded') === 'false') {
      H_MENU.setAttribute('aria-expanded', 'true');
    } else {
      H_MENU.setAttribute('aria-expanded', 'false');
    }
  });

  const ARROW = document.querySelector('.c-arrow-up');
  // console.log(ARROW);

  ARROW.addEventListener('click', () => {
    window.scroll({
      top: 0,
      behavior: 'smooth'
    });
  });

  const smoothScrollTrigger = document.querySelectorAll('a[href^="#"]');
  // console.log(smoothScrollTrigger);


  for (let i = 0; i < smoothScrollTrigger.length; i++) {

    smoothScrollTrigger[i].addEventListener('click', (e) => {
      e.preventDefault();

      let href = smoothScrollTrigger[i].getAttribute('href');
      // console.log(href);
      let targetElement = document.getElementById(href.replace('#', ''));
      // console.log(targetElement);

      const rect = targetElement.getBoundingClientRect().top;
      // console.log(rect);
      const offset = window.pageYOffset;
      // const gap = 60;
      const target = rect + offset;

      window.scrollTo({
        top: target,
        behavior: 'smooth',
      });
    });
  }

}






