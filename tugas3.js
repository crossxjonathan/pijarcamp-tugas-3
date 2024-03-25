// const data = ["House", "Car", "Bike", "TV", "Computer", "Chair", "Table", "Sofa", "Handphone"]

// const searchName = (name, limit) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             let find = data.filter(n => n.toLowerCase().includes(name.toLowerCase())).slice(0, limit);
//             if (find.length > 0) {
//                 resolve(find)
//             } else {
//                 reject("Result not found")
//             }
//         }, 2000);
//     });
// }

// const findMe = (name, limit) => {
//     searchName(name, limit)
//         .then(result => {
//             console.log("the Result is", result);
//         })
//         .catch(error => {
//             console.log(error);
//         })
// };

// findMe("a", 5)

// =========================================================================
// =========================================================================



const Database = (data) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const myDB = [{
                "id": 1,
                "name": "suryono",
                "username": "suryonozz",
                "email": "suryonozz@yahoo.com",
            },
            {
                "id": 2,
                "name": "andra",
                "username": "Andra00",
                "email": "Andra00@gmail.com",
            },
            {
                "id": 3,
                "name": "marwoto",
                "username": "Mroto1",
                "email": "Mroto1@gmail.co.id",
            },
            {
                "id": 4,
                "name": "supardi",
                "username": "supardi123",
                "email": "supardi123@yahoo.co.id",
            },{
                "id": 5,
                "name": "indri",
                "username": "indriana",
                "email": "indriana@yahoo.com",
            },
            {
                "id": 6,
                "name": "herawati",
                "username": "mrshera",
                "email": "mrshera@gmail.co.id",
            },
            {
                "id": 7,
                "name": "asep saefullah",
                "username": "saeasep",
                "email": "saeasep@gmail.co.id",
            },
            {
                "id": 8,
                "name": "putri",
                "username": "putriputri",
                "email": "putriputri@yahoo.com",
            },
            {
                "id": 9,
                "name": "susi",
                "username": "susisus",
                "email": "susisus@yahoo.co.id",
            },
            {
                "id": 10,
                "name": "kartika",
                "username": "kartika77",
                "email": "kartika77@hotmail.com",
            },]
            if(data){
                resolve(myDB)
            }else{
                reject(new Error(""))
            }
        },1000)
    })
} 

const searchData = (name,search) => {
    Database(false).then(myDB =>{
        const find = myDB.filter(n => n.name.toLowerCase().includes(name.toLowerCase()))
        search(find);
    }).catch(error =>{
        console.log(error)
    });
};

const findSearch = (result) =>{
    if(result.length > 0){
        console.log("search Result :", result)
    }else{
        console.log("search not found");
    }
};

Database(true).then((res)=>{
    console.log("Result Successful !!")
    console.log(res)
}).catch((error)=>{
    console.log(error.message);
});

// searchData("s",findSearch);