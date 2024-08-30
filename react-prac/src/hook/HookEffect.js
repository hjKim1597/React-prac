import { useEffect, useState } from "react";


function HookEffect () {

  // //useState hook
  const [data, setData] = useState('');
  const [age, setAge] = useState('');

  // //useEffect 훅 : 컴포넌트 라이프 사이클 관리 
  // useEffect( () => {
  //   console.log('마운트 이후에 동작됨(랜더링 이후에 동작)');    
  // })
  // /*
  //   기본적 사용 (첫번쨰 매개변수는 콜백함수)
  //   컴포넌트가 마운트 될때마다 실행됨 즉 컴포넌트가 처음 랜더링 된 이후에 실행됨
  //   용도: 데이터를 초기화하거나, 컴포넌트가 화면에 표시된 이후에 발생하는 작업을 수행할 때 사용
  // */
  // useEffect( () => {
  //   console.log('마운트 된 이후에 한번만 실행됨 (네트워크 상으로 데이터를 가지고 올 떄 사용함)');
  // }, []);
  // /*
  //   한 번만 실행되는 useEffect
  //   빈배열 []을 두번째 매개변수로 전달하면, 이 useEffect는 컴포넌트가 처음 마운트 될 떄만 실행됨 
  //   용도: 컴포넌트가 처음 로드될 때 API 호출이나 초기 설정을 수행할 때 사용
  // */

  // useEffect( () => {
  //   console.log('특정값이 변경돼서 랜더링 될 때 동작함(특정 state가 변경될 때만 실행됨 2번째 배열))');
  // }, [data, age]);
  // /* 
  //   특정 값이 변경될 때 실행되는 useEffect
  //   이 useEffect는 data 또는 age 상태가 변경될 때마다 실행됨. 의존성 배열에 포함된 값들이 변경될 때만 useEffect실행됨
  //   용도: 특정 상태나 속성이 변경될 때마다 부수 효과를 수행해야 할 때 사용
  //   의존성 배열에 포함된 값이 변경될 때마다 실행 이배열의 값이 변경되지 않으면 실행되지 않음
  // */

  // useEffect( () => {
  //   console.log('effect 실행됨');
  //   return () => {
  //     console.log('unmount(소멸) 되기 전에 실행됨');  
  //   };
  // }, [data]); 
  // /* 
  //   언마운트(소멸) 시 정리 작업 수행
  //   이 useEffect는 data가 변경될 때마다 실행됨 그리고 이 useEffect가 실행되기 전에 반환하는 함수가 호출됨
  //   반환하는 함수는 컴포넌트가 언마운트되기 전에 실행됨
  //   용도: 컴포넌트가 언마운트될 떄 클린업 작업(예: 타이머 해제, 이벤트 리스너 제거) 수행할 때 사용
  //   컴포넌트가 언마운트 될 때나 data 값이 변경될 때 클린업 작업을 수행
  // */

  //   useEffect( () => {
  //     console.log('effect 실행됨222222');
  //   });
  //   /* 
  //     무한루프에 빠질 수 있는 코드 (잘못된 예)
  //     의존성 배열을 제공하지 않으면, 이 useEffectsms 컴포넌트가 랜더링 될 때마다 무한히 실행됨 =>무한루프
  //     문제: useEffect 가 랜더링 될떄마다 실행되기에 성능에 영향
  //   */
  //   const [ex, setEx] = useState({name: '홍길동'});
  //   useEffect( () => {
  //     let copy = {...ex};
  //     setEx(copy);
  //   }, [ex]);
    /* 
      무한루프에 빠질 수 있는 코드 (잘못된 예)
      이 useEffect는 ex가 변경될 때마다 실행. 변경되면 setEx를 호출 ex를 업데이트함 , 
      그러나 setEx(Copy)로 인해 ex가 다시 변경 => 무한루프
      문제: useEffect 내에서 상태를 직접 업데이트 그 상태가 useEffect의 의존성 배열에 포함되어 있을 때, 
      상태 업데이트가 다시 useEffect를 트리거하게 되어 무한 루프에 빠질 수 있음
    */
  

      return (
        <>
          <h3>useEffect</h3>
          <input type="text" value={data} onChange={ (e) => setData(e.target.value) }/>
          <input type="text" value={age} onChange={ (e) => setAge(e.target.value) }/>
          {data}
          {age}
        </>
      )
}
export default HookEffect;