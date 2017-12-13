
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
---
```sql
create table member(
	id varchar(20) not null,
	name varchar(10) not null,
	emaill varchar(100) not null,
	tel varchar(13) not null,
	primary key(id)
);
```
query에 member table을 생성하고 컨텐츠를 넣는다.
마지막에 primary 키를 설정해줌.

ubuntu AWS
===
pem 폴더에 들어가서
ssh에 접속 (aws > instances > connect)
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

sql
===
brew mariaDB, node / sequel / npm express-generation, mysql / 
---

REST 방식
===
Get에 URL요청 = SELECT
Post URL요청 = INSERT , UPDATE, DELETE
Put URL요청 = UPDATE
Delete URL요청 = DELETE
---

get /users : select * from users
get /users/id : select * from users id=?
post / users : insert
post / users/id : update
post / users/id/del : delete


GitHub Fork
===
fork는 원하는 깃허브에 접속하여 포크를 누르면 그 깃허브의 repository가 내 깃허브에 연결이 된다.


Nodejs 빠르게 빌드하기
===
1. npm i express-generator
2. express --ejs
3. app.js*
4. npm i nodemon -> nodemon app.js
5. npm i mysql
6. mysql.server start
7. sequel pro 로 접속하기.

```js
//app.js*파일에 추가 코딩
//마지막줄 전에
app.listen("3000");
console.log("Server Started!!!");
```

노드 서버를 간단하게 만들 수 있다.

터널링 알아보기
===