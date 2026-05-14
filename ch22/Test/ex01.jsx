function Hello() {
    const getPromise = () => {
        return new Promise((resolve, reject) => {
            resolve();
        }).then(() => {
            console.log("안녕하세요!")
        }, 1000);
        
    }
}