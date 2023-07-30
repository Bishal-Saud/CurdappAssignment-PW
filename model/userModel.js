const mongooes = require('mongoose')
const mongoSchema = new mongooes.Schema({
    name:{
        type:String,
        required:[true,'Name is required'],
        maxLength:[25,'Less than 25 char']
    },
    email:{
        type:String,
        required:[true,'Email is required'],
        // unique:[true,'This email is used already']
    },
    password:{
        type:String,
        required:[true,'Password required'],
        minLangth:[8,'More than 8 char']
    },
})

module.exports = mongooes.model('Person',mongoSchema)