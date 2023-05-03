const counterCl = document.getElementById("CookieCounter");
const cookie = document.getElementsByTagName("img")[0];

let counter = 0;

cookie.addEventListener("click", function(){
     counter++;
    //  console.log(counter);
     counterCl.textContent = counter;

})


