const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');

menu.addEventListener('click', function() {
      menu.classList.toggle('is-active');
      menuLinks.classList.toggle('active');
});
///date time
var dt = new Date();
document.getElementById("datetime").innerHTML = dt.toLocaleString();

//Sign up  Vailidation
const name = document.getElementById('id01')
const form = document.querySelector('.signup-content')
const password = document.querySelector('password')
const errorElement = document.getElementById('error')

 Form.addEventListener('submit', (e) => {
       let messages = []
       if (name.value === '' || name.value == null) {
             messages.push('Name is required')
       }
       if(password.length <= 6) {
             messages.push('Password must be longer than 6 characters')
       }
       if(password.length >= 20) {
            messages.push('Password must be less than 20 characters')
      }
      if(password.value === 'password') {
            messages.push('Password cannot be password')
      }

       if (messages.length > 0) {
             e.preventDefault()
             errorElement.innerText = messages.join(',')
       }
 })
 var signup = document.getElementById('id01');

window.onclick = function(event) {
  if (event.target == signup) {
    signup.style.display = "none";
  }
}
//photos sliding 
const carouselslide = document.querySelector('.carousel-slide');
const carouselimages = document.querySelector ('.carousel-slide img');

//buttons
const prevbtn = document.querySelector('#prevbtn');
const nextbtn = document.querySelector('#nextbtn');

//Counter 
let counter = 1;
const size = carouselImages[0].clientwidth;

carouselSlide.style.transform = 'translateX(' + (-size * counter ) + 'px)';

nextbtn.addEventListener('click', ()=> {
      if (counter >= carouselImages.length -1) return;
      carouselslide.style.transition = "transform 0.4s ease-in-out";
      counter++;
      carouselslide.style.transform = 'translateX(' + (-size * counter) + 'px)';
});
prevbtn.addEventListener('click', ()=> {
      if (counter <= 0) return;
      carouselslide.style.transition = "transform 0.4s ease-in-out";
      counter--;       
      carouselslide.style.transform = 'translateX(' + (-size * counter) + 'px)';
});

carouselSlide.addEventListener('transitionend', () => {
    if (carouselImages[counter].id === 'lastclone') {
      carouselslide.style.transition = "none";
      counter = carouselImages.length -2;
      carouselslide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }  
    
      if (carouselImages[counter].id === 'firstclone') {
        carouselslide.style.transition = "none";
        counter = carouselImages.length - counter;
        carouselslide.style.transform = 'translateX(' + (-size * counter) + 'px)';
      }  
  
});