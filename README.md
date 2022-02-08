# Webpack 기본 템플릿

**webpack**: 모듈(패키지) 번들러의 핵심 패키지<br>
**webpack-cli**: 터미널에서 Webpack 명령(CLI)을 사용할 수 있음<br>
**webpack-dev-server**: 개발용으로 Live Server를 실행(HMR)<br>

**html-webpack-plugin**: 최초 실행될 HTML 파일(템플릿)을 연결<br>
**copy-webpack-plugin**: 정적 파일(파비콘, 이미지 등)을 제품(`dist`) 폴더로 복사<br>

**sass-loader**: SCSS(Sass) 파일을 로드<br>
**postcss-loader**: PostCSS(Autoprefixer)로 스타일 파일을 처리<br>
**css-loader**: CSS 파일을 로드<br>
**style-loader**: 로드된 스타일(CSS)을 `<style>`로 `<head>`에 삽입<br>
**babel-loader**: JS 파일을 로드<br>

**@babel/core**: ES6 이상의 코드를 ES5 이하 버전으로 변환<br>
**@babel/preset-env**: Babel 지원 스펙을 지정<br>
**@babel/plugin-transform-runtime**: Async/Await 문법 지원<br>

**sass**: SCSS(Sass) 문법을 해석(스타일 전처리기)<br>
**postcss**: Autoprefixer 등의 다양한 스타일 후처리기 패키지<br>
**autoprefixer**: 스타일에 자동으로 공급 업체 접두사(Vendor prefix)를 적용하는 PostCSS의 플러그인<br>

## 기본사항

Eslint: 코드 품질을 검사해주는 린터(설정된 규칙대로 동작함)
\_eslint rules 검색하면 권장되는 자바스크립트 규칙이 나옴
prettier: 코드스타일을 검사해주는 포맷터(미리 어느정도 규칙이 적용되어 있음)
ctrl+shift+p - settings(json) 로 들어가서 코드 작성하기

```
 "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
```
