import {bdataschema} from './data.js'
import mongoose, { SchemaTypes } from 'mongoose'

let chocklatedataschema=mongoose.Schema({

 name:String,
 image:String,
 price:Number,
  quantity:{type:Number,
    default:1
  }
 

})
let chocklatedata=mongoose.model("chocklatedata",bdataschema)
export default chocklatedata

//  // export default wdata
//  async function bcake(){
//     let r= await chocklatedata.insertMany([{
//          name:"Pearly Indulgence Chocolate Cake",
//      image:"https://cdn.leonardo.ai/users/91c398ec-b0c3-4153-970f-9ac8075e2f67/generations/84dc73c5-3980-4ea3-a8d9-1cb59da27a56/segments/4:4:1/Flux_Dev_A_decadent_multilayered_chocolate_cake_with_rich_velv_3.jpeg?w=512",
//      price:395
//      }, {
//          name:"Pearls And Truffles Chocolate Cake",
//          image:"https://cdn.leonardo.ai/users/91c398ec-b0c3-4153-970f-9ac8075e2f67/generations/84dc73c5-3980-4ea3-a8d9-1cb59da27a56/segments/3:4:1/Flux_Dev_A_decadent_multilayered_chocolate_cake_with_rich_velv_2.jpeg?w=512",
//          price:445
//      },

//     {
//          name:"Chocolate Almond Cake",
//          image:"https://cdn.leonardo.ai/users/91c398ec-b0c3-4153-970f-9ac8075e2f67/generations/84dc73c5-3980-4ea3-a8d9-1cb59da27a56/segments/2:4:1/Flux_Dev_A_decadent_multilayered_chocolate_cake_with_rich_velv_1.jpeg",
//          price:795
//      },

//    {
//          name:"Delicious Choco Creamy Cake",
//          image:"https://cdn.leonardo.ai/users/91c398ec-b0c3-4153-970f-9ac8075e2f67/generations/84dc73c5-3980-4ea3-a8d9-1cb59da27a56/segments/1:4:1/Flux_Dev_A_decadent_multilayered_chocolate_cake_with_rich_velv_0.jpeg",
//          price:745
//      }]
//  )

 
 
//  }
//  bcake()