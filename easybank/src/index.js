(function(){
  const button = document.getElementById('mobile-navigation-button');
  const nav = document.getElementById('navigation-menu');
  const backdrop = document.getElementById('navigation-menu-backdrop');
  const listItems = document.getElementsByClassName('navigation-item');

  function closeNavigation() {
    nav.classList.remove('nav--active');
    backdrop.classList.remove('backdrop--active');
    button.classList.remove('hamburger-button--active');
  }

  function toggleNavigation() {
    nav.classList.toggle('nav--active');
    backdrop.classList.toggle('backdrop--active');
    button.classList.toggle('hamburger-button--active');
  }

  button.addEventListener('click', toggleNavigation);

  backdrop.addEventListener('click', closeNavigation);

  for (let i = 0; i < listItems.length; i += 1) {
    listItems[i].addEventListener('click', closeNavigation);
  }
})()
