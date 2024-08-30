import { Fragment } from "react";
import StateComponent from "./component/StateComponent";
import StateComponentQ from "./component/StateComponentQ";
import ClassComponent from "./component/ClassComponent";

function App() {
  
  return (

    <Fragment>
     
     <StateComponent/>

     <hr/>
     <StateComponentQ/>
    <hr/>
     <ClassComponent name={"홍길동"} age={21}/> {/* 이 매개변수를 props를 통해 받음 */}

    </Fragment>
  )

}
export default App;