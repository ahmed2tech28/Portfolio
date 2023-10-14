import mongoose, {Schema, model} from "mongoose";

const Skills = new Schema({
    name: {
        type: String,
        required: true,
    },
    expert: {
        type: Number,
        default: 100,
        required:true,
    },
});

export default model('Skills', Skills);