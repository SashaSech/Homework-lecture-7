function checkNumber(number) {
    return new Promise( (resolve, reject) => {
        if (number > 10) {
            resolve("Число больше 10")
        } else {
            reject("Число меньше или равно 10")
        }
    })
}

let promise = checkNumber(15)
promise
    .then( result => console.log(result) )
    .catch( error => console.log(error) )