import { Route, Routes } from "react-router-dom";
import Info from "./component/Info";
import Home from "./component/Home";
import User from "./component/User";
import Board from "./component/Board";
import BoardContent from "./component/BoardContent";
import MyPage from "./component/MyPage";
import Header from "./layout/Header";


function App() {
  return (
    <Routes>

{/* 중첩라우터 */}  
      <Route element={<Header/>}>
        <Route path="/" element={<Home/>}/>
        <Route path="/info/:num" element={<Info/>}/> {/* :num은 동적으로 변경 */}
        <Route path="/user" element={<User/>}/>
      </Route>
   
     {/*  <Route path="/board" element={<Board/>}/>
      <Route path="/board/:num" element={<BoardContent/>}/> */}

   {/* 중첩라우터 */}  
      <Route path="/board" element={<Board/>}>
        <Route path=":num" element={<BoardContent/>} />
      </Route>

      <Route path="/mypage" element={<MyPage/>}/>

    </Routes>

   

  );
}

export default App;
