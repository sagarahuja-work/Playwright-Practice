async function getAllUsers() {
    
    try {

        const allUserResponse = await fetch('https://jsonplaceholder.typicode.com/users');
        const allUserJson = await allUserResponse.json();
        console.log(allUserJson);
        
        
    } catch (error) {
        
        console.log('Error: ',error);
        

    }

};

getAllUsers();