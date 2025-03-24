async function breakfast() {

    console.log("Preparing Breakfast");

    await new Promise((resolve) => {
        setTimeout(() => {
            console.log("Toast bread");
            resolve()
        }, 2000);
    });

    await new Promise((resolve) => {
        setTimeout(() => {
            console.log("Fry an egg");
            resolve()
        }, 1000);
    });
    
    
    console.log("prepared and served");
    


    
}

breakfast();