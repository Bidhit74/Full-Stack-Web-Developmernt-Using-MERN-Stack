const checkUser = (req, res) => {
    req.flash("success", "Welcome Back to StayNest");
    res.redirect("/listings");
};

export default checkUser;
