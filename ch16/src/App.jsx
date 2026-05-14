import { useEffect } from 'react';
import { useState } from 'react'
import { Route, Routes, Link, useNavigate } from 'react-router-dom'

function Home() {
  const [name, setName] = useState("");
  return <>
    <h1>{name}님의 홈 화면입니다.</h1>
    <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
  </>
}

function About() {
  useEffect(() => {
    console.log("마운트");
    return () => {
      console.log("언마운트");
    }
  }, []); //비어있는 대괄호는 dependacy 아무것에도 의존하지 않는단 의미. 어떤 상태가 바뀌든지 간에 수용하지 않음. 반대로 대괄호가 없으면 모든 상황에 의존함.

  return <h1>소개 화면입니다.</h1>
}

function Product() {

  const [productName, setProductName] = useState("");
  const [productName2, setProductName2] = useState("");

  useEffect(() => { //useEffect는 장착될 때 동작. 콜백 함수여서 리턴되고 나서 실행되라고 되어있음. 특정 시점에 대한 후처리.
    console.log("마운트");
    return () => {
      console.log("언마운트");
    }
  }, [productName, productName2]); 
  return <>
    <h1>상품 소개 화면입니다.</h1>
    <input type="text" value={productName} onChange={(e) => setProductName(e.target.value)} />
    <input type="text" value={productName2} onChange={(e) => setProductName2(e.target.value)} />
  </>
}

function App() {
  const navigate = useNavigate();
  const [num, setNum] = useState(0);

  const handleOnClick = (e) => {
    navigate(e.target.value);
  }

  return (
    <>
      <h1>{num}</h1>
      <button onClick={() => setNum(num + 1)}>증가</button>
      <nav>
        <button value={"/p1"} onClick={handleOnClick}>1페이지</button>
        <button value={"/p2"} onClick={handleOnClick}>2페이지</button>
        <button value={"/p3"} onClick={handleOnClick}>3페이지</button>
        <a href="/p1">1페이지</a>
        <a href="/p2">2페이지</a>
        <a href="/p3">3페이지</a>
        <Link to={"/p1"}>1페이지</Link>
        <Link to={"/p2"}>2페이지</Link>
        <Link to={"/p3"}>3페이지</Link>
      </nav>
      <Routes>
        <Route path='/p1' element={<Home/>} />
        <Route path='/p2' element={<About/>} />
        <Route path='/p3' element={<Product/>} />
      </Routes>
    </>
  )
}

export default App
