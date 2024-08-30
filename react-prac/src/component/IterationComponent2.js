import { useState } from "react";


function InterationComponent2() {

 //1. 기존의 가짜 데이터
 const data = [
  {id: 1, topic: 'hello world'},
  {id: 2, topic: 'bye bye'}
 ];
 let [list, setList] = useState(data);

 let [topic, setTopic] = useState('');

 let handleClick = () => {
  let obj = {id: list[list.length - 1].id + 1
            , topic : topic} 
      let newList = list.concat(obj);
      console.log(newList);
      setList(newList);
      setTopic('');
      
 }

 let handleRemove = (id) => {
  let newList = list.filter( (value) => {
    return value.id != id;
  })
  setList(newList);

 }

 //2. 리스트를 이용해서 반복 처리 이벤트가 태그보다 위쪽에 위치
 //이벤트에 함수 매개변수를 주고 싶으면 () -> {실행시킬 함수(매개값)}
 /* id: list[list.length - 1].id + 1:

list: 현재 항목들이 들어 있는 리스트입니다.
list[list.length - 1]: 리스트의 마지막 항목을 선택합니다.
list[list.length - 1].id: 마지막 항목의 id 값입니다.
list[list.length - 1].id + 1: 마지막 항목의 id에 1을 더한 값입니다. 이것은 새로운 항목의 id로 사용됩니다.
쉽게 말하면: 리스트의 마지막 항목의 id가 5라면, 새로운 항목의 id는 6이 됩니다. */
 const newList = list.map(value => <li key={value.id}
                       onDoubleClick={() => handleRemove(value.id)}>{value.topic}</li>)

  return(
    <>
      <h3>간단한 할일 목록 만들기</h3>
      <ul>
        {newList}
      </ul>

      <input type="text" value={topic} onChange={ (e) => setTopic(e.target.value)}/>
      <button type="button" onClick={handleClick} >추가하기</button>


    </>
  )
}
export default InterationComponent2;