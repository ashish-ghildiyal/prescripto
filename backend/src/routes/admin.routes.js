import express from 'express';
import { addDoctor } from '../controllers/admin.controller.js';
import { upload } from '../middleware/multer.middleware.js';

// Router for admin
const adminRouter = express.Router();

// API for adding doctor and uploading image using multer
adminRouter.post('/add-doctor', upload.single('image'), addDoctor);

export default adminRouter;