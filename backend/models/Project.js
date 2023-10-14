import mongoose, {Schema, model} from "mongoose";

const projects = new Schema({
    title: {
        type: String,
        required: true,
    },
    type: {
        type: String,
        required: true,
    },
    github: {
        type: String,
        required: true,
    },
    drive: {
        type: String,
        required: true,
        default: null
    },
    time: {
        type: Date,
        required: true,
        default: Date.now()
    },
    production: {
        type: String,
        required: true,
        default: null
    },
});

export default model('projects', projects);