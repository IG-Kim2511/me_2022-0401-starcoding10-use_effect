import React, { useEffect, useState } from 'react'



function App() {

  // ๐ js0250 ์ค๋น.
  const [count, setCount] = useState(1);

  // ๐ js0316 input์ ๋ฃ์ value...pํ๊ทธ์ ๋์ฐ๊ธฐ
  const [name, setName] = useState("");

  // js0250 
  const handleCount = ()=>{
    setCount(count +1 );
  };

  const handleInput =(e)=>{
    setName(e.target.value);
  }



  // ๐ js0312 useEffect
  // ์ฒ์ rendering๋ ๋, ๋งค๋ฒ rendering๋ ๋ ๋ง๋ค ๋งค๋ฒ ์คํ๋จ
  useEffect(()=>{
    console.log('rendering');
  });


  //  ๐ js0318. count ๋ฐ๋๋๋ง๋ค ์คํ
  useEffect(()=>{
    console.log('count change');
  },[count]);

  // js0318. name ๋ฐ๋๋๋ง๋ค ์คํ
  useEffect(()=>{
    console.log('name change');
  },[name]);



  return (
    <div>    
      {/*  */}

      <h1>useEffect-๋ณ์ฝ๋ฉ</h1>

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


      {/* ๐๐ฆ js0344
        showTimer = false

        ๐ js0344-10
        showTimer๊ฐ true์ผ๋, <Timer/>๋ ๋๋ง

        ๐ js0344-20
        showTimer ๊ฐ false ์ผ๋ --> true๋ก set

        showTimer ๊ฐ true ์ผ๋ --> false๋ก set    
    */}

      {showTimer && <Timer/>}

      {/*  js0344-20 */}
      <button onClick={()=>{ setShowTimer(!showTimer)}}>toggle timer</button>
    </div>

  )
}






// ๐ js0320. ready. setInterval
// js0344
const Timer = () => {


  useEffect(() => {
    
    // ๐ฆ <timer/> component๊ฐ ์์(mount)๋ ๋ ์คํ๋จ
    const timer = setInterval(()=>{
      console.log('timer ticktok')
    },1000);
  
    // ๐ฆ <timer/> component๊ฐ unmount๋ ๋ ์คํ๋จ 
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
