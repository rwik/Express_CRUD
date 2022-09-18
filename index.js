import express from 'express';
import bodyParser from 'body-parser';
import userRouter from "./routes/users.js";

const app = express();
const PORT = 5000
app.use(bodyParser.json());

app.use('/', userRouter);
app.use('/', express.static('public'));




app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
    });
