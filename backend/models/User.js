import mongoose, {Schema, model} from "mongoose";

const user = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password : {
        type: String,
        required: true,
        unique: true
    },
    role: {
        type: String,
        required: true,
        enum: ["employee", "manager"],
        default:"employee",
    },
});

export default model('Users', user);