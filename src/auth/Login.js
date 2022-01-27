import React from 'react'
import { useHistory } from 'react-router'
import { Link } from 'react-router-dom'
import { loginUser } from '../lib/api'
import { setToken, setId } from '../lib/api'


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
      setId(res.data._id)
      setToken(res.data.token)
      setIsAuth(true)
      // createNotification(res.data.message)
      history.push('/jobs')
    } catch (err) {
      // setIsError(true)
    }
  }

  return (
    <div className="card mw-50 mh-50">
      <div className="row g-0" id="login">
        <div className="col-md-4"> 
        </div>
        <div className="col-md-4">
          <div className="card-body">
            <h5 className="card-title">Log in</h5>
            <form className="card-text" onSubmit={handleSubmit}>
              <label className="authLabel" htmlFor="email">
                <i className="bi bi-envelope-fill"></i>
                
              </label>
              <input 
                placeholder='Email'
                name='email'
                onChange={handleChange}
              />
              <label className="authLabel" htmlFor='password'>
                <i className="bi bi-unlock-fill"></i>
              </label>
              <input
                placeholder='Password'
                name='password'
                type='password'
                onChange={handleChange}
              />
              <Link to ='/jobs'>
                <button type="submit" className="authButton">
            Log in
                </button>
              </Link>
            </form>
            <p className="card-text-register"><small className="text-muted">
    Don&apos;t have an account? </small>
            <button className="regButton"><a to="/register/">Register</a></button>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login


