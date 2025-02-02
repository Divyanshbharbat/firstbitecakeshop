import mongoose from 'mongoose'

import { Schema } from 'mongoose';




let user2schema=mongoose.Schema({
admin:{
    type:String,

},
   
    password:{
        type:String,
        require:true
    },

    
   
})

let User2=mongoose.model("User2",user2schema);

    //   let y=async()=>
    //   {
    //       let newuser=new User2({
    //           admin:"divyansh",
    //           password:"firstproject"
    //       })
    //       await newuser.save()
    //   }

    //   y()
      export default User2