import mongoose from 'mongoose'

let productschema=mongoose.Schema({
    price:{
        type:Number,
   
    },quantity:{
        type:Number,
        default:1
      
    },name:{
        type:String,
      
    },mobile:{
        type:Number,
      
    },address:{
        type:String,
     
    }
})
let userdata=mongoose.model("userdata",productschema)
export default userdata