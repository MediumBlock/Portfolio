// for moving to second project

let dulu = document.querySelector('.right-one');
 
dulu.onclick = function() { 
  document.querySelector('.dulu-page').style.display = 'none'; 
  document.querySelector('.constructorb-page').style.display = 'block'; 
  dulu.style.display = 'none';
  document.querySelector('.right-two').style.display = 'block'; 
  document.querySelector('.left-one').style.display = 'none'; 
  document.querySelector('.left-two').style.display = 'block'; 
  document.querySelector('.left-two').style.opacity = "1";
  document.getElementById("dulutitle").style.display = 'none';
  document.getElementById("consttitle").style.display = 'inline';
  document.getElementById("constructp").style.display = 'inline';
  document.getElementById("dulup").style.display = 'none';

  



};

// for moving to third project

let pageTwo = document.querySelector('.right-two');

pageTwo.onclick = function() {
  document.querySelector('.constructorb-page').style.display = 'none'; 
  pageTwo.style.display = 'none';
  document.querySelector('.right-three').style.display = 'block'; 
  document.querySelector('.right-three').style.opacity = "0.5"; 
  document.querySelector('.left-three').style.display = "block"; 
  document.querySelector('.left-two').style.display = "none"; 
  document.querySelector('.left-three').style.opacity = "1"; 
  document.getElementById("consttitle").style.display = 'none';
  document.getElementById("fotomattitle").style.display = 'inline';
  document.getElementById("constructp").style.display = 'none';
  document.getElementById("fotomatp").style.display = 'inline';

}

// for moving back to first project

let pageBackOne = document.querySelector('.left-two');

pageBackOne.onclick = function() {
  document.querySelector('.left-one').style.display = 'block'; 
  document.querySelector('.right-one').style.display = 'block'; 
  document.querySelector('.left-two').style.display = 'none'; 
  document.querySelector('.right-two').style.display = 'none'; 
  document.querySelector('.left-three').style.display = 'none'; 
  document.querySelector('.right-three').style.display = 'none'; 
  document.querySelector('.left-one').style.opacity = "0.5"; 
  document.querySelector('.constructorb-page').style.display = 'none';
  document.querySelector('.dulu-page').style.display = 'block'; 
  document.getElementById("consttitle").style.display = 'none';
  document.getElementById("dulutitle").style.display = 'inline';
  document.getElementById("constructp").style.display = 'none';
  document.getElementById("dulup").style.display = 'inline';
 


}

let pageBackTwo = document.querySelector('.left-three');

pageBackTwo.onclick = function() {
  document.querySelector('.constructorb-page').style.display = 'block'; 
  document.querySelector('.right-two').style.display = 'block';
  document.querySelector('.right-three').style.display = 'none'; 
  document.querySelector('.left-two').style.display = 'block'; 
  document.querySelector('.left-three').style.display = 'none'; 
  document.querySelector('.left-two').style.opacity = "1"; 
  document.querySelector('.left-one').style.display = 'none'; 
  document.querySelector('.right-one').style.display = 'none'; 
  document.getElementById("consttitle").style.display = 'inline';
  document.getElementById("fotomattitle").style.display = 'none';
  document.getElementById("constructp").style.display = 'inline';
  document.getElementById("fotomatp").style.display = 'none';


}
