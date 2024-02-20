const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav_links')
const mobile = document.querySelector('.mbl_links');


hamburger.addEventListener('click', function(){
    hamburger.classList.toggle('is-active')
    navMenu.classList.toggle('is-active')
    mobile.classList.toggle('mbl_links')

})
document.querySelectorAll('.nav-link').forEach(n => n.addEventListener(
    "click", () => {
        hamburger.classList.remove('is-active')
        navMenu.classList.remove('is-active')
        mobile.classList.remove('notvanish')
    }
))


// mobile.addEventListener('click', function(){
//     mobile.classList.toggle('vanish')
// })