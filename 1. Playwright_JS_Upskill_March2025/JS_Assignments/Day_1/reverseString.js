const reverseString = function(str){

    let strArray = str.split('');           //convert string into array
    let reverseArray = strArray.reverse();  //reverse the array
    let reverseStr = reverseArray.join(''); //join the reversed array into string

    return reverseStr;

}

console.log(reverseString("Yash Technologies Indore"));
