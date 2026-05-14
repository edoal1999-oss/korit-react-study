function CatErr() {
    Promise.resolve("hello")
    .then(str => 
        str.toUpperCase()
    ).then(str => {
        throw new Error("강제 에러 발생!");
    }).then(str => console.log("여기 실행될까?"))
    .catch((error) => {
        console.error("에러 잡음: 강제 에러 발생!")
    }).finally(() => {
        console.log("항상 실행!")
    })
    
}