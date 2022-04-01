import React, { useEffect, useState } from 'react'



function App() {

  // 🍀 js0250 준비.
  const [count, setCount] = useState(1);

  // 🍀 js0316 input에 넣은 value...p태그에 띄우기
  const [name, setName] = useState("");

  // js0250 
  const handleCount = ()=>{
    setCount(count +1 );
  };

  const handleInput =(e)=>{
    setName(e.target.value);
  }



  // 🍀 js0312 useEffect
  // 처음 rendering될때, 매번 rendering될때 마다 매번 실행됨
  useEffect(()=>{
    console.log('rendering');
  });


  //  🍀 js0318. count 바뀔때마다 실행
  useEffect(()=>{
    console.log('count change');
  },[count]);

  // js0318. name 바뀔때마다 실행
  useEffect(()=>{
    console.log('name change');
  },[name]);



  return (
    <div>    
      {/*  */}

      <h1>useEffect-별코딩</h1>

      {/* js0250 */}
      <button onClick={handleCount}>update</button> 
      <p>count : {count}</p>


      <br />
      {/* js0316  */}
      <input type="text"  value={name} onChange={handleInput}/>
      <p>name : {name}</p>


      <br />

      <TimeButton/>

    </div>
  );
}


const TimeButton = () => {


  const [showTimer, setShowTimer] = useState(false);

  return (
    <div>
      <h1>TimeButton</h1>


      {/* 🍀🦄 js0344
        showTimer = false

        🍉 js0344-10
        showTimer가 true일때, <Timer/>렌더링

        🍉 js0344-20
        showTimer 가 false 일때 --> true로 set

        showTimer 가 true 일때 --> false로 set    
    */}

      {showTimer && <Timer/>}

      {/*  js0344-20 */}
      <button onClick={()=>{ setShowTimer(!showTimer)}}>toggle timer</button>
    </div>

  )
}






// 🍀 js0320. ready. setInterval
// js0344
const Timer = () => {


  useEffect(() => {
    
    // 🦄 <timer/> component가 시작(mount)될때 실행됨
    const timer = setInterval(()=>{
      console.log('timer ticktok')
    },1000);
  
    // 🦄 <timer/> component가 unmount될때 실행됨 
    return () => {
      clearInterval(timer);
      console.log('timer stop')
      
    }
  }, [])
  

  return (
    <div>
      <h2>Timer start</h2>
      <p>check console</p>
    </div>
  )
}



export default App;
