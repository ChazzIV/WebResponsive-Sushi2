const btnMenu = document.querySelector('.btn-menu');
const menu = document.querySelector('.enlaces-header');
let on_off = true;

// Responsive Menu
btnMenu.addEventListener('click', () => {
     
    if (on_off) {
       menu.style.left = "0";
       menu.style.transition = "300ms";
       on_off = false;
    }else{
        on_off = false;
        menu.style.left = "-100%";
        menu.style.transition = "300ms";
        on_off = true;
    }
  
  });