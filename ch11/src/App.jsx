import { useEffect, useState } from 'react'
import { useRef } from 'react';

function App() {

  const boxRef = useRef();
  const num = useRef(0);
  const [n, setN] = useState(0);

  useEffect(() => {
    console.log(boxRef.current); //ref 쓸 때 제일 중요한건 이펙트
    console.log(boxRef.current.classList);

    boxRef.current.style.width = "100px";
    boxRef.current.style.hight = "100px";
    boxRef.current.style.backgroundColor = "#222";

    console.log(boxRef.current.style);
    //console.log(document.querySelector("#box"));
  })

  const handleOnClick = () => {
    num.current += 10;
    setN(num.current);
    console.log(num.current)
  }


  return (
    <>
      <div id='box' className='test abc' ref={boxRef}>

      </div>
      <h1>
        {num.current}
      </h1>
      <button onClick={handleOnClick}>증가</button>
    </>
  )
}

export default App
