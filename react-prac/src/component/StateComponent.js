import { useState } from "react";

function StateComponent () {

  //useState 는 함수형 컴포넌트에서만 사용할 수 잇는 Hook
  //반환이 배열이고, [0] 번째에 현재 데이터, [1] 값을 변경하는 setter 함수를 반환함

  let [data,setData] = useState('초기값'); //data값
  let [msg, setMsg] = useState('메시지!!');

  // let data = result[0];
  // let setData = result[1];
  // console.log(result);
  
  let enter = () => {
    setData("수정완료!");
  }
  console.log(data);
  

  return (
    <div>
      현재 데이터: {data} <br/>
      값 변경하기: <button onClick={enter}>입장</button> 
      값 변경하기: <button onClick={ () => setData("퇴장완료!") }>퇴장</button>

      <hr/>

      <h3 style={ {color : msg } }> {msg} </h3>
      <button onClick={() => setMsg('red')}>붉은색</button>
      <button onClick={() => setMsg('green')}>초록색</button>
      <button onClick={() => setMsg('yellow')}>노랑색</button>




    </div>
  )

}
export default StateComponent;