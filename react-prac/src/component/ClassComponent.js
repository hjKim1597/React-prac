import { Component } from "react";

class ClassComponent extends Component {

  constructor(props) {
    super(props); //생성자 연결
    this.state = {
      a : 1,
      b : this.props.name
    }
  }

  render() {

    console.log(this.props);
    
    let {name, age} = this.props;
    let {a, b} = this.state;

    return(
      <div>
        클래스 컴포넌트 예제
        props1 : {name}, props2 : {age}
        state1 : {a}, state2 : {b}
      </div>
    )
  }








}
export default ClassComponent;