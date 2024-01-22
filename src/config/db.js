const mongoose  = require("mongoose")

const mondbUrl = "mongodb+srv://solankianil2003:FX6x8tgeWmLtjhJ4@cluster0.nocnjxr.mongodb.net/?retryWrites=true&w=majority"

const connectDb = () => {
    return mongoose.connect(mondbUrl);
}

module.exports={connectDb}