//Array : collection of items
// it is a type of object
// Non-premitive data type
// In JS array is mutable


let info = ['Rahul', 86 , 'Delhi'];
console.log(info);
console.log(typeof(info));                  //data type of array is 'Object'
console.log("length : "+info.length);       //shows length of array

console.log(info[1]);                       //shows value at particular index

info[1] = 100;                              //as array is mutable, you can change its value
console.log(info[1]);          

//-------------------------------------------------------------------------------------------------------------------------------------
//Looping in array

//for loop

let heros = ['Thor', 'Hulk', 'Spiderman', 'Ironman'];

for (let index = 0; index < heros.length; index++) {
    const element = heros[index];
    console.log(element);
    
}

//"for of" loop on arrays

for (const element of heros) {
    console.log(element.toUpperCase());
    
}

//using map to create new array by performing opertaion on existing array

let numArray = [11,22,33]

numArray.map((value)=>{

    console.log(value*10);
    
});

let numArray1 = numArray.map((value)=>{
    return value+1;
    
});

console.log(numArray1);

let numArray2 = numArray.map((value, index, array)=>{

    console.log(value, index, array);
    return value+index;
    
});
console.log(numArray2);

// array filter method : array filter method is used to get new array from filtering values of an array

let arrNumber3 = [22,33,55,3,0,6,123];

let arrNumber4 = arrNumber3.filter((value)=>{
    return value<10;

})
console.log(arrNumber4);

//array reduce method


