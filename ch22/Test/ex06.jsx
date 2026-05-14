function fetch(A) { return new Promise((res) => {
    setTimeout(() => 
    res("A데이터"), 1000)})};
function fetch(B) { return new Promise((res) => {
    setTimeout(() => 
    res("B데이터"), 2000)})};
function fetch(C) { return new Promise((res) => {
    setTimeout(() => 
    res("C데이터"), 1500)})};

function fetAll() {
    console.log(
        Promise.all([fetch(A), fetch(B), fetch(C)]))
};