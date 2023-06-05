function printObj (obj) {
    for (let prop in obj) {
        if (obj.hasOwnproperty(prop)) {
            console.log(prop, obj[prop]);
        }
    }
}