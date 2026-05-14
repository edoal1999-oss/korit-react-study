function App() {

  
  new Promise((resolve, reject) => {
    console.log(7); //resolve or reject 둘 중 하나만 선택
    if (false) {
      resolve("성공데이터");
    } else {
      reject(new Error("실패데이터"));
    }
  }).catch((reason) => {
    console.log(9);
    console.log(reason);
  }).then((value) => {             
    console.log(8);
    console.log(value);
  });  //then이 먼저 호출됨. 여럿 있으면 여러개의 then이 같이 실행.
  
  new Promise((resolve, reject) => {
    console.log(10); 
    if (true) {
      resolve();
    } else {
      reject();
    }
  }).then(() => {
    console.log(11);
  }).catch(() => {
    console.log(12);
  });

  console.log(1);
  console.log(2);
  console.log(3);
  console.log(4);

  setTimeout(() => {
    console.log(5);
  }, 5000);
  setTimeout(() => {
    console.log(6);
  }, 2000);

  

  return (
    <>
      홈    
    </>
  )
}

export default App;