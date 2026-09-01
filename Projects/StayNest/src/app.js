import express from "express";
import path from "path";
import routes from "./routes/index.routes.js";
import methodOverride from "method-override";
import ejsMate from "ejs-mate";

const App = () => {
	const app = express();

	// use ejs-locals for all ejs templates:
	app.engine("ejs", ejsMate);
	// EJS
	app.set("view engine", "ejs");
	app.set("views", path.join(import.meta.dirname, "views"));

	//Use public folder
	app.use(express.static(path.join(import.meta.dirname, "/public")));

	// Middleware for json data read and send
	app.use(express.urlencoded({ extended: true }));
	app.use(express.json());

	// override with POST having ?_method=DELETE
	app.use(methodOverride("_method"));

	// Routes
	app.use("/", routes);

	// Home Routes

	return app;
};

export default App;
