import React from 'react'
import { useHistory } from 'react-router'
import { Link } from 'react-router-dom'
// import { Link } from 'react-router-dom'
import { loginUser } from '../lib/api.js'
import { setToken } from '../lib/auth.js'


function Login({ setIsAuth }) {
  // use history
  const history = useHistory()

  // set form data useState
  const [formData, setFormData] = React.useState({
    email: '',
    password: '',
  })

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async e => {
    e.preventDefault()

    try {

      const res = await loginUser(formData)
      console.log(res.data)
      // setId(res.data.id)
      setToken(res.data.token)
      console.log('ehllo')
      setIsAuth(true)
      console.log('ello')
      // createNotification(res.data.message)
      history.push('/jobs')
      console.log('hello')
    } catch (err) {
      // setIsError(true)
    }
  }

  return (
    <section className="vh-100 gradient-custom logincard">
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-12 col-md-8 col-lg-6 col-xl-5">
            <div className="card bg-light text-black">
              <div className="card-body p-5 text-center">
                <div className="mb-md-5 mt-md-4 pb-5">
                  <h2 className="fw-bold mb-2 text-uppercase text-primary">Login</h2>
                  <p className="text-black-50 mb-5">Please enter your login and password!</p>
                  
                  <div className="form-outline form-black mb-4">
                  
                    <form onSubmit={handleSubmit}>
                      <input name="email" id="typeEmailX" className="form-control form-control-lg" onChange={handleChange} />
                      <label className="form-label" htmlFor="email">Email</label>
                    
  
                      <div className="form-outline form-black mb-4">
                        <input name="password" type="password" id="typePasswordX" className="form-control form-control-lg" onChange={handleChange} />
                        <label className="form-label" htmlFor="password">Password</label>
                      </div>
  
                      <p className="small mb-5 pb-lg-2"><a className="text-white-50" href="#!">Forgot password?</a></p>
  
                      <button className="btn btn-outline-primary btn-lg px-5" type="submit">Login</button>
                    </form>
                  </div>
                  <div className="d-flex justify-content-center text-center mt-4 pt-1">
                    <a href="#!" className="text-white"><i className="fab fa-facebook-f fa-lg"></i></a>
                    <a href="#!" className="text-white"><i className="fab fa-twitter fa-lg mx-4 px-2"></i></a>
                    <a href="#!" className="text-white"><i className="fab fa-google fa-lg"></i></a>
                  </div>
  
                </div>
  
                <div>
                  <p className="mb-0">Don&apos;t have an account? <Link to="/register" className="text-primary-50 fw-bold">Sign Up</Link></p>
                </div>
  
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

  // <div className="card mw-50 mh-50">
  //   <div className="row g-0" id="login">
  //     <div className="col-md-4"> 
  //     </div>
  //     <div className="col-md-4">
  //       <div className="card-body">
  //         <h5 className="card-title">Log in</h5>
  //         <form className="card-text" onSubmit={handleSubmit}>
  //           <label className="authLabel" htmlFor="email">
  //             <i className="bi bi-envelope-fill"></i>
                
  //           </label>
  //           <input 
  //             placeholder='Email'
  //             name='email'
  //             onChange={handleChange}
  //           />
  //           <label className="authLabel" htmlFor='password'>
  //             <i className="bi bi-unlock-fill"></i>
  //           </label>
  //           <input
  //             placeholder='Password'
  //             name='password'
  //             type='password'
  //             onChange={handleChange}
  //           />
  //           <button type="submit" className="authButton">
  //         Log in
  //           </button>
  //         </form>
  //         <p className="card-text-register"><small className="text-muted">
  // Don&apos;t have an account? </small>
  //         <button className="regButton">Register</button>
  //         </p>
  //       </div>
  //     </div>
  //   </div>
  // </div>
  )
}

export default Login


