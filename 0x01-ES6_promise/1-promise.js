function getFullResponseFromAPI(success) {
    obj = {
        status: 200,
        body: 'Success'
    }
    return new Promise(function (resolve, reject) {
        if (success == true) {
            resolve(obj)
        } else {
            reject("The fake API is not working currently")
        }
    })
}

console.log(getFullResponseFromAPI(true));
console.log(getFullResponseFromAPI(false));