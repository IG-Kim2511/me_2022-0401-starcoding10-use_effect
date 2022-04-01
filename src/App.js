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




    </div>
  );
}

export default App;
