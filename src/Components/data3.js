
import mongoose, { SchemaTypes } from 'mongoose'

import {bdataschema} from './data.js'
let blackdataschema=mongoose.Schema({

 name:String,
 image:String,
 price:Number,
  quantity:{type:Number,
    default:1
  }
 

})
let blackdata=mongoose.model("blackdata",bdataschema)
export default blackdata