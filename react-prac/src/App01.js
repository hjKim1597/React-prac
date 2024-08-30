// import logo from './logo.svg';
// import './App.css';

import { Fragment } from 'react';

/* 
  필요한 파일들을 불러올 떄 webPack loader사용됨
  웹팩 로더는 직접 설치 가능함, 보일러 플레이트로 만들경우는 자동 설정됨
  웹팩 로더안에 babel이라는 도구가 ES6 문법을 ES5 로 다운그레이드 시키는 역할을 함
  app.js 파일에서 출발 root파일
*/

function App() {

  let name = "홍길동";
  let age = 20;

  return (
   <Fragment>
   <h3>아래는 JSX 문법설명</h3>
   {/* 
    1. js파일은 jsx라고 부름, 주석은 알트 시프트 a
    2. jsx 은 반드시 하나의 태그를 return 해야함 2개 불가
    3. div를 사용해서 묶어도 가능 , Fragment 를 임포트 , 또는 <></> 모형으로 묶어주면 됨
    4. 변수값을 사용할 때는 {name}, {age} 로 참조함
    5. if문 보다는 삼항연산식을 사용함
    6. 화면에 보여주고 싶은 문장이 없다면 null을 리턴하면 됨
    7. undefined를 반환해도 되지만 , 사용을 지양
    8. DOM 요소에 css를 직접 넣을 때는 객체형으로 묶고, 속성은 카멜표기법을 사용함(px단위 생략시 기본값)
    9. 태그 안 class 속성은 전부 className 으로 변경됨
    10. 홀로 사용되는 태그는 반드시 /로 닫는 태그를 작성함 <input/>, <br/> 
   */}

    <div className='example' >
      클래스명 ?
      <br/>

      <input name='name'/>
    </div>

    <div style={{color : "red", background : "yellow", fontSize : 20}}>
      {/* 1번 */}
      {name === '홍길동' ? '리액트임':'리액트가 아님'}
      {/* 2번 */}
      {age === 20 ?
       <h6>20입니다 </h6>
       :
       null
       }
    </div>

   </Fragment>

  );
}

export default App;
