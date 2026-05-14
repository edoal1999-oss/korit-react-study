import { useState } from 'react'

function App() {
  
  const initUser = {
    username: '',
    email: '',
    password: '',
    phone: '',};

  const [inputValues, setInputValues] = useState(initUser);

  const handleInputOnChange = e => {
    const {name, value} = e.target; //구조분해

    const newInputValues = {
      ...inputValues,
      [name]: value,
    }
    setInputValues(newInputValues);
  }

  const handleSignUpOnClick = () => {
    console.log(inputValues);
    setInputValues(initUser);
  }

  return (
    <>
    <div>
     <label htmlFor="">사용자 이름</label>
     <input type="text" name='username' value={inputValues.username} onChange={handleInputOnChange}/>
     </div>
     <div>
      <label htmlFor="">이메일</label>
      <input type="text" name='email' value={inputValues.email} onChange={handleInputOnChange}/>
     </div>
     <div>
      <label htmlFor="">비밀번호</label>
      <input type="text" name='password' value={inputValues.password} onChange={handleInputOnChange}/>
     </div>
     <div>
      <label htmlFor="">연락처</label>
      <input type="text" name='phone' value={inputValues.phone} onChange={handleInputOnChange}/>
     </div>
     <div>
      <button onClick={handleSignUpOnClick}>회원가입</button>
     </div>
     </>
  )
}

export default App

//훅 함수는 안에 usestate를 쓰는 함수. 포함되지 않은 건 일반함수