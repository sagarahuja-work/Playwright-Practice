const isPlaindrome = function(num){

    function reverseNumber(num)
    {

        if (num>=0 && num<=9)
            {return num;}

        let reverseNum = 0;
        while(num!=0){
            reverseNum = reverseNum * 10 + (num%10);
            num = Math.floor(num/10);
    
        }
        return reverseNum;

    }

    console.log(reverseNumber(num));
    if (num == reverseNumber(num)){
        console.log(`${num} is a palindrome number`);
        }
    else{console.log(`${num} is NOT a palindrome number`);
    }

}

isPlaindrome(12345677654321);