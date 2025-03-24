//Promise is an object representing the eventual completion or failure of an asynchronous operation.
// how to create promise
console.log("Program is Running : 1");

const promiseOne = new Promise(function (resolve,reject){
    // Do any async task
    //network call
    setTimeout(() => {
        console.log("Async task one is completed");
        resolve()
        
    }, 2000);
});

//consuming promise

promiseOne.then(function () {
    console.log("Promise consumed here");
        
})

console.log("Program is Running : 2");
// Another way to use create and use promise without storing it in varaiable and use .then

new Promise(function(resolve,reject){

    setTimeout(() => {
        console.log("Asyncronous Task Two");
        resolve();
    }, 4000);

}).then(function() {                                            //we are consuming promise through then
    console.log(`Task resolved : Consume Promise for task two with ".then"`)
})

console.log("Program is Running : 3");

// Promise which returns data with resolve

const promiseThree = new Promise(function (resolve,reject) {
    setTimeout(() => {
        console.log("Task Three runs and returns and object");
        resolve({username : "Sagar", email : "Abc@example"})
        
    }, 3000);
})

promiseThree.then(function (user) {

   console.log(user);
    
    
})

const promiseFour = new Promise(function (resolve,reject){
    setTimeout(() => {
        console.log("Task 4");
        let error = false;
        if (!error){
            resolve({username: "sagar", password : "123"})
        }
        else{
            reject(`Error : Something went wrong`)
        }      
    }, 4000);
})

promiseFour
    .then((user)=>{
        console.log(user)
        return user.username;
    })
    .then((username)=>{
        console.log(username);
    
    })
    .catch((error)=>{
        console.log(error);
    
    })
    .finally(()=>{
        console.log("Finally the promise is either resolved or rejected");
        
    })

    const promiseFive = new Promise(function(resolve,reject){
        setTimeout(() => {
            console.log("Task 4");
            let error = true;
            if (!error){
                resolve({username: "JavaScript", password : "123"})
            }
            else{
                reject(`Error : JS went wrong`)
            }      
        }, 5000);

    });

    async function consumePromiseFive() {
      
        try {
            const promiseFiveResult = await promiseFive
            console.log(`Promise five result :`);
            
            console.log(promiseFiveResult);
        } catch (error) {
            console.log(error);
            
        }
        

        
    };
    consumePromiseFive();