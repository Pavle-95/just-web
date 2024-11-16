// Holder
const contentTextHolder = document.querySelectorAll('.content-text');
const contentImageHolder = document.querySelectorAll('.content-img');

// Navigation Control
const backArrow = document.querySelector('.back-arrow');
const nextArrow = document.querySelector('.next-arrow');

// Current Index
var data = document.querySelectorAll('.content-text');
var currentIndex = 0;

// Initial Start of function 
contentChangeHandler(currentIndex);

// Functions
function nextArrowHandler() {
  if(checkMinMax(currentIndex)) {
    return
  }
  else {
    currentIndex = currentIndex + 1;
    contentChangeHandler(currentIndex);
  }
}

function backArrowHandler() {
  if(checkMinMax(currentIndex - 1)) {
    return
  }
  else {
    currentIndex = currentIndex - 1;
    contentChangeHandler(currentIndex);
  }
}

function contentChangeHandler(idx) {
  for(let i = 0; i < contentImageHolder.length; i++) {
    if(i < idx) {
        contentImageHolder[i].style.position = "absolute";
        contentTextHolder[i].style.position = "absolute";
        contentImageHolder[i].style.transform = "translateX(-3000px)";
        contentTextHolder[i].style.transform = "translateX(-3000px)";
    } else if(i === idx) {
        contentImageHolder[i].style.position = "relative";
        contentTextHolder[i].style.position = "relative";
        contentImageHolder[i].style.transform = "translateX(0px)";
        contentTextHolder[i].style.transform = "translateX(0px)";
      } else {
        contentImageHolder[i].style.position = "absolute";
        contentTextHolder[i].style.position = "absolute";
        contentImageHolder[i].style.transform = "translateX(3000px)";
        contentTextHolder[i].style.transform = "translateX(3000px)";
      }
}

}

function checkMinMax(idx) {
  return idx >= data.length - 1 || idx < 0;
}