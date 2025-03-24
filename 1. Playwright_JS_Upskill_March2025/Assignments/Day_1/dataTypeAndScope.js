let globalVar = "This is Global variable"
function demoDataTypesAndScope()
{
    //Premitive data types:
    //1. Number
    let data1 = 33
    console.log(typeof(data1) + " : " + data1);

    //2. String
    let data2 = "Yash Technologies"
    console.log(typeof(data2) + " : " + data2);

    //3. Boolean
    let data3 = false;
    console.log(typeof(data3)+ " : " + !(data3));

    //4. BigInt : numbers greater than 2^53-1
    let data4 = 998877665544332211000000000998877665544332211000000000n;
    console.log(typeof(data4) + " : " + data4);

    //5. undefined
    let data5;
    console.log(typeof(data5) + " : " + data5);

    //6. NULL
    let data6 = null;
    console.log(typeof(data6) + " : " + data6);

    //7. Symbol
    let data7 = Symbol("Company")
    console.log(data7);
    console.log(typeof(data7));

    //Scopes:
    // Function scope 
    let funVar = "This variable is inside function";

    if(true)
    {
        let bloVar = "This is inside block variable";
        console.log(`Inside block => ${bloVar}`);
        console.log(`Inside block => ${funVar}`);
        console.log(`Inside block => ${globalVar}`);
    };

    //console.log(`Outside block = ${bloVar}`);  //This will not work : var is not in scope
    console.log(`Outside block => ${funVar}`);
    console.log(`Outside block => ${globalVar}`);
    
}

demoDataTypesAndScope();
//console.log(`Outside function = ${bloVar}`);  //This will not work : var is not in scope
//console.log(`Outside function = ${funVar}`);  //This will not work : var is not in scope 
console.log(`Outside function => ${globalVar}`);




