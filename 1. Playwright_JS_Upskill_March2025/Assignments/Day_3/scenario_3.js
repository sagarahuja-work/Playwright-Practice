async function charging() {

    console.log("Phone Charging process");

    await new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Phone plugged in");
            resolve()
        }, 1000);
    });

    await new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("50% charge");
            resolve()
        }, 2000);
    });
    
    console.log("Unpluging");
    


    
}

charging();