function fetchA () { return new Promise((res) => {
    setTimeout(() => 
    res("A데이터"), 1000)})};
function fetchB () { return new Promise((res, rej) => {
    setTimeout(() => 
    rej("B 실패!"), 2000)})};
function fetchC () { return new Promise((res) => {
    setTimeout(() => 
    res("C데이터"), 1500)})};

;

