const hd_menu = document.getElementById('hd-menu');
const menu = document.getElementById('menu');

hd_menu.addEventListener('click', () => {
  if( menu.classList.contains('hidden') ) {
    menu.classList.remove('hidden');
  } else {
    menu.classList.add('hidden');
  }
});