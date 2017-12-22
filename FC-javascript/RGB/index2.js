// 색상 만들기 (랜덤)
function random255() {
  return Math.floor(Math.random() * 256);
}
function random3() {
  return Math.floor(Math.random() * 3);
}

// 색상 부여하기 (랜덤)
function randomColor() {
  return `rgb(${random255()}, ${random255()}, ${random255()})`;
}

let stage;
let problem;
let correctAnswer;

function nextStage() {
  stage++;
  problem = [randomColor(), randomColor(), randomColor()];
  correctAnswer = random3();
}

function draw() {
  document.querySelectorAll('.box').forEach((el, index) => {
    el.style.backgroundColor = problem[index];
  });
  document.querySelector('.rgb-text').textContent = problem[correctAnswer];
  document.querySelector('.score').textContent = `score: ${stage}`;
}

function init() {
  stage = 0;
  problem = [randomColor(), randomColor(), randomColor()];
  correctAnswer = random3();
}

let aa;

document.querySelectorAll('.box').forEach((el, index) => {
  el.addEventListener('click', e => {
    if (index === correctAnswer) {
      document.querySelector('.correct').classList.add('show');
      el.classList.add('show');
      aa = el;
      nextStage();
      // draw();

    } else {
      document.querySelector('.wrong').classList.add('show');
      document.querySelector('.modal-score').textContent = `score: ${stage}`;
      el.classList.add('show');
      aa = el;
      init();
      // draw();
    }


  });
});
document.querySelectorAll('.modal-button').forEach((el, index) => {
  el.addEventListener('click', e => {
    el.classList.remove('show');
    aa.classList.remove('show');
    el.parentElement.parentElement.classList.remove('show');
    draw();
  })
})


init();
draw();
