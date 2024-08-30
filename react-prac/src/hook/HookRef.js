import { useRef } from "react";



function HookRef() {

  //화면에서 다이렉트로 접근을 해서 사용할 태그 있다면 ref로 접근
  let input = useRef(null); //input참조 생성하여 input태그에 연결

  let handleClick = () => {
    console.log(input);
    console.log(input.current); //ref로 연결된 태그
    console.log(input.current.type); //타입
    console.log(input.current.value); //입력된 값
    //current는 useRef 훅에서 생성된 객체의 기본 속성입니다.
    // 이 속성은 useRef로 참조한 DOM 요소나 값에 접근할 수 있게 해줍니다.

    alert(input.current.value); 
    input.current.focus();
    
  }

  return (
    <>
      <h3>useRef</h3>
      <input type="text" ref={input}/> 
      <button type="button" onClick={handleClick}>등록</button>   
    </>
  )
}
export default HookRef;