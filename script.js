
// navbar muncul dan hilang
hamburgerMenu.addEventListener('click', function () {
    const navigationBar = document.querySelector('header ul');
    navigationBar.classList.toggle('ul-active');

    const menuNavigationBar = document.querySelectorAll('header ul li');
    menuNavigationBar.forEach(function (menu) {
        menu.addEventListener('click', function () {
            navigationBar.classList.remove('ul-active')
        })
    })

})

// efek scroll smooth
// navbar
document.querySelectorAll('.home a').forEach(function (link) {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        })
    })
})
// swipe up

// // ANIMATION SECTION PROJECT
const fieldProject = document.querySelectorAll('.field-project');
for (let i = 0; i < fieldProject.length; i++) {
    if (window.innerWidth > 768) {
        fieldProject[i].setAttribute('data-aos-duration', '1000');
        if (i % 2 === 0) {
            fieldProject[i].setAttribute('data-aos', 'fade-up-right');
        }
        else {
            fieldProject[i].setAttribute('data-aos', 'fade-up-left');
        }
    }

    else {
        fieldProject[i].setAttribute('data-aos', 'fade-up');
        fieldProject[i].setAttribute('data-aos-duration', '700')
    }
};

















