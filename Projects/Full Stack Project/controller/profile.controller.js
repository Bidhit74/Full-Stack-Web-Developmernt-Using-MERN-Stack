import User from "../model/User.model.js";

const profile = async (req, res) => {
  try {
    // find user use id
    const user = await User.findById(req.user.id).select("-password");

    // Validate
    if (!user) {
      return res.status(401).json({
        success: false,
        message: "Unauthorized user",
      });
    }

    res.status(200).json({
      success: true,
      message: "User profile login Successful",
      user,
    });
  } catch (error) {
    console.log("profile error: ", error);

    return res.status(500).json({
      success: false,
      message: "profile login not Successful",
    });
  }
};

export default profile;
