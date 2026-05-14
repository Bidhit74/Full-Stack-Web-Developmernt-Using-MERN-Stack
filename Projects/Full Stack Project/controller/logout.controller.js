import dotenv from "dotenv";
dotenv.config();

const logoutUser = async (req, res) => {
  try {
    // Clear authentication cookie
    res.clearCookie("token", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
    });

    res.status(200).json({
      success: true,
      message: "Logged out Successfully",
    });
  } catch (error) {
    console.log("Logout file: ", error.message);
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

export default logoutUser;
