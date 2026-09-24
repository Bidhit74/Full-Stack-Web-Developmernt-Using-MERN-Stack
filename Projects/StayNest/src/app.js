import express from "express";
import path from "path";
import routes from "./routes/index.routes.js";
import methodOverride from "method-override";
import ejsMate from "ejs-mate";
import handerError from "./middlewares/error-handler.middleware.js";
import ExpressError from "./utils/ExpressError.js";
import dotenv from "dotenv";
import session from "express-session";
import flash from "connect-flash";
import passport from "passport";
import LocalStrategy from "passport-local";
import User from "./models/User.js";

const App = () => {
    const app = express();
    dotenv.config();

    const sessionOptions = {
        secret: process.env.SESSION_SECRET,
        resave: false,
        saveUninitialized: false,
        cookie: {
            path: "/", // By default
            expires: Date.now() + 3 * 24 * 60 * 60 * 1000, // (3 * 24 * 60 * 60 * 1000 || day * hours * minuts * seconds * miliseconds)
            maxAge: 3 * 24 * 60 * 60 * 1000, // 3 Days
            httpOnly: true, // By default
        },
    };
    // use session middleware
    app.use(session(sessionOptions));
    // connect-flash middleware
    app.use(flash());

    // passport use after session
    app.use(passport.initialize());
    app.use(passport.session());
    passport.use(new LocalStrategy(User.authenticate()));
    passport.serializeUser(User.serializeUser());
    passport.deserializeUser(User.deserializeUser());

    // local temp storage middleware - passport end - for use isAuthenticated()
    app.use((req, res, next) => {
        res.locals.success = req.flash("success");
        res.locals.error = req.flash("error");
        res.locals.isLoggedIn = req.isAuthenticated();
        req.lo;
        next();
    });

    // use ejs-locals for all ejs templates:
    app.engine("ejs", ejsMate);
    // EJS
    app.set("view engine", "ejs");
    app.set("views", path.join(import.meta.dirname, "views"));

    //Use public folder
    app.use(express.static(path.join(import.meta.dirname, "public")));

    // Middleware for json data read and send
    app.use(express.urlencoded({ extended: true }));
    app.use(express.json());

    // override with POST having ?_method=DELETE
    app.use(methodOverride("_method"));
    // Routes
    app.use("/", routes);

    // agar kis routes se nahi match kare tab;
    // 404 handler
    app.all("/{*splat}", (req, res, next) => {
        // Devtools request handle
        if (req.path === "/.well-known/appspecific/com.chrome.devtools.json") {
            return res.status(204).end();
        }
        next(new ExpressError(404, "Page not found"));
    });

    // middleware
    app.use(handerError);

    return app;
};

export default App;
