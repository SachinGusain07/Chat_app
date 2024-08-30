import jwt from 'jsonwebtoken';



const generateTokenAndSetCookie=(userId , res)=>{
 const token =jwt.sign({userId}, process.env.JWT_SECRET,{
    expiresIn:'15d'
 });

 res.cookie("jwt",token,{
    maxAge :15*24*60*60*1000,
    httpOnly :  true, // only acess by http ..prevent xss attact crose side scripting attack
    sameSite:"strict", //csrf attack cross-side  request forgery attack prevent
    secure : process.env.Node_Env !=="development"

 })
};

export default generateTokenAndSetCookie;