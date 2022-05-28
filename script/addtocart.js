let minusBtn = document.getElementById("singleview_minus_btn");
let count = document.getElementById("singleview_count");
let plusBtn = document.getElementById("singleview_plus_btn");

let countNum = 0;
count.innerHTML = countNum;

minusBtn.addEventListener("click", () => {
  countNum -= 1;
  count.innerHTML = countNum;
});

plusBtn.addEventListener("click", () => {
  countNum += 1;
  count.innerHTML = countNum;
});
