function wait(ms) {
    return new Promise( (resolve, reject) => {
        setTimeout(resolve, ms);
    });
}

wait(1000)
    .then( () => console.log("success") )
    .catch( error => console.log(error) )