// Game Ball
const game = document.querySelector('.game-ball');
const gameBall = document.querySelectorAll('#game-ball');
const totalBallsHolder = document.querySelector('.total-balls');
const poppedBallsHolder = document.querySelector('.popped-balls');
const contactUsFormModal = document.querySelector('.contact-us-modal')

var poppedBall = 0;

totalBallsHolder.innerText = gameBall.length;
poppedBallsHolder.innerText = poppedBall;


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
  poppedBall++;
  poppedBallsHolder.innerText = poppedBall;

  if(poppedBall === gameBall.length) {
    winTHeGame();
  }
}

function winTHeGame() {
  // Start the conffetti
  startConfettiAnimation()

  // Open Modal
  contactUsFormModal.showModal();
}

function closeModal() {
  contactUsFormModal.close();
}

setTimeout(() => {
  gameStart();
}, 31000)

function startConfettiAnimation() {
  // Create a canvas element for confetti
  const canvas = document.createElement('canvas');
  canvas.setAttribute('id', 'confetti-canvas');
  canvas.setAttribute('style', 'position: fixed; top: 0; left: 0; pointer-events: none; z-index: 9999;');
  document.body.appendChild(canvas);

  // Get the context of the canvas
  const context = canvas.getContext('2d');
  const width = window.innerWidth;
  const height = window.innerHeight;
  canvas.width = width;
  canvas.height = height;

  // Start the confetti animation
  const maxParticleCount = 150; // Set max confetti count
  const particleSpeed = 4; // Set the particle animation speed
  const colors = ["DodgerBlue", "OliveDrab", "Gold", "Pink", "SlateBlue", "LightBlue", "Violet", "PaleGreen", "SteelBlue", "SandyBrown", "Chocolate", "Crimson"];
  let streamingConfetti = false;
  let animationTimer = null;
  let particles = [];
  let waveAngle = 0;

  function resetParticle(particle) {
      particle.color = colors[Math.floor(Math.random() * colors.length)];
      particle.x = Math.random() * width;
      particle.y = -Math.random() * height; // Start from top of the screen
      particle.diameter = Math.random() * 10 + 5;
      particle.tilt = Math.random() * 10 - 10;
      particle.tiltAngleIncrement = Math.random() * 0.07 + 0.05;
      particle.tiltAngle = 0;
      return particle;
  }

  function startConfetti() {
      while (particles.length < maxParticleCount) {
          particles.push(resetParticle({}));
      }
      streamingConfetti = true;
      if (animationTimer === null) {
          (function runAnimation() {
              context.clearRect(0, 0, width, height);
              if (particles.length === 0 && !streamingConfetti) {
                  animationTimer = null;
                  return;
              }
              updateParticles();
              drawParticles();
              animationTimer = requestAnimationFrame(runAnimation);
          })();
      }
  }

  function stopConfetti() {
      streamingConfetti = false;
  }

  function drawParticles() {
      for (let i = 0; i < particles.length; i++) {
          const particle = particles[i];
          context.beginPath();
          context.lineWidth = particle.diameter;
          context.strokeStyle = particle.color;
          const x = particle.x + particle.tilt;
          const y = particle.y;
          context.moveTo(x + particle.diameter / 2, y);
          context.lineTo(x, y + particle.tilt + particle.diameter / 2);
          context.stroke();
      }
  }

  function updateParticles() {
      waveAngle += 0.01;
      for (let i = 0; i < particles.length; i++) {
          const particle = particles[i];
          if (!streamingConfetti && particle.y < 0) {
              particle.y = -Math.random() * height;
          } else {
              particle.tiltAngle += particle.tiltAngleIncrement;
              particle.x += Math.sin(waveAngle);
              particle.y += Math.cos(waveAngle) + particleSpeed;
              particle.tilt = Math.sin(particle.tiltAngle) * 15;
          }
          if (particle.x > width || particle.x < 0 || particle.y > height) {
              if (streamingConfetti && particles.length <= maxParticleCount) {
                  resetParticle(particle);
              } else {
                  particles.splice(i, 1);
                  i--;
              }
          }
      }
  }

  startConfetti();

  // Stop spawning new particles after 5 seconds
  setTimeout(stopConfetti, 6000);

  // Stop entire animation after 10 seconds
  setTimeout(() => {
    stopConfetti();
    cancelAnimationFrame(animationTimer);
    document.body.removeChild(canvas);
  }, 10000);
}
