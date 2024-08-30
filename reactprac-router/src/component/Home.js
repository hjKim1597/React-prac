import { Link } from "react-router-dom";

function Home () {
  return (
    <div>
     <h3>홈페이지입니다</h3>
     <Link to={"./user?name=김호진&age=8"}>유저페이지</Link><br/>
     <Link to={'./info/1'}>Info1페이지</Link><br/>
     <Link to={'./info/2'}>Info2페이지</Link><br/>
     <Link to={'./info/3'}>Info3페이지</Link><br/>
    </div>
  )
}
export default Home;