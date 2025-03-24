let n =5;
for (let i = 1; i <= n; i++) 
    {
        let row = '';
        for (let j = i; j<=n; j++) 
            {
           process.stdout.write(" ");
            }
        for (let j=1; j<=i; j++) 
            {
            process.stdout.write("*");
            }

    console.log();
    
    
    };

    console.log("Reverse : ");
    
for (let i = 1; i <= n; i++) 
    {
        let row = '';
        for (let j=1; j<=i; j++) 
            {
                process.stdout.write(" ");
            }
        for (let j = i; j<=n; j++) 
            {
                process.stdout.write("*");
            }
        

    console.log();
    
    
    };