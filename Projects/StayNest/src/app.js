import express from "express";
import path from "path";

const App = () => {
  const app = express();

  // EJS
  app.set("view engine", "ejs");
  app.set("views", path.join(import.meta.dirname, "views"));

  // Middleware for json data read and send
  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());

  // Routes
  app.get("/", (req, res) => {
    res.send("Hello StayNest");
  });

  return app;
};

export default App;
