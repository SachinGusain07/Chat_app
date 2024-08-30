import User from '../models/user.model.js'
export const getUserForSidebar = async (req , res) =>
{
    try{
        
        const loggedInUserId = req.user._id;
        const filteredUser = await User.find({_id:{$ne :loggedInUserId}}).select("-password");

        res.status(200).json(filteredUser);

    }
    catch(eror){

        console.log("error in the getUserfor Sidebar" , error.message);
        res.status(500).json({error:"internal server error" })
    }
}