import React from 'react'
import { getAllBlogs } from '../lib/api'
import BlogCard from '../common/Blogs/BlogsCard'
import Error from '../common/Error'
import Loading from '../common/Loading'


function Blogs(){
  const [blogs, setBlogs] = React.useState(null)
  const [isError, setIsError] = React.useState(false)
  const isLoading = !blogs && !isError

  React.useEffect(() => {
    const getData = async () => {
      try {
        const res = await getAllBlogs()
        setBlogs(res.data)
      } catch (err) {
        setIsError(true)
      }
    }
    getData()
  }, [])

  return (
    <section className="section">
      <div className="container">
        {isError && <Error />}
        {isLoading && <Loading />}
        <div className="columns is-multiline">
          {blogs &&
            blogs.map(blog => (
              <BlogCard
                key={blog.id}
                blogId={blog.id}
                title={blog.title}
                content={blog.content}
                image={blog.image}
              />
            ))}
        </div>
      </div>
    </section>
  )
}

export default Blogs