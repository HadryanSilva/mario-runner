const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const cloud = document.querySelector('.clouds');
let score = 0;

const jump = () => {
    mario.classList.add('jump');

    setTimeout(() => {
        mario.classList.remove('jump');
    }, 500)
}

const loop = setInterval(() => {

    const cloudPosition = cloud.offsetLeft;
    const pipePosition =  pipe.offsetLeft;
    const marioPosition = window.getComputedStyle(mario).bottom.replace("px", "");
    
    
if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {

        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        mario.style.animation = 'none';
        mario.style.left = `${marioPosition}px`;

        mario.src = './images/game-over.png';
        mario.style.width = '75px';
        mario.style.marginLeft = '50px';
        cloud.style.animation = 'none';
        cloud.style.left = `${cloudPosition}px`;

        clearInterval(loop);
    }

    score += 2;
    document.getElementById('output-score').innerHTML = "Score: " + score;

}, 10)



document.addEventListener('keydown', jump);
