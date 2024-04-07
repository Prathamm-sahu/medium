import express from "express";
import { authRouter } from "./router/auth";
import { blogRouter } from "./router/blog";
import cors from "cors";
const app = express()
const PORT = 5000

app.use(express.json())
app.use(cors())

app.use("/api/v1", authRouter)
app.use("/api/v1/blog", blogRouter)

app.listen(PORT, () => console.log(`server started on port:${PORT}`))