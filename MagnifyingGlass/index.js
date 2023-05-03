//select buttons
const textLorem = document.querySelector(".text-Lorem");
const increase = document.querySelector(".increase");
const decrease = document.querySelector(".decrease");

//create a click event
increase.addEventListener("click", function () {
  textLorem.style.fontSize = "50px";
  //   let fontSize = textLorem.style.fontSize;
  //   for (let i = 1; 1 <= 100; i++) {
  //     fontSize = i;
  //   }
});

decrease.addEventListener("click", function () {
  textLorem.style.fontSize = "10px";
});
