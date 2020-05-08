import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import bodyparser from "body-parser";
import cookieparser from "cookie-parser";
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";
import globalRouter from "./routers/globalRouter";
import routes from "./routes";

const app = express();

/* This is called middleware 
const handleMiddle = (req, res, next) => {
  console.log("Between");
  next();
};
app.use(handleMiddle); */

app.use(cookieparser());
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));
app.use(helmet());
app.use(morgan("dev"));

app.use(routes.home, globalRouter);
app.use(routes.users, userRouter);
app.use(routes.videos, videoRouter);

export default app;
