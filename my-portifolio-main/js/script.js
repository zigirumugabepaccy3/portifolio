'use strict'
////////////////////selection//////////////
console.log('script')
const nav = document.querySelector('.navbar')
const slider = document.querySelector('.slider')
const slides = document.querySelectorAll('.slide-component')
const rightBtn = document.querySelector('.arrow-left')
const leftBtn = document.querySelector('.arrow-right')
const link = document.querySelector('.nav-link')
const footLink = document.querySelector('.flink')
const humberger = document.querySelector('.humberger-icon')
const closeHumberger = document.querySelector('.close')
const humbergerContainer = document.querySelector('.humberger-container')
const resNav = document.querySelector('.reponsive-nav')
// ================implementing scroll to clicked section section==============//
// ----------------navigation----------------//
nav.addEventListener('click', function(e){
	e.preventDefault()
	const link = e.target
	console.log(link)
	if(link.classList.contains('nav-link')){
	const linkId = link.getAttribute('href')
	document.querySelector(linkId).scrollIntoView({behavior: 'smooth'})
	}
})
resNav.addEventListener('click', function(e){
	e.preventDefault()
	const link = e.target
	console.log(link)
	if(link.classList.contains('nav-link')){
	const linkId = link.getAttribute('href')
	resNav.scrollIntoView({behavior: 'smooth'})
	humbergerContainer.style.visibility = 'hidden'
	humbergerContainer.classList.remove('active')
	humbergerContainer.style.left = `transformX(-100%)`
	humberger.style.visibility = 'visible'
}
})
// -----------footer link--------------------//
footLink.addEventListener('click', function(e){
	e.preventDefault()
	if(e.target.classList.contains('nav-link')){
		const link = e.target
		const linkId = link.getAttribute('href')
		document.querySelector(linkId).scrollIntoView({behavior: 'smooth'})
	}
})
// ================implementing slide section==============//
///////////////////////
slides.forEach((slide, i) =>{
	slide.style.transform = `translateX(${i * 100}%)`
})
let curSlide = 0
const toSlide = function(s){
	slides.forEach((slide, i)=> slide.style.transform = `translateX(${(i - s) * 100}%)`)
}
rightBtn.addEventListener('click', function(e){
	e.preventDefault()
	if(curSlide === slides.length - 1) return
	else {
		curSlide++
	}
	toSlide(curSlide)
})

leftBtn.addEventListener('click', function(e){
	e.preventDefault()
	if(curSlide === 0) return
	else {
		curSlide--
	}
	toSlide(curSlide)
})
// ==========================implementation humberger functionality==================//
humberger.addEventListener('click', function(){
	console.log('clicked')
	console.log(humbergerContainer)
	humbergerContainer.style.visibility = 'visible'
	humbergerContainer.classList.add('active')
	console.log("clicked")
	humberger.style.visibility = 'hidden'
})
closeHumberger.addEventListener('click', function(){
	console.log(humbergerContainer)
	humbergerContainer.style.visibility = 'hidden'
	humbergerContainer.classList.remove('active')
	humberger.style.visibility = 'visible'
})

// form validation
let error = 0;
let emailpattern = /[a-zA-Z0-9_.]{2,20}[@][a-zA-Z]{2,10}[.][a-zA-Z]{2,5}/;
let fname = document.getElementById("fname");
let lname = document.getElementById("lname");
let email = document.getElementById("email");
let textarea = document.getElementById("textarea");
//declaration of error message
let error_name = document.getElementById("error_name");
function formvalidation() {
  if (fname.value == "") {
    error_fname.innerHTML = "Please enter your name";
    error = 1;
  }
  if (lname.value == "") {
    error_lname.innerHTML = "Please enter your subject";
    error = 1;
  }
  if (email.value == "") {
    error_email.innerHTML = "Please enter your email";
    error = 1;
  }
  else if (!emailpattern.test(email.value)) {
    error_email.innerHTML = "Invalid email address";
    error = 1;
  }
  
  if (textarea.value == "") {
    error_textarea.innerHTML = "Please enter your message";
    error = 1;
  }
  if (error == 0) {
    alert("Message sent successfully");
 }
}
