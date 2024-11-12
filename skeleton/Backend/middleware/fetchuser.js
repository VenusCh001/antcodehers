const jwt= require('jsonwebtoken')
const  jwtsecret='abcd' 
const fetchuser=(req, res, next)=>{
    const token= req.header('auth-token')
    if(!token){
        return res.status(401).send({error:"please authenticate using a valid token"})
    }
    try {
        const data= jwt.verify(token, jwtsecret)
        req.user=data.user
        next()
    } catch (error) {
        return res.status(401).send({error:"please authenticate using a valid token"})
    }
}
module.exports= fetchuser