import React from 'react'
import video from '../assets/video.mp4'
import { Link } from 'react-router-dom'
import  people  from '../assets/people.jpg'
import jobs from '../assets/jobs.jpg'
import articles from '../assets/articles.jpg'

// import { removeId, removeToken } from './lib/auth.js'
// , useHistory 
function LandingPage() {
  // { isAuth, setIsAuth }
  // const history = useHistory()

  // const handleLogout = () => {
  //   setIsAuth(false)
  //   removeToken()
  //   removeId()
  //   history.push('/')
  //   // createNotification('Come back again soon!')
  // }
  return (
    <div className="container col-xxl-8 px-4 py-5">
      <div className="row flex-lg-row-reverse align-items-center g-5 py-5" id="#landinghero">
        <div className="col-10 col-sm-8 col-lg-6">
          <video src={video} width="700" height="500" className="d-block mx-lg-auto img-fluid" loop autoPlay>
          </video>
        </div>
        <div className="col-lg-6">
          <h1 className="display-5 fw-bold lh-1 mb-3">Tech-Connect</h1>
          <p className="lead">Finding your career passions in Tech globally. Register to recieve updates and apply directly to our sought after Tech roles.</p>
          <div className="d-grid gap-2 d-md-flex justify-content-md-start">
            <><Link to='/register/'>
              <button type="button" className="btn btn-outline-primary btn-lg px-4 me-md-2">Sign up</button>
            </Link>
            <Link to='/login/'>
              <button type="button" className="btn btn-outline-secondary btn-lg px-4">Log in</button>
            </Link></>
            
            {/* {isAuth && (
              <button
                className="nav-item-logout"
                onClick={handleLogout}
              >Log Out
              </button>
            )
            } */}
            
          </div>
        </div>
      </div>
      <hr/>
  
      <div className="row">
        <div className="col-lg-4">
          <img src={people} className="img-thumbnail"/>
          <h2>Who We Are</h2>
          <p>Some representative placeholder content for the three columns of text below the carousel. This is the first column.</p>
          <p><Link className="btn btn-outline-primary" to="/whoweare">View details &raquo;</Link></p>
        </div>
        <div className="col-lg-4">
          

          <img src={jobs} className="img-thumbnail"/>
          <h2>Browse Job</h2>
          <p>Another exciting bit of representative placeholder content. This time, weve moved on to the second column.</p>
          <p><Link className="btn btn-outline-primary" to="/jobs">View details &raquo;</Link></p>
        </div>
        <div className="col-lg-4">
          
          <img src={articles} className="img-thumbnail"/>
          <h2>Articles</h2>
          <p>And lastly this, the third column of representative placeholder content.</p>
          <p><Link className="btn btn-outline-primary" to="/blogs">View details &raquo;</Link></p>
        </div>
      </div>
      <div className="b-example-divider"></div>

      <div className="container">
        <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
          <div className="col-md-4 d-flex align-items-center">
            <a href="/" className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
              <svg className="bi" width="30" height="24"><use xlinkHref="#bootstrap"/></svg>
            </a>
            <span className="text-muted">&copy; 2022 Tech-Connect, Inc</span>
          </div>

          <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
            <li className="ms-3"><a className="text-muted" href="#"><svg className="bi" width="24" height="24"><use xlinkHref="#twitter"/></svg></a></li>
            <li className="ms-3"><a className="text-muted" href="#"><svg className="bi" width="24" height="24"><use xlinkHref="#instagram"/></svg></a></li>
            <li className="ms-3"><a className="text-muted" href="#"><svg className="bi" width="24" height="24"><use xlinkHref="#facebook"/></svg></a></li>
          </ul>
        </footer>
      </div>
    </div>
    
  )
}

export default LandingPage