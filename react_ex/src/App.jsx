import { Link, Route } from "react-router";

function Ex1() {
    const getPromise = () => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve("안녕하세요!");
            }, 1000);
        });

        getPromise.then(msg => console.log(msg));
    }

    return<>
      
    </>
}

function Ex2 (num) {
    return new Promise((resolve, reject) => {
        if(num >= 0){
            resolve("양수입니다: " + num);
        } else {
            reject("음수입니다." + num);
        }
    }).then((msg) => {
        console.log(msg);
    }).catch((err) => {
        console.log(err);
    });

    return <></>
}

function App() {

    return (
    <>
        <Ex1/>
        <Ex2/>
    </>
    )
}

export default App;