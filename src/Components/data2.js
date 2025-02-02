
import mongoose, { SchemaTypes } from 'mongoose'

import {bdataschema} from './data.js'
// let wdataschema=mongoose.Schema({

//  name:String,
//  image:String,
//  price:Number,
//   quantity:{type:Number,
//     default:1
//   }
 

// })
let wdata=mongoose.model("wdata",bdataschema)

export default wdata
async function bcake(){
   let r= await blackdata.insertMany([{
        name:"cake",
    image:"https://cdn.leonardo.ai/users/8b49d567-5c2e-49dc-9bc4-d236e559f380/generations/344d426e-7385-4c82-bed9-2dcbaff099e8/Leonardo_Phoenix_10_A_delectable_image_of_a_rich_mochacolored_2.jpg?w=512",
    price:700
    }, {
        name:"cake2",
        image:"https://cdn.leonardo.ai/users/8b49d567-5c2e-49dc-9bc4-d236e559f380/generations/344d426e-7385-4c82-bed9-2dcbaff099e8/Leonardo_Phoenix_10_A_delectable_image_of_a_rich_mochacolored_1.jpg",
        price:700
    },

   {
        name:"cake",
        image:"https://cdn.leonardo.ai/users/8b49d567-5c2e-49dc-9bc4-d236e559f380/generations/344d426e-7385-4c82-bed9-2dcbaff099e8/Leonardo_Phoenix_10_A_delectable_image_of_a_rich_mochacolored_0.jpg",
        price:700
    },

  {
        name:"cake",
        image:"https://cdn.leonardo.ai/users/8b49d567-5c2e-49dc-9bc4-d236e559f380/generations/344d426e-7385-4c82-bed9-2dcbaff099e8/Leonardo_Phoenix_10_A_delectable_image_of_a_rich_mochacolored_3.jpg",
        price:700
    }]
)

 console.log(r)
 
}