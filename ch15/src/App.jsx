import { css } from '@emotion/react'
import { useState } from 'react'
import * as s from './styles';

function App() {


  
  
  return (
    <>
    <div css={s.card}>
      <div css={s.inputbox}>
        <input type="text" />
      </div>
      <div css={s.inputbox}>
        <input type="text" />
      </div>
      <div css={s.buttonbox}>
        <button>사용자 정보 등록</button>
      </div>
    </div>
    </>
  )
}

export default App