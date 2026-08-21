import express from "express";

const app = express()

const PORT = 8000;


app.get("/", (req, res) => {
    res.send("Hellow from Gateway")
})
app.listen(PORT, () => {
    console.log(`Gateway is running on the port ${PORT}`)
})