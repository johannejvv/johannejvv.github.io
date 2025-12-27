let moreInfo1 = document.getElementById('more-info-1'); //the button
let info1 = document.getElementById('info-1'); //the text
let moreInfo2 = document.getElementById('more-info-2'); 
let info2 = document.getElementById('info-2');
let moreInfo3 = document.getElementById('more-info-3');
let info3 = document.getElementById('info-3');

let clicked1 = false;
let clicked2 = false;
let clicked3 = false;

function changeInfo1() {
  if (clicked1 === false) { //show info
    info1.style.display = 'block'; 
  } else if (clicked1 === true) {  //hide info
    info1.style.display = 'none'  
  }
  clicked1 = !clicked1;
}

function changeInfo2() {
  if (clicked2 === false) { //show info
    info2.style.display = 'block'; 
  } else if (clicked2 === true) {  //hide info
    info2.style.display = 'none'  
  }
  clicked2 = !clicked2;
}

function changeInfo3() {
  if (clicked3 === false) { //show info
    info3.style.display = 'block'; 
  } else if (clicked3 === true) {  //hide info
    info3.style.display = 'none'  
  }
  clicked3 = !clicked3;
}


moreInfo1.addEventListener('click', changeInfo1);
moreInfo2.addEventListener('click', changeInfo2);
moreInfo3.addEventListener('click', changeInfo3);