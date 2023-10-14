import mongoose, {Schema, model} from "mongoose";

const softwareHouse = new Schema({
    name: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    projects: [
        { type: Schema.Types.ObjectId, ref:"projects" }
    ],
    joining: {
        type: Date,
        required: true,
        default: Date.now()
    },
    leaving: {
        type: Date,
        required: true,
        default: null
    },
});

export default model('SoftwareHouses', softwareHouse);