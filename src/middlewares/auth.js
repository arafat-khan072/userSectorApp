const jwt = require("jsonwebtoken");
const SECRET_KEY = "TESTAPI";

const auth = (req, res, next) => {

    try {
        let token = req.headers.authorization;
        if (token) {
            token = token.split(" ")[1];
            let user = jwt.verify(token, SECRET_KEY);
            req.UserId = user.indexOf;
        } else {
            res.status(401).json({ message: "Unauthorized User" });
        }
    } catch (error) {
        console.log(error);
        res.status(401).json({ message: "Unauthorized User" });
    }
}