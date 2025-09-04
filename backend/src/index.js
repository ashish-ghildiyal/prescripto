import app from "./app.js";
import dotenv from "dotenv";
import connectDB from "./db/db.js";
import adminRouter from "./routes/admin.routes.js";

dotenv.config({
    path: "src/config/.env"
});

// Port number 
const PORT = process.env.PORT || 5000;

// Routes 
app.use("/api/admin", adminRouter)

// Connect to database and start server
connectDB()
.then(() => {
    app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
}).catch((err) => {
    console.log(err);
});

