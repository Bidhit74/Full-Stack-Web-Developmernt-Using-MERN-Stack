import express from "express";
import User from "./models/User.js";

const App = () => {
	const app = express();

	app.get("/", async (req, res) => {
		const user = new User({
			name: "Rahul",
			addresses: [
				{
					state: "Bihar",
					city: "Patna",
				},
				{
					state: "Delhi",
					city: "New Delhi",
				},
			],
		});
		await user
			.save()
			.then((u) => {
				console.log(u);
			})
			.catch((err) => {
				console.log(err);
			});
		res.send("Hellow Bidhit");
	});

	return app;
};

export default App;
