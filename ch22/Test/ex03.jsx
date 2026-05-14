function Chain(n) {
    Promise.resolve(10)
    .then(n => {
        return n * 2;
    }).then(n => {
        return n + 5;
    }).then(n => {
        n.toString() + "원"
    }).then((result) => {
        console.log(result)
    });
}