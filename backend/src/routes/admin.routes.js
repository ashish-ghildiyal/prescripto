import express from 'express';
import { addDoctor, adminLogin } from '../controllers/admin.controller.js';
import { upload } from '../middleware/multer.middleware.js';
import authAdmin from '../middleware/authAdmin.middleware.js';

// Router for admin
const adminRouter = express.Router();

// API for adding doctor and uploading image using multer
adminRouter.post('/add-doctor', authAdmin, upload.single('image'), addDoctor);
adminRouter.post('/admin-login', adminLogin);

export default adminRouter;