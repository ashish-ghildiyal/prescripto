import doctorModel from "../models/doctor.model.js";
import bcrypt from "bcryptjs";
import cloudinary from "../utils/cloudinary.js";
import { json } from "express";
import jwt from "jsonwebtoken";

// API for adding doctor

const addDoctor =  async(req, res) => {
    try {
        const { name, email, password, 
        speciality, degree, experience, about, fees, address} = req.body;

        console.log(req.body)

       // const imageFile = req.file;
        //checking for all required fields
        if(!name || !email || !password || !speciality || !degree || !experience || !about || !fees   ) {
            return res.status(400).json({message: "All fields are required"});
        }   
        
        //validate email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if(!emailRegex.test(email)) {
            return res.status(400).json({
                success: false,
                message: "Invalid email"});
        }

        //checking for unique email
        const existingUser = await doctorModel.findOne({email});
        if(existingUser) {
            return res.status(400).json({
                success: false,
                message: "Email already exists"});
        }

        //checking for strong password

        if(password.length < 8) {
            return res.status(400).json({message: "Password must be at least 8 characters"});
        }

        // hash password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // upload image to cloudinary

        // const result = await cloudinary.uploader.upload(imageFile.path,{resource_type: "image"});
        // const image = result.secure_url;

        const doctorData = await doctorModel.create({
            name,
            email,
            password: hashedPassword,
            speciality,
            degree,
            experience,
            about,
            fees,
            address: JSON.parse(address)
        });

         await doctorData.save();
        
        res.status(201).json({
            success: true,
            message: "doctor Data created successfully", doctorData});
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message});
    }
}

// API for admin login

const adminLogin = async(req, res) => {
    try {
        const {email, password} = req.body;
        console.log(req.body)
        if(!email || !password) {
            return res.status(400).json({message: "All fields are required"});
        }
        if(email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD) {
            const token = jwt.sign(email+password, process.env.JWT_SECRET);
            return res.status(200).json({
                success: true,
                message: "Admin logged in successfully",
                token
            });
        }else{
            return res.status(400).json({
                success: false,
                message: "Invalid credentials"});
        }   
    } catch (error) {
         res.status(500).json({
            success: false,
            message: error.message});
        
    }
}

export {addDoctor, adminLogin}