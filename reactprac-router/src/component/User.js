import { useLocation, useSearchParams } from "react-router-dom";

function User () {

  // 1.useParam 훅
  // const location = useLocation();
  // console.log(location);
  
  // const{search, pathname} = location;
  // console.log(search); //location의 각 속성을 대입
  // console.log(pathname);

  // 2.useSearchParams() 훅
  // const searchParams = useSearchParams();
  // console.log(searchParams);
  const [obj, setObj] = useSearchParams();
  // console.log(obj); 
  // console.log(setObj);
  
  let name = obj.get("name");
  let age = obj.get("age");
// console.log(name);

console.log(name, age);

const handleClick = () => {
  setObj( {name: '이순신', age: '20'});
}
  
  

  return (
    <div>
      <h3>유저페이지 입니다</h3>
      <button onClick={handleClick}>uri값 변경</button>
    </div>
  )
}
export default User;