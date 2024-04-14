// Holder
const contentTextHolder = document.querySelector('.content-text');
const contentImageHolder = document.querySelector('.content-img');

// Navigation Control
const backArrow = document.querySelector('.back-arrow');
const nextArrow = document.querySelector('.next-arrow');

// Current Index

var currentIndex = 0;

// Functions
function nextArrowHandler() {
  if(checkMinMax(currentIndex)) {
    return
  }
  else {
    currentIndex = currentIndex + 1;
    contentChangeHandler(currentIndex);
    console.log('This is the current index: ' + currentIndex);
  }
}

function backArrowHandler() {
  if(checkMinMax(currentIndex - 1)) {
    return
  }
  else {
    currentIndex = currentIndex - 1;
    contentChangeHandler(currentIndex);
    console.log('This is the current index: ' + currentIndex);
  }
}

function contentChangeHandler(idx) {
  contentImageHolder.innerHTML = data[idx].img;
  contentTextHolder.innerHTML = data[idx].content;
}

function checkMinMax(idx) {
  return idx >= data.length - 1 || idx < 0;
}

// DataSet

var data = [
  {
    img: `<img src="./assets/img/what-we-do/wwd-web-development.svg" alt="Web Development">`,
    content: `
    <h3>Web Development</h3>
    <p>
      Development agency dedicated to making a
        services ranging from Figma design to full-stack
        development. Our mission is to deliver exceptional web
        solutions crafted with innovation and expertise. Let's
        elevate your online presence 
      </p>
    `
  },
  {
    img: `<img src="./assets/img/what-we-do/wwd-web-design.svg" alt="Web Design">`,
    content: `
    <h3>Web Design</h3>
    <p>
      Design agency dedicated to making a
        services ranging from Figma design to full-stack
        development. Our mission is to deliver exceptional web
        solutions crafted with innovation and expertise. Let's
        elevate your online presence 
      </p>
    `
  },
  {
    img: `<img src="./assets/img/what-we-do/wwd-seo.svg" alt="Web CEO">`,
    content: `
    <h3>CEO</h3>
    <p>
      Design agency dedicated to making a
        services ranging from Figma design to full-stack
        development. Our mission is to deliver exceptional web
        solutions crafted with innovation and expertise. Let's
        elevate your online presence 
      </p>
    `
  },
  {
    img: `<img src="./assets/img/what-we-do/wwd-video-editing.svg" alt="Web CEO">`,
    content: `
    <h3>Video Editing</h3>
    <p>
      Design agency dedicated to making a
        services ranging from Figma design to full-stack
        development. Our mission is to deliver exceptional web
        solutions crafted with innovation and expertise. Let's
        elevate your online presence 
      </p>
    `
  },
]
