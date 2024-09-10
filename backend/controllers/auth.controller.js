import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import User from "../models/auth.model.js";
User;

export const register = async (req, res) => {
  const user = req.body;
  if (
    !user.email ||
    !user.password ||
    !user.firstName ||
    !user.lastName ||
    !user.company ||
    !user.location
  ) {
    return res
      .status(400)
      .json({ success: false, message: "Please provide complete details" });
  }

  try {
    const { email } = user;
    // Checking if user already exists
    const existingUser = await User.findOne({ email });
    console.log(`registering user Exists : `, existingUser);

    if (existingUser) {
      return res
        .status(400)
        .json({ success: false, message: "User already exists" });
    }

    // Hash the password before saving
    const salt = await bcrypt.genSalt(10); // Generate a salt
    const hashedPassword = await bcrypt.hash(user.password, salt); // Hash the password with the salt

    const newUser = new User({
      email: user.email,
      password: hashedPassword,
      firstName: user.firstName,
      lastName: user.lastName,
      company: user.company,
      location: user.location,
    });

    await newUser.save();
    res.status(201).json({ success: true, data: newUser });
  } catch (error) {
    console.log("Error in creating a user", error.message);
    res
      .status(500)
      .json({ success: false, message: "Couldn't add, server error" });
  }
};

export const login = async (req, res) => {
  const user = req.body;

  try {
    const { email } = user;
    // Finding the user by email
    const foundUser = await User.findOne({ email });
    // console.log(`foundUser :: `, foundUser);

    if (!foundUser) {
      return res
        .status(404)
        .json({ success: false, message: "User not found" });
    }

    // Validate the password
    const isMatch = await bcrypt.compare(user.password, foundUser.password);

    if (!isMatch) {
      return res
        .status(400)
        .json({ success: false, message: "Invalid credentials" });
    }

    // Generating a token ( for session management)
    const useInfo = {
      email: user.email,
      password: user.password,
      firstName: foundUser.firstName,
    };
    const token = jwt.sign({ user: useInfo }, process.env.JWT_SECRET, {
      expiresIn: "36h",
    });

    // console.log(`token :: `, token);
    // Respond with the token and user data
    const replacePassword = (foundUser["password"] = "pwd");
    res.status(200).json({
      success: true,
      message: "Login successful",
      token,
      user: { foundUser, ...replacePassword },
    });
  } catch (error) {
    console.log("Couldn't find user");
    res
      .status(500)
      .json({ success: false, message: "Error in finding the user" });
  }
};

// --** Work on it later **--
export const deleteUser = async (req, res) => {
  const { id } = req.body;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res
      .status(400)
      .json({ success: false, message: "couldn't find the user account" });
  }

  try {
    await User.findByIdAndDelete(id);
    res.status(200).json({ success: true, message: "User account deleted" });
  } catch (error) {
    console.log(` Error in deleting ${error.message} `);
    res
      .status(500)
      .json({ success: false, message: "Couldn't delete account" });
  }
};
