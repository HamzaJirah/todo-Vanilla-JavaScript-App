// Create an Array

var toDos = ["Teach Bootstrap"];

//Ask user to play
var input = prompt("What would you like to do?");

//Control flow
while(input !== "quit"){
  // handle input
  if(input === "list") {
    listTodos();
  } 
  else if(input === "new") {
    addTodo();
  } 
  else if (input === "delete"){
    deleteTodo();
  }
  //ask again for new input
  input = prompt("what would you like to do?");
}
console.log("OK, YOU QUIT THE APP");

//Create a Function to List Todos

function listTodos(){
  console.log("**********")
  todos.forEach(function(todo, i){
  console.log(i + ": " + todo);
  });
  console.log("**********")
}