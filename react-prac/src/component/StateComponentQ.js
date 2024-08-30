import { useState } from "react";

function StateComponentQ() {

  let [num, setNum] = useState(0);

  // let [up, setUp] = useState(num+=1);
  // let [down, setDown] = useState(num-1);
  // let [zero, setZero] = useState(0);

  let up = () => {
    setNum(num += 1);
  }
  let down = () => {
    setNum(num - 1);
  }
  let zero = () => {
    setNum(num = 0);
  }


  return (
    
    <div>
      <h3>숫자: {num}</h3>
      <button onClick={up}>+</button>
      <button onClick={down}>-</button>
      <button onClick={zero}>초기화</button>

    </div>

    
  )

}
export default StateComponentQ;