function usernameValidity(username){
    let regex = /^[a-z_]{5,12}$/
    return regex.test(username)
}

function passwordValidity(password){
    let regex = /^[!@#$%^&*()_+-=]{1}[0-9]{1}[A-Z]{5}$/
    return regex.test(password)
}