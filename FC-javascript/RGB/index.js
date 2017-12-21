// 색상 만들기 (랜덤)
function randomm255() {
  return Math.floor(Math.random() * 256);
}
// 정답이 되는 색상을 선택 (랜덤)
function randomSelect() {
  return Math.floor(Math.random() * 3);
}
// 색상 부여하기 (랜덤)
function randomColor() {
  return `rgb(${randomm255()}, ${randomm255()}, ${randomm255()})`;
}

// 초기 색상 부여
document.querySelectorAll('.box').forEach(el => {
  el.style.backgroundColor = randomColor();
})
// 초기 스코어
let result = 0;
// 초기 정답 색상
let selectColor = document.querySelectorAll('.box')[randomSelect()].style.backgroundColor;



// 클릭 이벤트 함수
document.querySelectorAll('.box').forEach(el => {
  el.addEventListener('click', e => {
    if (el.style.backgroundColor === selectColor) {
      result += 1;
    } else {
      result = 0;
    }
    // 스코어 결과 출력
    document.querySelector('.result').textContent = result;
    // 박스에 각각 색상을 부여함
    document.querySelectorAll('.box').forEach(el => {
      el.style.backgroundColor = randomColor();
    });
    // 정답 색상 선택 (랜덤)
    selectColor = document.querySelectorAll('.box')[randomSelect()].style.backgroundColor;
    // 정답 색상 코드를 출력
    document.querySelector('.selectColor').textContent = selectColor;
    // 정답 색상을 출력
    document.querySelector('.sameColor').style.backgroundColor = selectColor;
  });
});



// 초기 정답 색상 코드 출력
document.querySelector('.selectColor').textContent = selectColor;
// 정답 색상
document.querySelector('.sameColor').style.backgroundColor = selectColor;
