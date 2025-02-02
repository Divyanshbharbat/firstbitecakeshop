import mongoose from 'mongoose'

let contactschema=mongoose.Schema({
    username:String,
    email:String,
    mobile:Number,
    message:String
})
let contact=mongoose.model("contact",contactschema)
export default contact