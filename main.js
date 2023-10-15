 // section  A form
//  const themeToggle=document.querySelector('.toggle-mode');
 const formName = document.getElementById("name");
 const email = document.getElementById("email");
 const form = document.getElementById("form");
 const age = document.getElementById("age");

//  Theme toggler
 let darkMode = localStorage.getItem('darkMode'); 

 const darkModeToggle = document.querySelector('.toggle-mode');
 
 const enableDarkMode = () => {
   document.body.classList.add('darkmode');
   darkModeToggle.innerText="Light-Mode"
   localStorage.setItem('darkMode', 'enabled');
 }
 
 const disableDarkMode = () => {
   document.body.classList.remove('darkmode');
   darkModeToggle.innerText="Dark-Mode"
   localStorage.setItem('darkMode', 'disabled');
 }
 if (darkMode === 'enabled') {
   enableDarkMode();
 }
 darkModeToggle.addEventListener('click', () => {
   darkMode = localStorage.getItem('darkMode'); 
   if (darkMode !== 'enabled') {
     enableDarkMode();
   } else {  
     disableDarkMode(); 
   }
 });

 form.addEventListener('submit', function (e) {
     e.preventDefault();
     check();

 })
 function check() {

     const formNameVal = formName.value.trim();
     const emailVal = email.value.trim();
     const agedata = age.value;

     if (agedata === '' || agedata < 1) {
         age.style.border = "2px solid red";
         alert("Age should be greater than 0 or valid age")
     }
     else if (agedata !== '') {
         age.style.border = "2px solid #000";

     }
     if (formNameVal === '') {
         formName.style.border = "2px solid red";
         alert("Name cannot be blank")
     }
     else if (formNameVal !== '') {
         formName.style.border = "2px solid #000";

     }
     if (emailVal === '') {
         email.style.border = "2px solid red";
         alert("Enter your email it is required")
     }
     else if (emailVal !== '') {
         email.style.border = "2px solid #000";


     }

 }
 // Sectin B Odd Even 
 const inputOE = document.querySelector('.oddEven .input')
 const btnCOE = document.querySelector('.oddEven .btn')
 btnCOE.addEventListener('click', () => {
     let val = inputOE.value.trim();
     const dataOE = document.querySelector('.oddEven .data')
     if (!val) {
         alert("Enter a number")
     }
     else if (val && val % 2 === 0) {
         dataOE.innerHTML = "Even number"
     }
     else if (val && val % 2 !== 0) {
         dataOE.innerHTML = "Odd number"
     }

 })

 //  Number Guessing game
 const inputNG = document.querySelector('.numberGuess .input')
 const btnNG = document.querySelector('.numberGuess .btn')
 const btn2NG = document.querySelector('.numberGuess .btn2')
 let lucky = Math.floor(Math.random() * 11) + 1
 let cnt = 0;
 const dataNG = document.querySelector('.numberGuess .data')
 // console.log(lucky)  for debugging
 btnNG.addEventListener('click', () => {
     if (cnt < 3) {
         let val = inputNG.value.trim();
         if (!val || val < 1 || val > 10) {
             alert("Enter valid number between 1 to 10")
             dataNG.innerHTML = ""
         }
         else if (val == lucky) {
             dataNG.innerHTML = "You guessed it right 🔥"
             lucky = Math.floor(Math.random() * 11)
             inputNG.value = ""
         }
         else if (val < lucky) {
             dataNG.innerHTML = "Number you guessed is low"
         }
         else if (val > lucky) {
             dataNG.innerHTML = "Number you guessed is high"
         }
         cnt++;
     }
     else {
         alert("You have reached max attempt click restart button")
         dataNG.innerHTML = ""
         inputNG.value = ""
     }
 }

 )
 btn2NG.addEventListener('click', () => {
     cnt = 0;
     lucky = Math.floor(Math.random() * 11)
     dataNG.innerHTML = ""
     inputNG.value = ""
 })

 //  Toggle data list
 const fruits = ['Mango', 'Apple', 'Blueberry', 'Melon', 'Lichhi', 'Coconut']
 const ol = document.querySelector('.ordered_list')
 let count = 0;
 const fruitlist = () => {
     if (count < 1) {
         fruits.forEach(fruit => {
             const li = document.createElement('li');
             li.innerText = fruit
             ol.appendChild(li)
         })
     }
     count++;

 }

 // Section C
//  Toggle Paragraph
 const btnToggle = document.querySelector('.section_C .btn')
 const dataToggle = document.querySelector(".section_C .toggle_data")
 btnToggle.addEventListener('click', () => {
     dataToggle.classList.toggle('toggle')
 })


//  Change color of box by selecting color
 const color = document.getElementById('select-color');
 const box = document.querySelector('.color-box')
 color.addEventListener('change', () => {
     box.style.backgroundColor = color.value

 })

//  Image gallery
let sliderImages = document.querySelectorAll(".slide"),
arrowLeft = document.querySelector("#arrow-left"),
arrowRight = document.querySelector("#arrow-right"),
current = 0;

// Clear all images
function reset() {
for (let i = 0; i < sliderImages.length; i++) {
  sliderImages[i].style.display = "none";
}
}

// Init slider
function startSlide() {
reset();
sliderImages[0].style.display = "block";
}

// Show prev
function slideLeft() {
reset();
sliderImages[current - 1].style.display = "block";
current--;
}

// Show next
function slideRight() {
reset();
sliderImages[current + 1].style.display = "block";
current++;
}

// Left arrow click
arrowLeft.addEventListener("click", function() {
if (current === 0) {
  current = sliderImages.length;
}
slideLeft();
});

// Right arrow click
arrowRight.addEventListener("click", function() {
if (current === sliderImages.length - 1) {
  current = -1;
}
slideRight();
});

startSlide();


// nav bar color

