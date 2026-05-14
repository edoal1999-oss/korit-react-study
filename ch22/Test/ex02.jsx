function checkPositive(num) {
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
}