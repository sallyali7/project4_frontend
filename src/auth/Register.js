import React from 'react'
import { useHistory } from 'react-router'
import { registerUser } from '../lib/api.js'
// import { Link } from 'react-router-dom'



const initialState = {
  firstName: '',
  lastName: '',
  email: '',
  username: '',
  password: '',
  passwordConfirmation: '',
}

function Register() {
  const [formData, setFormData] = React.useState(initialState)
  const history = useHistory()

  // handle change (needs error handling)
  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  // handle submit - edit this
  const handleSubmit = async e => {
    e.preventDefault()
    console.log('form data submitted', formData)
    try {
      await registerUser(formData)
      history.push('/login')
    } catch (err) {
      // setFormErrors(err.response.data.errors)
      console.log('registering error')
    }
  }

  return (
    <section className="d-flex p-2 bd-highlight">
      <div className="card">
        <div className="card-header">
        </div>
        <div className="card-body">
          <h5 className="card-title">Create an account</h5>
          <form className="card-text .flex-column" onSubmit={handleSubmit}>
            <label className="authLabel" htmlFor='firstName'>
            </label>
            <input className="regInput"
              placeholder='First name'
              name='firstName'
              onChange={handleChange}
            />
            <label className='authLabel' htmlFor='lastName'>
            </label>
            <input 
              placeholder='Last name'
              name='lastName'
              onChange={handleChange}
            />
            <label className='authLabel' htmlFor='email'>
            </label>
            <input
              placeholder='Email'
              name='email'
              onChange={handleChange}
            />
            <label className='authLabel' htmlFor='username'>
            </label>
            <input
              placeholder='Username'
              name='username'
              onChange={handleChange}
            />
            <label className='authLabel' htmlFor='password'>
            </label>
            <input
              placeholder='Password'
              type="password"
              name='password'
              onChange={handleChange}
            />
            <label className='authLabel' htmlFor='passwordConfirmation'>
            </label>
            <input
              placeholder='Confirm password'
              type="password"
              name='passwordConfirmation'
              onChange={handleChange}
            />
            <button className="register btn btn-primary" type='submit' id="reg">Register</button>
          </form>
          {/* <Link> */}
          <a href="/login" className="login btn btn-primary" id="log">Login</a>
          {/* </Link> */}
        </div>
      </div>
    </section>
  )
}

export default Register