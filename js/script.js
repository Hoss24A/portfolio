// python progress circular bar 
let pythonProgress = document.querySelector(".python"),
  pythonValue = document.querySelector(".python-progress");

let pythonStartValue = 0,
  pythonEndValue = 90,
  pythonspeed = 30;

let progresspython = setInterval(() => {
  pythonStartValue++;

  pythonValue.textContent = `${pythonStartValue}%`;
  pythonProgress.style.background = `conic-gradient(#fca61f ${
    pythonStartValue * 3.6
  }deg, #ededed 0deg)`;

  if (pythonStartValue == pythonEndValue) {
    clearInterval(progresspython);
  }
}, pythonspeed);

// cpp progress circular bar 
let cppProgress = document.querySelector(".cpp"),
  cppValue = document.querySelector(".cpp-progress");

let cppStartValue = 0,
  cppEndValue = 75,
  jsspeed = 30;

let progressjs = setInterval(() => {
  cppStartValue++;

  cppValue.textContent = `${cppStartValue}%`;
  cppProgress.style.background = `conic-gradient(#7d2ae8 ${
    cppStartValue * 3.6
  }deg, #ededed 0deg)`;

  if (cppStartValue == cppEndValue) {
    clearInterval(progressjs);
  }
}, jsspeed);

// java progress circular bar 
let javaProgress = document.querySelector(".java"),
  javaValue = document.querySelector(".java-progress");

let javaStartValue = 0,
  javaEndValue = 80,
  javaspeed = 30;

let progressjava = setInterval(() => {
  javaStartValue++;

  javaValue.textContent = `${javaStartValue}%`;
  javaProgress.style.background = `conic-gradient(#20c997 ${
    javaStartValue * 3.6
  }deg, #ededed 0deg)`;

  if (javaStartValue == javaEndValue) {
    clearInterval(progressjava);
  }
}, javaspeed);

// web progress circular bar 
let webProgress = document.querySelector(".web"),
  webValue = document.querySelector(".web-progress");

let webStartValue = 0,
  webEndValue = 30,
  webspeed = 30;

let progressweb = setInterval(() => {
  webStartValue++;

  webValue.textContent = `${webStartValue}%`;
  webProgress.style.background = `conic-gradient(#3f396d ${
    webStartValue * 3.6
  }deg, #ededed 0deg)`;

  if (webStartValue == webEndValue) {
    clearInterval(progressweb);
  }
}, webspeed);


// filter using javascript
$(document).ready(function () {
  $(".filter-item").click(function () {
    const value = $(this).attr("data-filter");
    if (value == "all") {
      $(".post").show("1000");
    } else {
      $(".post")
        .not("." + value)
        .hide("1000");
      $(".post")
        .filter("." + value)
        .show("1000");
    }
  });
});


// javascript for sticky navbar even if u scroll the navbar will be fixed
document.addEventListener("DOMContentLoaded", function(){
  window.addEventListener('scroll', function() {
      if (window.scrollY > 50) {
        document.getElementById('navbar-top').classList.add('fixed-top');
        // add padding top to show content behind navbar
        navbar_height = document.querySelector('.navbar').offsetHeight;
        document.body.style.paddingTop = navbar_height + 'px';
      } else {
        document.getElementById('navbar-top').classList.remove('fixed-top');
         // remove padding top from body
        document.body.style.paddingTop = '0';
      } 
  });
}); 


// adding funtionality to back to top button 

//Get the button
let mybutton = document.getElementById("btn-back-to-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};
function scrollFunction() {
  if (
    document.body.scrollTop > 20 ||
    document.documentElement.scrollTop > 20
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click",function(){
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});