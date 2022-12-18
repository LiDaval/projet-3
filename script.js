const body = document.querySelector("body");
const h2 = document.querySelector("h2");

const button = document.querySelector("#bouton");

button.addEventListener("click", function() {
  body.classList.toggle("nightMode");
  h2.style.color = "blue"
})

const para = document.createElement("p");
const node = document.createTextNode("Une exclusivité");
para.appendChild(node);
const element = document.getElementById("Commander");
element.appendChild(para);




