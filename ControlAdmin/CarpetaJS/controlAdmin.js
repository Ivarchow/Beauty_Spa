const header_btn = document.querySelector('.header-btn')
const header_menu = document.querySelector('.header-menu')
header_btn.addEventListener('click', () => {
  if (header_menu.style.display != 'block') {
    header_menu.style.display = 'block'
    header_btn.innerHTML = '<i class="fas fa-times"></i>'
  } else {
    header_menu.style.display = 'none'
    header_btn.innerHTML = '<i class="fas fa-bars"></i>'
  }
})