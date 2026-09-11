import App from "./src/App.js";
import connectDB from "./src/config/db.js";

const PORT = 8000;

const startServer = async () => {
	try {
		// Connect Database
		connectDB();

		const app = App();
		app.listen(PORT, () => {
			console.log(`Server running on port ${PORT}`);
		});
	} catch (error) {
		console.error("Server failed:", error);
		process.exit(1);
	}
};

startServer();
