// Game Ball
const game = document.querySelector('.game-ball');
const gameBall = document.querySelectorAll('#game-ball');
const totalBallsHolder = document.querySelector('.total-balls');
const poppedBallsHolder = document.querySelector('.poped-balls');
var poppedDall = 0;

totalBallsHolder.innerText = gameBall.length;
poppedBallsHolder.innerText = poppedDall;


function gameStart() {
  game.style.opacity = '1';
  game.style.pointerEvents = 'auto';
}

function gameEnd() {
  game.style.opacity = '0';
  game.style.pointerEvents = 'none';
}

function popTheBall(ball) {
  ball.classList.add('isPopped');
  poppedDall++;
  poppedBallsHolder.innerText = poppedDall;
}

setTimeout(() => {
  gameStart();
}, 31000)
