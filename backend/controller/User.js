import bcrypt from "bcrypt"

import userModel from "../models/User"

export const create = async(req, res, next) => {
    try {
        const { password } = req.body
        const hashed = bcrypt.hashSync(password, 10)
        const User = await userModel.create({...req.body, password:hashed})
        res.status(200).json({
            success: true,
            data: User
        })
    } catch (error) {
        res.status(404).json({
            success: false,
            error
        })
    }
}

export const get = async(req, res, next) => {
    try {
        const { id } = req.params
        const User = await userModel.findById(id)
        res.status(200).json({
            success: true,
            data: User
        })
    } catch (error) {
        res.status(404).json({
            success: false,
            error
        })
    }
}