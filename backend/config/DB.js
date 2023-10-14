import mongoose from "mongoose";

export default () => mongoose.connect(process.env.MONGO).then(()=>console.log("DB connected!")).catch(err => console.log(err))