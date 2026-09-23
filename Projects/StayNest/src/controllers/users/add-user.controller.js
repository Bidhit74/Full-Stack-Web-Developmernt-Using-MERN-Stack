import User from "../../models/User.js";

const addUserDB = async (req, res) => {
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
        req.flash(
            "success",
            "Account created successfully. Welcome to StayNest!",
        );
        res.redirect("/listings");
    } catch (error) {
        req.flash("error", error.message);
        res.redirect("/signup");
    }
};

export default addUserDB;
