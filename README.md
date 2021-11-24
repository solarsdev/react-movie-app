# ReactJS로 영화 웹 서비스 만들기

## Introduction

### Why React?

- 전세계 상위 1만개의 웹사이트 중 44.76%가 React를 이용중
- 그 중에서도 에어비앤비, 인스타그램, 페이스북, 넷플릭스 등 규모있는 기업들이 이용중
  - 규모있는 회사에서 비중있게 React를 다룬다는것은 의미있음
  - 페이스북은 React를 현재까지 서포트하고 있고 계속해서 발전시키고 있음
  - 이러한 이유는 우리가 ReactJS를 계속해서 쓸 수 있다는것을 의미함
- 또한, React는 JavaScript와 비슷하고, 커뮤니티의 규모 또한 방대
  - 라이브러리
  - 환경, 생태계

## React Basics

### React를 사용하는것에서 오는 편리함

- UI를 Interactive하게 변경함
- JavaScript vs React 양쪽으로 코딩해보자

  - 버튼을 누르면 텍스트에는 몇번 클릭했는지 표시해주는 웹 어플리케이션

    - 바닐라 자바스크립트 버전
      ```jsx
      <!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="UTF-8" />
          <meta http-equiv="X-UA-Compatible" content="IE=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>JavaScript vs React (Vanilla)</title>
        </head>
        <body>
          <button id="btn">Click Me</button>
          <span>Total Clicks: 0</span>
        </body>
        <script>
          let counter = 0;
          function handleClick() {
            counter += 1;
            const span = document.querySelector('span');
            span.innerText = `Total Clicks: ${counter}`;
          }
          const btn = document.getElementById('btn');
          btn.addEventListener('click', handleClick);
        </script>
      </html>
      ```
    - 리액트 버전 (샘플은 하드코딩으로 만들고 있음)

      ```jsx
      <!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="UTF-8" />
          <meta http-equiv="X-UA-Compatible" content="IE=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>JavaScript vs React (React)</title>
        </head>
        <body></body>
        <script src="https://unpkg.com/react@17.0.2/umd/react.production.min.js"></script>
        <script src="https://unpkg.com/react-dom@17.0.2/umd/react-dom.production.min.js"></script>
        <script>
          const body = document.querySelector('body');

          let counter = 0;
          let span = React.createElement('span', null, `Total Clicks: ${counter}`);

          const btn = React.createElement(
            'button',
            {
              onClick: () => {
                counter++;
                span = React.createElement('span', null, `Total Clicks: ${counter}`);
                ReactDOM.render([btn, span], body);
              },
            },
            `Click Me`,
          );
          ReactDOM.render([btn, span], body);
        </script>
      </html>
      ```

      <aside>
        💡 이걸로만 보면 딱히 React가 코드를 줄인다고 표현하긴 그렇고, createElement에서 요소의 컨텐츠와 이벤트 핸들링을 정의된 프로퍼티로 이용할수 있다는점은 분명 좋은점이 있다고 판단됨
      </aside>
