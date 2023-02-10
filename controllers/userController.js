const userModel = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const SECRET_KEY = "TESTAPI";

const signup = async (req, res) => {


    const { username, email, password } = req.body;

    try {
        // Existing user check
        const existingUser = await userModel.findOne({ email: email });
        if (existingUser) {
            return res.status(400).json({ message: "user already exist" });
        }

        // Hashed Password
        const hashedPassword = await bcrypt.hash(password, 10);

        // User creation
        const result = await userModel.create({
            email: email,
            password: hashedPassword,
            username: username
        })

        // Token generate
        const token = jwt.sign({ email: result.email, id: result._id }, SECRET_KEY);

        res.status(201).json({ user: result, token: token });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Somethig went wrong' });
    }
}

const login = async (req, res) => {
    const { email, password } = req.body;
    try {
        const existingUser = await userModel.findOne({ email: email });
        if (!existingUser) {
            return res.status(404).json({ message: "User not found" });
        }

        const matchPassword = await bcrypt.compare(password, existingUser.password);
        if (!matchPassword) {
            return res.status(400).json({ message: "Invalid credentials!" });
        }

        const token = jwt.sign({ email: existingUser.email, id: existingUser._id }, SECRET_KEY);

        res.status(201).json({ user: existingUser, token: token });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Somethig went wrong' });
    }
}

const profile = async (req, res) => {
    try {
        const userDetails = await userModel.find({ _id: req.userId });

        res.status(200).json(userDetails[0]);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Something went wrong" })
    }
}

const updateProfile = async (req, res) => {
    const id = req.userId;
    const { sector, isAgreed } = req.body;
    const newUser = {
        sectors: sector,
        isAgreed: isAgreed
    };
    console.log(newUser, id)
    try {
        await userModel.findByIdAndUpdate(req.userId, newUser, { new: true });
        res.status(200).json(newUser);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Something went wrong" })
    }
}


module.exports = { signup, login, profile, updateProfile }