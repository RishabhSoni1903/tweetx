import express from 'express';
import dotenv from "dotenv";
import { mongoose } from 'mongoose';
import bodyParser from 'body-parser';
import cors from "cors";
import { login, register } from './controllers/auth.js';
import postRoutes from './routes/posts.js';
import userRoutes from './routes/users.js';

dotenv.config()

const app = express();
app.use(express.json())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors(
    {
        origin: ["https://tweetx-ten.vercel.app"],
        method: ["GET", "POST", "PATCH", "DELETE"],
        credentials: true
    }
))

app.post("/register", register);
app.post("/login", login);
app.use("/post", postRoutes)
app.use("/user", userRoutes)

const PORT = process.env.PORT || 6001
mongoose.connect(process.env.MONGO_URL, {
}).then(() => {
    app.listen(PORT, () => { console.log(`Server Port: ${PORT}`) })
}).catch((error) => { console.log(`${error} did not connect`) })

export default app;
