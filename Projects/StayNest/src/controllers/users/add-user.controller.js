import User from "../../models/User.js";

const addUserDB = async (req, res, next) => {
    try {
        const { username, email, password } = req.body;
        const normalizedEmail = email.trim().toLowerCase();
        // Check email before registration
        const existingUser = await User.findOne({
            email: normalizedEmail,
        });
        if (existingUser) {
            req.flash("error", "Email is already registered.");
            return res.redirect("/signup");
        }
        // Register user
        const user = await User.register(
            { username, email: normalizedEmail },
            password,
        );
        console.log(user);
        // passport automatic login
        req.login(user, (err) => {
            if (err) {
                return next(err);
            }
            req.flash(
                "success",
                "Account created successfully. Welcome to StayNest!",
            );
            const redirectUrl = res.locals.redirectUrl || "/";
            res.redirect(redirectUrl);
        });
    } catch (error) {
        req.flash("error", error.message);
        res.redirect("/signup");
    }
};

export default addUserDB;
