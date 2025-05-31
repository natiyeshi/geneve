import mongoose, { Schema } from "mongoose"


mongoose.connect(process.env.MONGODB_URI!)
mongoose.Promise = global.Promise

const messageSchema = new Schema({
    name : {
        type: String,
        required: true,
    },
    email : {
        type: String,
        required: true,
    },
    phoneNumber : {
        type: String,
        required: true,
    },
    message : {
        type: String,
        required: true,
    },
},{
    timestamps : true,
})


const Message  = mongoose.models.Message || mongoose.model("Message",messageSchema)

export default Message