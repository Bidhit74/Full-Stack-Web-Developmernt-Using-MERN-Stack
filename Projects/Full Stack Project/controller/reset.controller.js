const resetPassword = async (req, res) => {
  try {
    // collect token from params
    // password from req.body
    // find user based on token and expiry
    // set password in user
    // resetToken and resetExpiry = reset(empty)
    // data save
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export default resetPassword;
