Module Bundler
===
1. 다수의 파일들을 소수의 파일로 추려준다. 
2. 웹브라우저가 해석할 수 있게 변환해준다.
3. **디버깅**시 번들된 파일의 위치를 알려주기 때문에 불편하다.
**그래서** [Sourcemap](https://github.com/mozilla/source-map파일이 있다.
e.g) *Webpack, *[Parcel](https://github.com/parcel-bundler/parcel), Rollup, Fusebox, Brunch

Transfiler
===
자바스크립트 최신 기술들을 사용하면 하위 브라우저에서 인식을 못 한다.
e.g. Babel 

Editor config (editor extensions)
===
개발자들의 에디터 기본 설정이 다르다.
그래서 editorconfig()를 사용하여 설정을 맞춰서 사용한다.
e.g. charset, indent 등

Debuuger (editor extensions)
===
크롬 디버거 실행 순서
1. extension -> debugger chrome
2. Cmd + Shift + P
3. launch
4. chrome
5. .vscode/launch.json 속 localhost를 맞춰준다.
6. editor 왼쪽에 있는 bug에서 play한다.



Percent Encoding
===
non-ASCII 문자를 웹 표준 인코딩 방법
```js
encodeURIComponent("한글")// "%ED%95%9C%EA%B8%80"
decodeURIComponent("%ED%95%9C%EA%B8%80")// "한글"
```

Response Status
===
응답의 성공, 실패 여부와 종류를 나타낸다.
```js
HTTP/1.1 200 OK
```
* 2xx |- 200 OK = 성공 / 201 Created = 자료 생성<br />
* 3xx - 301 Moved Permanently (Redirection) = 자료가 완전히 다른 곳으로 이동 / 302 Found (Redirection) = 자료가 일시적으로 다른 곳으로 이동 / 304 Not Modified (Cache) = 클라이언트가 이미 가지고 있던 자료가 수정되지 않았음 (그대로 사용하면 됨)<br />
* 4xx 실패 - 클라이언트 책임<br />
* 5xx 실패 - 서버 책임<br />

UI 업데이트 방식
===
1. 비관적 업데이트(pessimistic update) - 데이터가 정상적으로 요청/응답이 왔는지? (개발자 위주)
    * 해결방안 - loading indicator
2. 낙관적 업데이트 (optimistic update) - 데이터의 정보를 확인하지 않음 (사용자 위주)

인증과 인가
===
* 인증 - Authentication 서버에 내가 누구인지 알려준다.
* 인가 - Authorization 어떠한 공간에 들어가는 것(?)

request
===
1. 메소드
2. 경로
3. 헤더 - (key: value) 쌍
4. 바디 - e.p) JSON 폼에 들어있는 내용

response
===
1. 상태코드 + 상태 메시지
2. 헤더 - (key: value) 쌍
3. 바디 - e.p) 요청된 (JSON)문서가 저장

쿠키
===
### 1. 쿠키 전송 절차
> #### 서버는 브라우저에 저장하고 싶은 정보를 응답과 같이 실어 보낸다 (Set-Cookie 헤더)
```js
HTTP/1.1 200 OK
Set-Cookie: cookieName=cookieValue; Secure; Max-Age=60000
...
```
> #### 브라우저는 같은 서버에 요청이 일어날 때마다 해당 정보를 요청에 같이 실어서 서버에 보낸다 (Cookie 헤더)
```js
GET / HTTP/1.1
Cookie: cookieName=cookieValue; anotherName=anotherValue
...
```
### 2. 쿠키의 한계점
* US-ASCII 밖에 저장하지 못함. 보통 percent encoding을 사용
* 4000 바이트 내외(영문 4000자, percent encoding 된 한글 444자 가량)밖에 저장하지 못함
* 브라우저에 저장됨. 즉, 여러 브라우저에 걸쳐 공유되어야 하는 정보, 혹은 웹 브라우저가 아닌 클라이언트(모바일 앱)에 저장되어야 하는 정보를 다루기에는 부적절

HTTP Cache
===
### 접근 속도를 개선하기 위해 데이터를 **가까운 임시 저장소(브라우저, 서버 등)에 데이터를 저장**하는 행위
> #### Common Problem - 캐시된 자원과 실제 자원의 내용이 달라지는 문제를 어떻게 해결할 것이냐?

### Solution
1. Expiration(만료)
    * 자료의 유효기간을 설정한다.
2. Validation(검증)
    * ETag(header) - 자원의 내용에 대한 식별자(Hash 등)를 만들어서 삽입한다.
    * 식별자가 같다면 Status Cod 304를 내보낸다.(기존 자료 변경x 그대로 사용하라)


Ajax
===
### **비동기적인 웹 어플리케이션** 제작을 위한 **클라이언트 측 웹 개발 기법**
#### 웹 브라우저에서 XMLHttpRequest 혹은 **fetch**를 이용해서 보내는 **HTTP 요청**을 통칭하기도 함

CORS(Cross-Origin Resource Sharing)
===
### Same-origin Policy(동일 출처 정책)
웹페이지에서 리소스를 불러올 때 출처를 확인하는 웹 보안의 기본 원칙
**출처(프로토콜 + 도메인 + 포트번호'의 결합을 가리킴)** 가 같아야 동일 출처다.

#### 1. 동일 웹페이지에서 예제
```js
> const child = window.open('http://www.fastcampus.co.kr')
// 새로 열린 웹 페이지의 콘솔에서
> window.foo = 'bar'
// 이전 웹 페이지의 콘솔에서
> child.foo
// 출처가 같다면 접근 가능, 아니면 불가
```

#### 2. 다른 웹 페이지에서 예제(구글에서 open)
```js
// 구글에서 입력
const child = window.open('http://www.fastcampus.co.kr') (구글에서)
window.addEventListener('message', e => {
    console.log(e);
})

// 새로 열린 웹 페이지의 콘솔에서
window.opener.postMessage('message', '*');

// 이전 웹 페이지의 콘솔에서 MessageEvent가 출력된다.
```

REST API
===
