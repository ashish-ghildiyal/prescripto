import jwt from 'jsonwebtoken';

const authAdmin = async(req, res, next) => {
    try {
        const {token} = req.headers;
        if(!token) {
            return res.status(401).json({message: "Unauthorized"});
        }
       
        const token_decode = jwt.verify(token, process.env.JWT_SECRET);
        console.log(token_decode);
        console.log(token);

        if(token_decode !== process.env.ADMIN_EMAIL + process.env.ADMIN_PASSWORD) {
            return res.status(401).json({message: "Unauthorized"});
        }
        next()

    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

export default authAdmin