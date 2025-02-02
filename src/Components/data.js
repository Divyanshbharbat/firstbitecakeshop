import mongoose, { SchemaTypes } from 'mongoose'

let bdataschema=mongoose.Schema({

 name:String,
 image:String,
 price:Number,
  quantity:{type:Number,
    default:1
  }
 

})
export { bdataschema }
let bdata=mongoose.model("bdata",bdataschema)

export default bdata
