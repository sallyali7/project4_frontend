import { Link, useHistory } from 'react-router-dom'
import { removeId, removeToken } from '../lib/auth.js'

function Navbar({ isAuth, setIsAuth }) {
  const history = useHistory()

  const handleLogout = () => {
    setIsAuth(false)
    removeToken()
    removeId()
    history.push('/')
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light rounded" aria-label="Twelfth navbar example">
      <div className="container-fluid">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample10" aria-controls="navbarsExample10" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse justify-content-md-center" id="navbarsExample10">
          <ul className="navbar-nav">
            {!isAuth && (
              <li className="nav-item">
                <Link to ="/" className="nav-link" aria-current="page" >Home </Link>
              </li>
            )
            }
            
            <li className="nav-item">
              <Link to ="/whoweare" className="nav-link" aria-current="page" href="#">Who We Are </Link>
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
          {isAuth && (
            <>
              <button
                className="btn btn-light"
                onClick={handleLogout}
              >Log Out
              </button>
            </>
          )}
        </div>
      </div>
    </nav>

  )
}


export default Navbar