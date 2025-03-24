async function studying(condition) {
    try {
        if (condition === false)
            {
                console.log(`Too Tired to study`);
                
            }
            else {
                await new Promise((resolve, reject) => {
                    
                     setTimeout(() => {
                        console.log("Reading Chapter");
                        resolve()
                    }, 1500);
                
                });
        
                await new Promise((resolve, reject) => {
                    
                    setTimeout(() => {
                       console.log("Solve Question");
                       resolve()
                   }, 1000);
               
               });
        
            };
            
        }
    catch (error) {
        console.log(`Error : ${error}`);
        
        }
}

    

studying(true);

