
// //Standard Function Declaration
// function addSomething(something){
//   return something + something;
// };

// //Standard function expression
// const addition = function addSomething(something) { 
//   return something + something;
// };

// // Same Function (but anonymous)
// const addition = function(something) { 
//   return something + something;
// };

// // Anonymous Arrow Function
// const addition = (something) => { 
//   return something + something;
// };

// // Remove brackets, return, parenthesis
// const addition = something => something + somehting;


// function addingEventListener() {
//   const input = document.getElementById('input');
// input.addEventListener('click', function(event) {
// alert('I was clicked!');
// });
// }
// addingEventListener() 

function addingEventListener() {
  const input = document.getElementById('input');


input.addEventListener('click', () => {
  alert('I was clicked!');
});
}
addingEventListener() 



