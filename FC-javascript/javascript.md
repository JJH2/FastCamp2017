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