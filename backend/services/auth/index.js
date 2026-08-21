import express from "express";
import dotenv from "dotenv"
dotenv.config();

const app = express()

const PORT = process.env.PORT || 3001;


app.get("/", (req, res) => {
    res.send("Hellow from Auth Service")
})
app.listen(PORT, () => {
    console.log(`Auth Service is running on the port ${PORT}`)
})