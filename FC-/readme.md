
NVM - Node Version Manager
===
Node.js의 버전을 관리해준다.

Nodemon
===
Node를 실시간으로 재시작 한다.



객체지향언어
===
`객체 = 속성(명사, 변수) + 행위(동사, 메소드)`<br/>
사람이 보는 관점으로 본다.<br/>
문제점 - 멀티스레드에 문제가 있다. 속도가 느림
---

Cookie
===
클라이언트의 파일 형태로 저장이 된다. <br/>
**보안**에 관련된 정보(로그인 등)는 입력하지 않는다. 

Session
===
서버에 키, 값 형태로 저장된다.(로그인, 장바구니)

MariaDB
===
mySQL 상위 버전이다.

SequelPro
===
MariaDB / mySQL을 GUI로 실행한다.

ubuntu
===
ssh에 접속하고 
sudo apt-get update 기본적인 툴을 설치하는 듯
https://www.google.co.kr/url?sa=t&rct=j&q=&esrc=s&source=web&cd=1&ved=0ahUKEwihzOnP4uDXAhWBrJQKHfa7DhAQFgglMAA&url=https%3A%2F%2Fblog.outsider.ne.kr%2F346&usg=AOvVaw0_O2chzyWaQn4kqktzJ6_E

Express-Generator
===
node 서버를 쉽게 만들어 준다?

Pm2
===
npm module pm2 이것은 terminal을 종료해도 서버를 계속 켜준다.

Connection Pooling
===
Connection 비용이 크기때문에 돌려 받는다.
ex) 커피 - 100개의 잔을 미리 준비하여 100개 이후엔 받지 않고 여유가 생길 때 처리한다. 
//connectionLimit: 100
pool을 사용하고 release();를 사용하여 반납한다.

동기 / 비동기
===
***동기***
console.log("Hello");
console.log("World");
> Hello World
---
***비동기***
setTimeout(() => console.log("World2"), 1000); //(1초 뒤에 출력)
console.log("Hello");
> Hello World2
---