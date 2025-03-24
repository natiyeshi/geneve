import mongoose, { Schema } from "mongoose"




mongoose.connect(process.env.MONGODB_URI!)
mongoose.Promise = global.Promise

const messageSchema = new Schema({
    name : {
        type: String,
        required: false,
    },
    email : {
        type: String,
        required: false,
    },
    message : String,
},{
    timestamps : true,
})


const Message  = mongoose.models.Message || mongoose.model("Message",messageSchema)

export default Message