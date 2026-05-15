const forgotPassword = async (req, res) => {
  try {
    // Get email
    // find user based on email
    // reset token + reset expiry => Date.now() + 10*60*1000 = 10 min
    // User save()
    // send email ==> design url
    //
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export default forgotPassword;
