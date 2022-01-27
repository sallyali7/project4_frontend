
function BlogCard({ title, content, image }) {
  return (
    
    <div className="card mb-3">
      <img src={image} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h3 className="card-title">{title}</h3>
        <p className="card-text">{content}</p>
        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
      </div>
    </div>
  )
}

export default BlogCard