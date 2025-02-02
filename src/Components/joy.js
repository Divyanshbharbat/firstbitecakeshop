import mongoose from 'mongoose'
let joyschema = mongoose.Schema({
    name: String,
    image: String
})
let joy = mongoose.model("joy", joyschema)


    export default joy

//    async function bcake() {
//        let r = await joy.insertMany([{
//            name: "Birthday Celebration",
//            image: "https://cdn.leonardo.ai/users/8b49d567-5c2e-49dc-9bc4-d236e559f380/generations/23955a08-aa8b-498d-af24-c16176099886/Leonardo_Phoenix_10_A_vibrant_and_lively_scene_of_two_to_three_2.jpg"
//        }, {
//            name: "Wedding Celebration",
//            image: "https://cdn.leonardo.ai/users/8b49d567-5c2e-49dc-9bc4-d236e559f380/generations/8f920b52-df78-46fe-8040-7fc10fc18000/Leonardo_Phoenix_10_A_warmly_lit_intimate_wedding_celebration_3.jpg"
//        },

//        {
//            name: "Memorable moment",
//            image: "https://cdn.leonardo.ai/users/8b49d567-5c2e-49dc-9bc4-d236e559f380/generations/85942417-4b73-4b9c-91b4-c6443d26db0e/Leonardo_Phoenix_10_a_warm_and_intimate_shot_of_a_proud_parent_2.jpg"
//        },

//        {
//            name: "Winning Celebration",
//            image: "https://cdn.leonardo.ai/users/8b49d567-5c2e-49dc-9bc4-d236e559f380/generations/1a27123a-158e-4ee2-892a-7104815b427c/Leonardo_Phoenix_10_a_vibrant_and_joyful_scene_of_a_group_of_f_3.jpg"
//        }]
//        )

      


//   }
//    bcake()