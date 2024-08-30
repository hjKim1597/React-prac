import { useState } from "react";

function EventComponent2() {

  let [form, setForm] = useState({name: '', topic: ''} );

  let handleForm = (e) => {
    console.log(e.target.name ); //태그명
    console.log(e.target.value ); //사용자가 입력한 값
    
    let copy = {...form, [e.target.name] : e.target.value }
    setForm(copy);
  }
  let handleClick = () => {
   alert(`${form.name} 님의 할일 ${form.topic}`);
    setForm({name:'', topic:''})
  }
 
  return(
    <div>
    인풋태그 객체로 핸들링하기
    <br/>
    <input type="text" name="name" value={form.name} onChange={handleForm }/>
    <br/>
    name state값: {form.name}
    
    <br/>
    <input type="text" name="topic" value={form.topic} onChange={handleForm }/>
    <br/>
    topic state값 : {form.topic}

    <br/>
    <button type="button" onClick={handleClick}>클릭이벤트</button>
    </div>
  )
 
}
export default EventComponent2;