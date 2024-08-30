import { useParams } from "react-router-dom";


// App.js의 :num 링크를 설정하고 home에서 './info/1' 라고 설정해 동적인 ur
function Info () {

  const data = {
    "1" : {id: 1 , name: "홍길동"},
    "2" : {id: 2 , name: "이순신"},
    "3" : {id: 3 , name: "신사임당"}

  }

  // useParams 훅 url파라미터
  let param = useParams();
  console.log(param);
  console.log(param.num);
  
  // console.log(param.num);
  
 const{id, name} = data[param.num];

  return (
    <div>
      <h3>Info페이지 입니다</h3>
      <div>선택된 데이터는 {id} / {name} </div>
    </div>
  )
}
export default Info;