// for moving to second project

let dulu = document.querySelector('.right-one');
 
dulu.onclick = function() { 
  document.querySelector('.dulu-page').style.display = 'none'; 
  dulu.style.display = 'none';
  document.querySelector('.right-two').style.display = 'block'; 
  document.querySelector('.left-one').style.display = 'none'; 
  document.querySelector('.left-two').style.display = 'block'; 
  document.querySelector('.left-two').style.opacity = "1"; 


};

// for moving to third project

let pageTwo = document.querySelector('.right-two');

pageTwo.onclick = function() {
  document.querySelector('.constructorb-page').style.display = 'none'; 
  pageTwo.style.display = 'none';
  document.querySelector('.right-three').style.display = 'block'; 
  document.querySelector('.right-three').style.opacity = "0.5"; 

}

// for moving back to first project

let pageBackOne = document.querySelector('.left-two');

pageBackOne.onclick = function() {
  document.querySelector('.dulu-page').style.display = 'block'; 
  dulu.style.display = 'block';
  document.querySelector('.right-two').style.display = 'none'; 
  document.querySelector('.left-one').style.display = 'block'; 
  document.querySelector('.left-two').style.display = 'none'; 
  document.querySelector('.left-one').style.opacity = "0.5"; 

}

let pageBackTwo = document.querySelector('.left-three');

pageBackTwo.onclick = function() {
  document.querySelector('.constructorb-page').style.display = 'block'; 
  document.querySelector('left').style.display = 'block';
  document.querySelector('.right-three').style.display = 'none'; 
  document.querySelector('.left-two').style.display = 'block'; 
  document.querySelector('.left-three').style.display = 'none'; 
  document.querySelector('.left-two').style.opacity = "0.5"; 

}
