const getMonth = (callback) => {
    setTimeout(() => {
        let error = false;
        let month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
        if (!error) {
            callback(null, month)
        } else {
            callback(new Error("Sorry, Data Not Found"), [])
        }
    }, 4000);
}

getMonth((error, month) => {
    if (error) {
        console.log(error.message);
    } else {
        month.map(item => console.log(item))
        };
    }
)