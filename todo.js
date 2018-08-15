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