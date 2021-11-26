# ReactJS로 영화 웹 서비스 만들기

### 목차

1. [Introduction](#Introduction)
2. [React Basics](#React-Basics)
3. [React State](#React-State)

## Introduction

### Why React?

- 전세계 상위 1만개의 웹사이트 중 44.76%가 React를 이용중
- 그 중에서도 에어비앤비, 인스타그램, 페이스북, 넷플릭스 등 규모있는 기업들이 이용중
  - 규모있는 회사에서 비중있게 React를 다룬다는것은 의미있음
  - 페이스북은 React를 현재까지 서포트하고 있고 계속해서 발전시키고 있음
  - 이러한 이유는 우리가 ReactJS를 계속해서 쓸 수 있다는것을 의미함
- React는 JavaScript와 비슷하고, 커뮤니티의 규모 또한 방대함
  - 라이브러리
  - 환경, 생태계

## [React Basics](https://github.com/solarsdev/react-movie-app/tree/master/react-basics)

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

      <aside>
        💡 그럼 counter같은 변수를 표현하기 위해서는 항상 컴포넌트를 매번 새로 정의해서 새롭게 렌더링을 해줘야 할까? 이건 React에서 분명 편의제공을 해주는 부분이 있어보임
      </aside>

### JSX란?

- JSX란 JavaScript를 확장한 문법을 말함
- JavaScript문법으로 엘리먼트를 작성할때 HTML태그를 그대로 사용 가능함

  - 리액트 + JSX버전 (babel을 추가해서 하드코딩 스크립트를 브라우저에 맞게 변환 추가)

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
      <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
      <script type="text/babel">
        const body = document.querySelector('body');

        let counter = 0;
        let span = <span>Total Clicks: {counter}</span>;

        const btn = (
          <button
            onClick={() => {
              counter++;
              span = <span>Total Clicks: {counter}</span>;
              ReactDOM.render([btn, span], body);
            }}>
            Click Me
          </button>
        );
        ReactDOM.render([btn, span], body);
      </script>
    </html>
    ```

    <aside>
      💡 확실히 JSX를 이용하면, HTML문법을 그대로 사용할 수 있기 때문에 가독성이 좋아질 뿐더러, 리액트의 장점인 컨텐츠와 이벤트 핸들링을 하나의 요소에서 전부 정의할수 있다는점에서 양쪽의 장점만 섞어서 코딩이 가능할것으로 보임
    </aside>

  - 바벨을 임포트, 하드코딩 방식으로 사용하기 위해서 두줄이 추가됨

    ```jsx
    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
    <script type="text/babel"></script>
    ```

  - 대문자로 컴포넌트를 정하는 이유에 대해서
    - JSX에서는 HTML 태그를 그대로 이용하는 방식을 사용하고 있기 때문에, 컴포넌트명을 대문자 시작으로 하지 않게 되면 HTML 태그의 정의어와 충돌할 수 있기 때문

### JSX로 코딩할때 주의점

- JSX에서는 HTML태그를 그대로 사용할수 있지만, 기본적으로는 JavaScript 규약이므로 주의해야 할 점들이 있음
- 프로그래밍 언어에서는 예약된 구문들이 존재하는데, JavaScript에서 for나 class같은 것들임
- 이는 HTML에서 어떤 역할을 동시에 수행하는데, 예를들어 다음의 코드를 확인해보자
  - 일반적인 HTML 태그로 작성된 코드
  ```jsx
  <label for='idHere'></label>
  <input id='idHere' class='classNameHere' type='text' />
  ```
  - JSX에서는 이렇게 바뀜
  ```jsx
  <label htmlFor='idHere'></label>
  <input id='idHere' className='classNameHere' type='text' />
  // 어디까지나 JSX이므로 for나 class는 예약어로 사용됨
  // for는 htmlFor, class는 className으로 대체해서 사용해야 함
  ```

## [React State](https://github.com/solarsdev/react-movie-app/tree/master/react-state)

- React에서 State란 컴포넌트가 가지고 있는 상태를 의미하며, 객체로 관리되고 컴포넌트 내에서만 정의되고 사용 가능함
- Basics에서 구성해보았던 [counter]와 같은 변수들이 바로 State로 정의할수 있는 부분

### State의 구현

- State를 구현하기에 앞서, 먼저 React에서 어떤 방식으로 컴포넌트가 리프레쉬 되는지 파악해야함
  - 기본 코드 (버튼을 눌러서 클릭수를 증가시키는 어플리케이션)
    ```jsx
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>React State</title>
      </head>
      <body>
        <div id="root"></div>
      </body>
      <script src="https://unpkg.com/react@17.0.2/umd/react.production.min.js"></script>
      <script src="https://unpkg.com/react-dom@17.0.2/umd/react-dom.production.min.js"></script>
      <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
      <script type="text/babel">
        const Root = document.getElementById('root');
        let counter = 0;
        const handleClick = () => {
          counter++;
          render();
        };
        const render = () => {
          ReactDOM.render(<App />, Root);
        };
        const App = () => (
          <div>
            <h3>Total Clicks: {counter}</h3>
            <button onClick={handleClick}>Click Me</button>
          </div>
        );
        render();
      </script>
    </html>
    ```
- React에서 웹페이지 요소를 업데이트 할때 사용하는 특별한 함수가 있음

  ```jsx
  RenderDOM.render(<Container />, Root);
  ```

    <aside>
    💡 render함수는 특정 컴포넌트를 화면에 다시 그리는 역할을 하는데, 상기 코드에서는 카운터값을 증가시킬때마다 렌더링을 새로 해주고 있음. 렌더링을 할때는 모든 페이지가 아니라 바뀐 부분만 업데이트가 되므로 이 부분은 매우 효율적이라고 판단됨. 다만 특정 값을 업데이트 할때마다 render를 호출하는게 과연 어떨지? 이 부분에 대한 고민이 필요
    
    </aside>

- 특정값을 업데이트 할때마다 자동으로 리렌더링을 하는 방법 (State를 이용)

  ```jsx
  const data = React.useState();
  // => [undefined, function]
  // useState의 초기값과 더불어 초기값에 접근할수 있는 함수를 가지게 됨

  // array destructuring을 이용해서 초기값, 함수에 변수명명이 가능
  const [counter, modifier] = React.useState(0);

  // modifier에 값을 주면 초기값을 갱신한다
  modifier(10); // counter = 10
  // +게다가 관련 컴포넌트의 리렌더링도 자동으로 진행됨 👍
  ```

- 리렌더링을 한다고 하더라도 최종적으로는 변경될 부분만 렌더링을 새로 고치기 때문에 효율성은 유지됨
  - 최종 코드
    ```jsx
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>React State</title>
      </head>
      <body>
        <div id="root"></div>
      </body>
      <script src="https://unpkg.com/react@17.0.2/umd/react.production.min.js"></script>
      <script src="https://unpkg.com/react-dom@17.0.2/umd/react-dom.production.min.js"></script>
      <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
      <script type="text/babel">
        const [counter, setCounter] = React.setState(0);
        const handleClick = () => {
          setCounter(++counter);
        };
        const App = () => (
          <div>
            <h3>Total Clicks: {counter}</h3>
            <button onClick={handleClick}>Click Me</button>
          </div>
        );
        const Root = document.getElementById('root');
        ReactDOM.render(<App />, Root);
      </script>
    </html>
    ```
    <aside>
      💡 React 본연의 기능을 활용하면서 이제 좀 코드가 가벼워진 느낌
    </aside>

### React에서 State를 설정하는 2가지 방법

```jsx
const [counter, setCounter] = React.useState(0);
// counter: value
// setCounter: modifier
setCounter(counter + 1);
```

- counter라는 변수를 state로 지정하여 관리하는 방법으로는 상기 코드가 있을수 있는데, 이 방식을 사용하게 되면 **counter의 값이 원하는대로 나오지 않을 가능성**이 있음
  - 어떤 경우에 원하는대로 값이 나오지 않을까?
    [【React】そろそろ技術ブログで setCount(count + 1) と書くのはやめませんか](https://zenn.dev/stin/articles/use-appropriate-api)
  - 결론부터 이야기하면 같은 컴포넌트 내에서 setCounter에서 변수를 직접 호출하면 동일한 counter값을 가져온다는 것임
    ```jsx
    const [counter, setCounter] = React.useState(0);
    // counter: value
    // setCounter: modifier
    setCounter(counter + 1);
    setCounter(counter + 1);
    ```
  - 상기 코드에서는 setCounter를 2번 사용한다고 해서 값이 2씩 증가하는것이 아니라 실제로는 1씩 증가하게 된다. 즉, counter는 read-only형태로서 실질적으로 counter값을 이용하기 위해서는 다른 방식을 이용한다.
    ```jsx
    // new way to modify counter
    setCounter((prevValue) => prevValue + 1);
    // 결론은 counter와 같은 state값이 접근할때는,
    // modifier의 parameter를 이용해야 한다는 것을 명심하자
    ```
- state를 설정하는 2가지 방법
  1. modifier를 통해 상수값을 직접 설정하는 방법
  2. 직전 state값을 이용해서 증감을 하는 방법

### React에서 Input 관리 (State를 이용)

- React에서 State를 이용하면 Input에서 입력받은 데이터를 컴포넌트 내부의 값으로 가지고 갈 수 있음
- 컴포넌트에서 State를 선언한 뒤, Input의 onChange와 같은 이벤트를 이용해서 value를 가지고 오자
- 샘플 어플리케이션을 작성

  - 시간, 분을 입력받고 시간이 입력됐다면 분을, 분이 입력됐다면 시간을 자동으로 변환하여 출력해주는 어플리케이션 (Super Converter)

    ```jsx
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>React State</title>
      </head>
      <body>
        <div id="root"></div>
      </body>
      <script src="https://unpkg.com/react@17.0.2/umd/react.production.min.js"></script>
      <script src="https://unpkg.com/react-dom@17.0.2/umd/react-dom.production.min.js"></script>
      <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
      <script type="text/babel">
        const MinutesToHours = () => {
          const [minutes, setMinutes] = React.useState(0);
          const [hours, setHours] = React.useState(0);
          const [flipped, setFlipped] = React.useState(false);
          const onMinutesChange = (event) => {
            const numMinutes = event.target.value;

            setMinutes(numMinutes);
            setHours(Math.round(numMinutes / 60));
          };
          const onHoursChange = (event) => {
            const numHours = event.target.value;

            setMinutes(numHours * 60);
            setHours(numHours);
          };
          const onFlip = () => {
            setFlipped((prevFlipped) => !prevFlipped);
          };
          const reset = () => {
            setMinutes(0);
            setHours(0);
          };
          return (
            <div>
              <h2>Minutes to Hours</h2>
              <label htmlFor='minutes'>Minutes</label>
              <input
                id='minutes'
                type='number'
                placeholder='Minutes'
                onChange={onMinutesChange}
                value={minutes}
                disabled={!flipped}
              />
              <label for='hours'>Hours</label>
              <input
                id='hours'
                type='number'
                placeholder='Hours'
                onChange={onHoursChange}
                value={hours}
                disabled={flipped}
              />
              <button onClick={reset}>Reset</button>
              <button onClick={onFlip}>Flip</button>
            </div>
          );
        };
        const KilometersToMiles = () => {
          const [kilometer, setKilometer] = React.useState(0);
          const [mile, setMile] = React.useState(0);
          const [flipped, setFlipped] = React.useState(false);
          const onKilometerChange = (event) => {
            const numKilometer = event.target.value;

            setKilometer(numKilometer);
            setMile(numKilometer * 0.6214);
          };
          const onMileChange = (event) => {
            const numMile = event.target.value;

            setKilometer(numMile / 0.6214);
            setMile(numMile);
          };
          const onFlip = () => {
            setFlipped((prevFlipped) => !prevFlipped);
          };
          const reset = () => {
            setKilometer(0);
            setMile(0);
          };
          return (
            <div>
              <h2>Kilometers To Miles</h2>
              <label htmlFor='kilometer'>Kilometer</label>
              <input
                id='kilometer'
                type='number'
                placeholder='Kilometers'
                onChange={onKilometerChange}
                value={kilometer}
                disabled={!flipped}
              />
              <label for='mile'>Miles</label>
              <input
                id='mile'
                type='number'
                placeholder='Miles'
                onChange={onMileChange}
                value={mile}
                disabled={flipped}
              />
              <button onClick={reset}>Reset</button>
              <button onClick={onFlip}>Flip</button>
            </div>
          );
        };
        const App = () => {
          const [menuIndex, setMenuIndex] = React.useState('0');
          const onSelectChange = (event) => {
            setMenuIndex(event.target.value);
          };
          return (
            <div>
              <h1>Super Converter</h1>
              <select onChange={onSelectChange}>
                <option value='0'>Select converter...</option>
                <option value='1'>Minutes to Hours</option>
                <option value='2'>Kilometers to Miles</option>
              </select>
              {menuIndex === '0' ? <h2>Please select converter you want</h2> : null}
              {menuIndex === '1' ? <MinutesToHours /> : null}
              {menuIndex === '2' ? <KilometersToMiles /> : null}
            </div>
          );
        };
        const Root = document.getElementById('root');
        ReactDOM.render(<App />, Root);
      </script>
    </html>
    ```

    <aside>
      💡 React에서의 State관리와 더불어 사용자의 입력을 State로 관리하는 방법을 익히고, JSX를 이용해서 컴포넌트를 조건에 따라서 출력해보는 예제를 만들어봄
    </aside>
