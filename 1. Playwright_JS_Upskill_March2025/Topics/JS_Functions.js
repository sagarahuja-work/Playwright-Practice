//function declarations or definitions

function welcomeMessage() {

    console.log("Welcome, Have a good day!");
};

welcomeMessage();    //calling the function


//1. Regular function  :  can be called before the declaration as well
function add1(a,b) {
    const sum = a+b;
    return sum;

};
console.log(add1(10,20));

//------------------------------------------------------------------------------------------------------------------------------

//2. function expression  : function is assigned to a variable while declaration
const sumOfTwo = function(a,b){
const sum = a+b;
return sum;
};
console.log(sumOfTwo(100,200));

//-------------------------------------------------------------------------------------------------------------------------------

//3. Arrow function :

const arrowFunction = ()=>{console.log("This is arrow function")};

arrowFunction();

//-----------------------------------------------------------------------------------------------------------------------------

//4. Immediately Invoked Function Expression (IIFE) : it gets called just after the function declaration, used in case of timeouts
(function myIIFEfunction(){
    console.log("This is a IIFE function")
})();


//------------------------------------------------------------------------------------------------------------------------------
//5. Nested Function: calling function within function

function outerFun(a) {
    function innerFun(b) {
        return a + b;
    }
    return innerFun;
}

const addTen = outerFun(10);
console.log(addTen(5));




