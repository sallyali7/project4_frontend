import { Link } from 'react-router-dom'

function Navbar(){
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light rounded" aria-label="Twelfth navbar example">
      <div className="container-fluid">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample10" aria-controls="navbarsExample10" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse justify-content-md-center" id="navbarsExample10">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to ="/" className="nav-link active" aria-current="page" >Home </Link>
            </li>
            <li className="nav-item">
              <Link to ="/whoweare" className="nav-link active" aria-current="page" href="#">Who We Are </Link>
            </li>
            <li className="nav-item">
              <Link to ="/jobs" className="nav-link">Jobs</Link>
            </li>
            <li className="nav-item">
              <Link to ="/blogs" className="nav-link">Articles</Link>
            </li>
            <li className="nav-item">
              <Link to ="/contactus" className="nav-link">Contact Us</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>

  )
}

export default Navbar

