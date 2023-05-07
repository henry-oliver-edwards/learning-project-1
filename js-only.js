const button = document.querySelector("button");
const input1 = document.getElementById("num1");
const input2 = document.getElementById("num2");

// We can change this function the only accept numbers instead of strings

// function add(num1, num2) {
//   return num1 + num2;
// }

function add(num1, num2) {
  if (typeof num1 === "number" && typeof num2 === "number") {
    return num1 + num2;
  } else {
    // The + sign in front of the variables will convert them to numbers
    return +num1 + +num2;
  }
}

// In JavaScript, all values are treated as strings unless specified otherwise,
// So when looking in the console, you will see 12 + 12 = 1212 instead of 24
button.addEventListener("click", function() {
  console.log(add(input1.value, input2.value));
});
