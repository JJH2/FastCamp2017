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
> 2xx - 200 OK = 성공 / 201 Created = 자료 생성<br />
> 3xx - 301 Moved Permanently (Redirection) = 자료가 완전히 다른 곳으로 이동 / 302 Found (Redirection) = 자료가 일시적으로 다른 곳으로 이동 / 304 Not Modified (Cache) = 클라이언트가 이미 가지고 있던 자료가 수정되지 않았음 (그대로 사용하면 됨)<br />
> 4xx 실패 - 클라이언트 책임<br />
> 5xx 실패 - 서버 책임<br />

UI 업데이트 방식
===
* 비관적 업데이트(pessimistic update) - 데이터가 정상적으로 요청/응답이 왔는지? (개발자 위주)
    * 해결방안 - loading indicator
* 나관적 업데이트 (optimistic update) - 데이터의 정보를 확인하지 않음 (사용자 위주)