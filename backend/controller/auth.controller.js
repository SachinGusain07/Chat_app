import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";
import generateTokenAndSetCookie from "../utils/generateToken.js";

export const signup = async (req, res) => {
  try {
    const { fullName, username, password, confirmPassword, gender } = req.body;

    if (password == !confirmPassword) {
      return res.status(400).json({ error: "password don't match" });
    }

    const user = await User.findOne({ username });

    if (user) {
      return res.status(400).json({ error: "Username already exists" });
    }

    //Hash password...............................................................................................

    const salt = await bcryptjs.genSalt(10);
    const hashedPassword = await bcryptjs.hash(password, salt);
    //#######################################################

    //profile picture
    const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`;
    const girlProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`;
    //##########################################################

    //create a new user and save data to data base

    const newUser = new User({
      fullname: fullName,
      username,
      password: hashedPassword,
      gender,
      profilepic: gender === "male" ? boyProfilePic : girlProfilePic,
    });

    if (newUser) {
      //Generate JWT token
      await newUser.save();
      generateTokenAndSetCookie(newUser.id, res);
      //save to db
      //#######################################################

      //send data to front end
      res.status(201).json({
        _id: newUser.id,
        fullname: newUser.fullname,
        usename: newUser.username,
        profilePic: newUser.profilepic,
      });
    } else {
      res.status(400).json({ error: "Invalid user data" });
    }
    //#######################################################
  } catch (error) {
    console.log("Error in signup controller", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

//#############################333
// .......login
//#####################################
export const login = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(400).json({ error: "No such user exist" });
    }
    const isPasswordCorrect = await bcryptjs.compare(
      password,
      user?.password || ""
    );
    if (!isPasswordCorrect) {
      return res.status(400).json({ error: "Invalid username or password" });
    }

    generateTokenAndSetCookie(user._id, res);

    res.status(200).json({
      _id: user.id,
      fullname: user.fullname,
      usename: user.username,
      profilePic: user.profilepic,
    });
    console.log(req.body);
  } catch (error) {
    console.log("Error in login controller", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

//###################################
//  logout
//###################################

export const logout = (req, res) => {
  try {
    res.cookie("jwt", "", { maxAge: 0 });
    res.status(200).json({ message: "logout sucessfully" });
  } catch (error) {
    console.log("Error in logout controller", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
