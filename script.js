const valueEl = document.getElementById("value");
const increment = document.getElementById("increment");
const decrement = document.getElementById("decrement");
let count = 0;
increment.addEventListener('click', () => {
    count ++;
    valueEl.innerText = count;
})
decrement.addEventListener('click', () => {
    count --;
    valueEl.innerText = count;
})