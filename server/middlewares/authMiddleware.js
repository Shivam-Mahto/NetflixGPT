import jwt from "jsonwebtoken";

const requireSignIn = (req, res, next) => {
  try {
    const decode = jwt.verify(req.body.token, process.env.JWT_SECRET);
    req.userId = decode.id;
    next();
  } catch (err) {
    console.log("Error in authorization", err);

    return res.status(401).json({
      success: false,
      message: "Unauthorized Access",
    });
  }
};

export default requireSignIn;
