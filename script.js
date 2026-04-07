// INPUT PART
let input = document.getElementById("nameInput");
let submitBtn = document.getElementById("submitBtn");
let output = document.getElementById("output");

submitBtn.addEventListener("click", function() {
  let name = input.value;

  if (name === "") {
    output.innerText = "Type something bro 😭";
  } else {
    output.innerText = "Hello " + name + " 😎🔥";
  }
});


// MULTIPLE BUTTONS PART
let buttons = document.querySelectorAll(".colorBtn");

buttons.forEach(function(btn) {
  btn.addEventListener("click", function() {
    document.body.style.backgroundColor = btn.innerText;
  });
});