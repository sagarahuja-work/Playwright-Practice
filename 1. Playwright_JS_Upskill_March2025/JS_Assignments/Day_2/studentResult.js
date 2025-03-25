function studentPercent(marks,total)
{   
    let percentage = (marks/total)*100;
    console.log(`Percentage : ${percentage}%`);
    
    const finalGrade = function(percentage)
    {
        let grade;
        switch (true) 
        {
            case (percentage >= 90):
                grade = `A` 
                break;
            case (percentage >= 70 && percentage<90):
                grade = `B` 
                break;
            case (percentage >= 50 && percentage<70):
                grade = `c` 
                break;
            case (percentage >= 35 && percentage<50):
                grade = `D` 
                break;
        
            default:
                grade = `Fail`
                break;
        }
        return grade;
    
    }
    
    return (finalGrade(percentage));
}

console.log("Grade : "+studentPercent(350,500));
