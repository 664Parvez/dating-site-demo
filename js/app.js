// Responsive Navbar
let bar = document.querySelector('.hambar_icon');
bar.addEventListener('click', function() {
    let sideBar = document.querySelector('.responsive_menu');
    sideBar.style.marginLeft = '0px';
})
let cross = document.querySelector('.close_icon');
cross.addEventListener('click', function(e) {
    let sideBar = document.querySelector('.responsive_menu');
    sideBar.style.marginLeft = '100%';

    e.preventDefault();
})


// Copywrite Year
const year_text = document.getElementById("copywrite_text")

const year = new Date().getFullYear()
year_text.innerHTML = year