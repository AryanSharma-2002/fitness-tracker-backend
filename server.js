const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const connectDB = require("./config/db");
const cors = require("cors");
const { notFound, errorHandler } = require("./middlewares/errorMiddleware");
const port = process.env.PORT_NO || 8000;
const app = express();
const activityRouter = require("./router/activityRouter");
const registerRouter = require("./router/registerRouter");
const loginRouter = require("./router/loginRouter");
const plansRouter = require("./router/plansRouter");
connectDB();

app.use(cors());
app.use(express.json());
app.use("/api/register", registerRouter);
app.use("/api/login", loginRouter);
app.use("/api/activity", activityRouter);
app.use("/api/plans", plansRouter);

// app.use(notFound);
// app.use(errorHandler);

app.listen(port, () => {
  console.log(`listening at port no. ${port}`);
});
