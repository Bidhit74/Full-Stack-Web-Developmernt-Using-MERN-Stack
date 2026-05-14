import jwt from "jsonwebtoken";
export const isLoggedIn = async (req, res, next) => {
  try {
    // get token from cookies
    console.log(req.cookies);
    const token = req.cookies?.token;

    console.log("Token found: ", token ? "Yes" : "No");

    // validate
    if (!token) {
      return res.status(401).json({
        success: false,
        message: "Authentication failed",
      });
    }

    // Verify JWT token
    const decodedData = jwt.verify(token, process.env.JWT_PRIVATE_KEY);
    console.log("Decodede Data: ", decodedData);

    // Attach decoded user data to request object
    req.user = decodedData;

    // Move to next middleware/controller
    next();
  } catch (error) {
    console.log("Login error: ", error);
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};
