
import mongoose, { SchemaTypes } from 'mongoose'

let homedataschema=mongoose.Schema({

 name:String,
 image:String,


 

})
let homedata=mongoose.model("homedata",homedataschema)

 export default homedata
      // async function bcake(){
      //    let r= await homedata.insertMany([{
      //         name:"Birthday",
      // image:"https://cdn.leonardo.ai/users/8b49d567-5c2e-49dc-9bc4-d236e559f380/generations/cd419e69-e177-49dd-833e-5585ad4e03e1/Leonardo_Phoenix_10_Create_an_image_featuring_a_decadent_multi_2.jpg?w=512",
  
      //     }, {
      //         name:"Wedding",
      // image:"https://cdn.leonardo.ai/users/8b49d567-5c2e-49dc-9bc4-d236e559f380/generations/4b534a09-5f40-4efe-89c0-76f7bd3a64dc/Leonardo_Phoenix_10_Render_a_vibrant_and_romantic_image_featur_2.jpg?w=512",
      
      //    },

      //    {
      //         name:"Black Forest",
      //         image:"https://cdn.leonardo.ai/users/8b49d567-5c2e-49dc-9bc4-d236e559f380/generations/346bfe15-e8a6-4dd8-bb33-6a1045e71629/Leonardo_Phoenix_10_Create_an_image_of_a_decadent_and_ornate_B_3.jpg?w=512",
    
      //   },

      //   {
      //         name:"Red Velvet ",
      //         image:"https://cdn.leonardo.ai/users/8b49d567-5c2e-49dc-9bc4-d236e559f380/generations/caaabbe1-a673-423b-913c-49889fb86d98/Leonardo_Phoenix_10_Create_an_image_of_a_decadent_and_moist_re_2.jpg?w=512",
       
      //     },
      //   {
      //         name:"Chocolate Cake",
      //         image:"https://cdn.leonardo.ai/users/91c398ec-b0c3-4153-970f-9ac8075e2f67/generations/a4e0e30c-5101-402e-aebc-ecf9bcbbecb9/Leonardo_Phoenix_10_A_decadent_moist_chocolate_cake_with_rich_2.jpg?w=512",
       
      //     }]
      // )

     
 
      // }
      // bcake()