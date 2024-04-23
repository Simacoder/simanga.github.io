/*--------- toggle navbar icon  ------------- */

var menuIcon = document.querySelector('#menu-icon');
var navbar = document.querySelector('.navbar');
// console.log(menuIcon); 


menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-xmark');
    navbar.classList.toggle('active');
    
}

/*--------- scroll action active  link  ------------- */

var sections = document.querySelectorAll('section');
var navLinks = document.querySelectorAll('header nav a');

window.onscroll =() => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLinks.forEach.apply(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');

            });
        };
    });


    /*------------- stiicky navbar ---------------- */

    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);


    /*------------- remove icon navbar ---------------- */

    menuIcon.classList.remove('fa-xmark');
    navbar.classList.remove('active');



};

/*--------- Scroll reveal js ------------- */

ScrollReveal({ 
    distance: '80px',
    duration: 2000,
    delay: 200,
 });

 ScrollReveal().reveal('.home-content, heading', { origin: 'top' });
 ScrollReveal().reveal('.home-img, .contact form', { origin: 'bottom' });
 ScrollReveal().reveal('.home-contact h1, .about-img', { origin: 'left' });
 ScrollReveal().reveal('.home-contact p, .about-content', { origin: 'right' });

 /*--------- Typed Js  ------------- */

 var typed = new Typed('.multiple-text', {
    strings: ['Backend Engineer','Data Engineer', 'Data Scientist'],
    typeSpeed: 70,
    backSpeed: 70,
    backDelay: 1000,
    loop: true,
 });

  /*--------- Render Js  ------------- */

  var xhr = new XMLHttpRequest();
  var about = document.getElementsByClassName('about-content');

  xhr.onload = function() {
    if(this.status === 200){
        about.innerHTML = xhr.responseText;
    } else {
        console.warn('Did not recieve 200 OK from response!');
    }
  };
  xhr.open('get', 'index.html');
  xhr.send();

