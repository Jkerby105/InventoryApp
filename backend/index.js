import express from "express";

import { commonMiddleWare } from "./middleware/common.js";
import authRouter from "./routes/auth.js";
import adminRouter from "./routes/admin.js";


import 'dotenv/config.js'

const app = express();

const port = 3000;

commonMiddleWare.forEach((mw) => app.use(mw));

app.use("/account",authRouter);
app.use("/admin",adminRouter);

app.use((error, req, res, next) => {
    const status = error.statusCode || 500;
    const message = error.message;
    const data = error.data;
    res.status(status).json({ message: message, data: data });
});


app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
})
