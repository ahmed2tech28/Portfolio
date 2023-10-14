import express from "express"
import { config } from "dotenv"

import DB from "./config/DB.js"

const app = express()

config()
DB()

import userRoutes from "./models/User.js"
import projectRoutes from "./models/Project.js"
import shRoutes from "./models/SoftwareHouse.js"
import skillRoutes from "./models/Skill.js"

app.use("/api/v1/user", userRoutes)
app.use("/api/v1/project", projectRoutes)
app.use("/api/v1/software", shRoutes)
app.use("/api/v1/skill", skillRoutes)

app.listen(process.env.PORT, ()=>console.log(`http://localhost:${process.env.PORT}`))