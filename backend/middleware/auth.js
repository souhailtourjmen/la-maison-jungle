const jwt =require('jsonwebtoken');
module.exports = (req,res,next) => {
    try{
        const token=req.headres.authorization.split(' ')[1];
        const decodedToken= jwt.verify(token,'=?6xh5hRs%-UV293p.8Qb(<;FN6zvS?GUV7Td8|5pHz8>8#fr3');
        const userId =decodedToken.userId;
        req.auth={userId:userId};
        next();
    }
    catch(err){
        res.status(401).json({err});
    }
};