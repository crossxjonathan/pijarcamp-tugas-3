const dataBackend =  'https://jsonplaceholder.typicode.com/users';

function backend(url){
    return fetch(url).then(data => data.json());
}

async function print() {
    try{
        console.log("Please wait...");
        const allData = await backend(dataBackend)
        allData.forEach(person => {
            console.log(person.name);
        });
        console.log("Fetch data Successful!!");
    }catch(err){
        console.log(err);
    }
}

print();