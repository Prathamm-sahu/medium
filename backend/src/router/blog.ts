import { Router, Request, Response } from "express"
import db from "../lib/db"
import { authMiddleware } from "../middleware/auth"

const router = Router()

// router.use("/*", (req, res, next) => {   --> way to define middleware in all routes
// })

// Route to fetch all the blogs created by the user

router.post("/", authMiddleware, async (req: Request, res: Response) => {
  try {
    const blogData = req.body
    // @ts-ignore
    const userId = req.userId
    const newBlog = await db.blog.create({
      data: {
        authorId: userId,
        title: blogData.title,
        content: blogData.content,
        published: false
      }
    })

    return res.status(201).json(
      newBlog
    )
  } catch (error: any) {
    console.log(error.message)
    res.status(500).json({
      msg: "something went wrong"
    })
  }
})

router.put("/", authMiddleware, async (req: Request, res: Response) => {
  try {
    const blogId = req.query.blogId
    const blogContent = req.body

    await db.blog.update({
      where: {
        id: blogId
      },
      data: {
        title: blogContent.title,
        content: blogContent.content
      }
    })

    return res.status(200).json({
      msg: "Updated successfull"
    })
  } catch (error: any) {
    console.log(error.message)
    res.status(500).json({
      msg: "something went wrong"
    })
    throw new Error(error.message)
  }
})

router.get("/allblogs/:id", authMiddleware, async (req: Request, res: Response) => {
  try {
    const blogId = req.params.id

    const blog = await db.blog.findFirst({
      where: {
        id: blogId
      },
      include: {
        author: true
      }
    })

    return res.status(200).json({
      blog
    })
  } catch (error: any) {
    console.log(error.message)
    res.status(500).json({
      msg: "something went wrong"
    })
    throw new Error(error.message)
  }
})

router.get("/bulk", async (req: Request, res: Response) => {
  try {
    const blogs = await db.blog.findMany({
      include: {
        author: true
      }
    })
    res.json({
      blogs
    })
  } catch (error: any) {
    console.log(error)
    res.status(500).json({
      msg: "something went wrong"
    })
    throw new Error(error.message)
  }
})

router.route("/").get
export { router as blogRouter }