import express from "express";
import path from "path";
import routes from "./routes/index.routes.js";
import methodOverride from "method-override";

const App = () => {
	const app = express();

	// EJS
	app.set("view engine", "ejs");
	app.set("views", path.join(import.meta.dirname, "views"));

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
