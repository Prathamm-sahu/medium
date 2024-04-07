import { FC } from 'react'
import { useBlog } from '../hooks'
import { useParams } from 'react-router-dom'
import FullBlog from '../components/FullBlog'
import Navbar from '../components/Navbar'

interface BlogProps {
  
}

const Blog: FC<BlogProps> = () => {
  const { id } = useParams()
  const { loading, blog } = useBlog({ id: id || ""})
  console.log(blog)
  if(!blog) {
    return null
  }

  return (
    <>
      <Navbar />
      <FullBlog loading={loading} blog={blog} />
    </>
  )
}

export default Blog