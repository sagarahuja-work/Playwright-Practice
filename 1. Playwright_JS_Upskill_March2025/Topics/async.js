//JavaScript is a single-threaded, Synchronous language, basically, it means until the previous task is completed the next task will not be executed.

//Synchronous Code execution
console.log(1);
console.log(2);
console.log(3);

// Asynchronous Code execution
console.log(1);
// This will be shown after 2 seconds
setTimeout(()=>{
  console.log(2);
},2000)
console.log(3)


// fetch('https://jsonplaceholder.typicode.com/todos/1')
//   .then(response => response.json())
//   .then(json => console.log(json))
//   .catch(error => console.log(error));

// const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
// const json = await response.json();
// console.log(json)

 async function runProcess() {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    const json = await response.json();
    console.log(json)
  }
  
  runProcess();


// In the async/await version, the result of the promise is directly assigned to a variable. 
// In the standard promise version, the result of the promise is passed as an argument to the .then() method.