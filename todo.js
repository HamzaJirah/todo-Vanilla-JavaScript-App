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
}