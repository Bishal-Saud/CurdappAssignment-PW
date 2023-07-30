const mongooes = require('mongoose');

const connectDB = async ()=>{
    try {
       await mongooes.connect(process.env.MONGO_URI)
console.log('Database connected');

    } catch (error) {
        console.log('Error: ',error);
        throw error
    }
}

module.exports = connectDB;