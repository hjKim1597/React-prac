import PropTypes from 'prop-types'; // 프롭스 타입 임포트

function MyComponent(props/* {name = "이름없음", age = 0, addr = "주소없음"} */) {

  // console.log(props);
  
 return (
    <div>
      이름 : {props.name}<br/>
      나이 : {props.age}<br/>
      주소 : {props.addr}<br/>
    </div>
  )

/* return (
    <div>
      이름 :{name} <br/>
      나이 : {age} <br/>
      주소 : {addr} <br/>
    </div>
  ) */

  


}

MyComponent.propTypes = { //해당 변수들의 타입을 지정함 App.js 파일에서 다른 타입을 적게 되면 오류 메시지 나옴
  name : PropTypes.string,
  age : PropTypes.number,
  addr : PropTypes.string
}
export default MyComponent;