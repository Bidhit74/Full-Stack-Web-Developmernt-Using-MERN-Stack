const checkUser = (req, res) => {
    req.flash("success", "Welcome Back to StayNest");
    const redirectUrl = res.locals.redirectUrl || "/";
    res.redirect(redirectUrl);
};

export default checkUser;
