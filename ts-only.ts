// TypeScript doesn't know whether the element will exist or not, so we can use the
// exclamation mark to tell TypeScript that we know it will exist
// The exclamation mark lets typescript know it will never be null
// In addition to this we can add the HTML element type to the variable
const button = document.querySelector("button");
const input1 = document.getElementById("num1")! as HTMLInputElement
const input2 = document.getElementById("num2")! as HTMLInputElement

// We can change this function the only accept numbers instead of strings
// by adding the type to the parameters we can ensure that these variables will always be numbers
 function add(num1: number, num2: number) {
   return num1 + num2;
 }


// In JavaScript, all values are treated as strings unless specified otherwise,
// So when looking in the console, you will see 12 + 12 = 1212 instead of 24

// TypeScript also gives us an error on the value of the button, because
// not all elements have a value property
// We can fix this error by adding a + sign in front of the input values
button.addEventListener("click", function() {
    console.log(add(+input1.value, +input2.value));
});
