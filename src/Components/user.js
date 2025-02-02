import mongoose from 'mongoose'

import { Schema } from 'mongoose';
import userdata from './product.js';

import bdata from './data.js';
import wdata from './data2.js';
import reddata from './data4.js';
import chocklatedata from './data5.js';
import blackdata from './data3.js';
let userschema=mongoose.Schema({
username:{
    type:String,

},
    email:{
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true
    },

    productid: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref:bdata // Dynamic reference to specify the model
        },
      ],
      
    userinfo:[
        {
            type:Schema.Types.ObjectId,
            ref:userdata

        }
    ]
   
})


let User=mongoose.model("User",userschema);
export default User