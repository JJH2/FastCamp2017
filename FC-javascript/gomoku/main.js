// reset 
document.querySelector('.reset > button').addEventListener('click', function() {
    window.location.reload();
})

// 오목판 그리기
const arr = Array(256);
arr.fill('j');
arr.forEach(item => {
    const gamePlace = document.querySelector(".template");
    const makeTemplate = document.createElement('div');
    makeTemplate.className = 'box';
    gamePlace.appendChild(makeTemplate);
});


// 돌 색상 및 순서 바꾸기
let white = 'stone white';
let black = 'stone black';
let changeUser = white;

// 좌표 값
let whitePointer = [];
let blackPointer = [];


const boxLength = document.querySelectorAll('.box');

for (let i = 0; i < boxLength.length; i++) {
    boxLength[i].addEventListener('click', function () {
        // if => 돌이 있다면 false

        if (!boxLength[i].hasChildNodes('div')) {
            const makeStone = document.createElement('div');
            makeStone.className = changeUser;
            boxLength[i].appendChild(makeStone);
            // change stone color
            if (changeUser === white) {
                whitePointer.push(i);
                changeUser = black;
            } else {
                blackPointer.push(i);
                changeUser = white;
            }
        }
        whitePointer.sort((x, y) => x - y);
        blackPointer.sort((x, y) => x - y);

        console.log(`white: ${whitePointer} black ${blackPointer}`);

        for (let i = 0; i < whitePointer.length; i++) {
            // 오른쪽
            if (whitePointer.includes(whitePointer[i] + 1) && whitePointer.includes(whitePointer[i] + 2) && whitePointer.includes(whitePointer[i] + 3) && whitePointer.includes(whitePointer[i] + 4)) {
                alert('white 승리');
            }
            // 왼쪽
            if (whitePointer.includes(whitePointer[i] + 16) && whitePointer.includes(whitePointer[i] + 32) && whitePointer.includes(whitePointer[i] + 48) && whitePointer.includes(whitePointer[i] + 64)) {
                alert('white 승리');
            }
            // 오른쪽 대각선
            if (whitePointer.includes(whitePointer[i] + 15) && whitePointer.includes(whitePointer[i] + 30) && whitePointer.includes(whitePointer[i] + 45) && whitePointer.includes(whitePointer[i] + 60)) {
                alert('white 승리');
            }
            // 왼쪽 대각선
            if (whitePointer.includes(whitePointer[i] + 17) && whitePointer.includes(whitePointer[i] + 34) && whitePointer.includes(whitePointer[i] + 51) && whitePointer.includes(whitePointer[i] + 68)) {
                alert('white 승리');
            }
        }
        for (let i = 0; i < blackPointer.length; i++) {
            // 오른쪽
            if (blackPointer.includes(blackPointer[i] + 1) && blackPointer.includes(blackPointer[i] + 2) && blackPointer.includes(blackPointer[i] + 3) && blackPointer.includes(blackPointer[i] + 4)) {
                alert('black 승리');
                
            }
            // 왼쪽
            if (blackPointer.includes(blackPointer[i] + 16) && blackPointer.includes(blackPointer[i] + 32) && blackPointer.includes(blackPointer[i] + 48) && blackPointer.includes(blackPointer[i] + 64)) {
                alert('black 승리');
            }
            // 오른쪽 대각선
            if (blackPointer.includes(blackPointer[i] + 15) && blackPointer.includes(blackPointer[i] + 30) && blackPointer.includes(blackPointer[i] + 45) && blackPointer.includes(blackPointer[i] + 60)) {
                alert('black 승리');
            }
            // 왼쪽 대각선
            if (blackPointer.includes(blackPointer[i] + 17) && blackPointer.includes(blackPointer[i] + 34) && blackPointer.includes(blackPointer[i] + 51) && blackPointer.includes(blackPointer[i] + 68)) {
                alert('black 승리');
            }
        }
    })
}
