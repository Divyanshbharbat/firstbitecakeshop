import {bdataschema} from './data.js'
import mongoose, { SchemaTypes } from 'mongoose'

let reddataschema=mongoose.Schema({

 name:String,
 image:String,
 price:Number,
  quantity:{type:Number,
    default:1
  }
 

})
let reddata=mongoose.model("reddata",{bdataschema})

export default reddata
// async function bcake(){
//    let r= await reddata.insertMany([{
//         name:"FNP Red Velvet Fresh Cream Cake",
//     image:"https://cdn.leonardo.ai/users/8b49d567-5c2e-49dc-9bc4-d236e559f380/generations/56b1e2e9-8a0a-4ed6-b42e-2163440b8281/Leonardo_Phoenix_10_A_decadent_richly_colored_red_velvet_cake_3.jpg?w=512",
//     price:649
//     }, {
//         name:"Bakingo Red Velvet Buttercream Cake",
//         image:"https://cdn.leonardo.ai/users/8b49d567-5c2e-49dc-9bc4-d236e559f380/generations/56b1e2e9-8a0a-4ed6-b42e-2163440b8281/Leonardo_Phoenix_10_A_decadent_richly_colored_red_velvet_cake_0.jpg",
//         price:699
//     },

//    {
//         name:"Bakingo Red Velvet Buttercream Cake",
//         image:"https://cdn.leonardo.ai/users/8b49d567-5c2e-49dc-9bc4-d236e559f380/generations/aa83263e-e2b8-42b8-9fcd-ea372ab07c82/Leonardo_Phoenix_10_A_decadent_moist_and_vibrant_red_velvet_fu_2.jpg?w=512",
//         price:699
//     },

//   {
//         name:"IGP Heavenly Red Velvet Cake",
//         image:"https://cdn.leonardo.ai/users/8b49d567-5c2e-49dc-9bc4-d236e559f380/generations/aa83263e-e2b8-42b8-9fcd-ea372ab07c82/Leonardo_Phoenix_10_A_decadent_moist_and_vibrant_red_velvet_fu_0.jpg?w=512",
//         price:625
//     }]
// )

//  console.log(r)
 
// }
// bcake()