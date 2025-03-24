function studentPercent(marks,total)
{   
    let percentage = (marks/total)*100;
    console.log(`Percentage : ${percentage}%`);
    
    const finalGrade = function(percentage)
    {
        let grade;
        
            if (percentage >= 90)
                {
                    grade = `A`
                }
            
            else if (percentage >= 70 && percentage<90)
                {
                    grade = `B`;
                }  
              
            else if (percentage >= 50 && percentage<70)
                {
                    grade = `c` ;
                }
                
            else if (percentage >= 35 && percentage<50)
                {
                    grade = `D`;     
                }
        
            else
                { 
                    grade = `Fail`
                }
               
                
        return grade;
    
    };
    
    return (finalGrade(percentage));
}

console.log("Grade : "+studentPercent(450,500));
