import express from "express"
import cors from "cors"
import cookieParser from "cookieParser"

const app = express();

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))

app.use(express.json({limit: "16kb"}))
app.use(express.urlencoded({extended: true, limit: "16kb"}))
app.use(express.static("pubilc"))
app.use(cookieParser)

export {app};