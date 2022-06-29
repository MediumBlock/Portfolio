// for moving to second project

let dulu = document.querySelector('.right-one');
 
dulu.onclick = function() { 
  document.querySelector('.dulu-page').style.display = 'none'; 
  dulu.style.display = 'none';
  document.querySelector('.right-two').style.display = 'block'; 
};

// for moving to third project

let pageTwo = document.querySelector('.right-two');

pageTwo.onclick = function() {
  document.querySelector('.constructorb-page').style.display = 'none'; 
  pageTwo.display = 'none';
  document.querySelector('.right-three').style.display = 'block'; 
  document.querySelector('.right-three').style.opacity = "0.5"; 



}