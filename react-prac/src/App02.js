import MyComponent from "./component/MyComponent";


function App() {

  return (
    <div>
      <MyComponent name={"홍길동"} age={20} addr={"서울시"}/>
      <MyComponent/>
    </div>
  )
}
export default App;