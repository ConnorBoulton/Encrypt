const bcrypt = require('bcryptjs')

encrypt('I love cryptography!')



function encrypt(str){
    let code = []

    let salt = bcrypt.genSaltSync(12)
    let strHash = bcrypt.hashSync(str, salt)

    code.push(strHash)
    console.log(code)
}

//Only can go one way right now
