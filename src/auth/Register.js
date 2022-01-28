import React from 'react'
import { useHistory } from 'react-router'
import { registerUser } from '../lib/api.js'
import { Link } from 'react-router-dom'



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
    <section className="vh-100 bg-image">
      <div className="mask d-flex align-items-center h-100 gradient-custom-3">
        <div className="container h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-9 col-lg-7 col-xl-6">
              <div className="card">
                <div className="card-body p-5">
                  <h2 className="text-uppercase text-center text-primary mb-5">Create an account</h2>
                  <form onSubmit={handleSubmit}>
                    <div className="form-outline mb-4">
                      <input type="text" name="firstName" id="form3Example1cg" className="form-control form-control-lg" onChange={handleChange}/>
                      <label className="form-label" htmlFor="form3Example1cg">First Name</label>
                    </div>
                    <div className="form-outline mb-4">
                      <input type="text" name="lastName" id="form3Example1cg" className="form-control form-control-lg" onChange={handleChange}/>
                      <label className="form-label" htmlFor="form3Example1cg">Last Name</label>
                    </div>
                    <div className="form-outline mb-4">
                      <input type="text" name="username" id="form3Example1cg" className="form-control form-control-lg" onChange={handleChange}/>
                      <label className="form-label" htmlFor="form3Example1cg">Username</label>
                    </div>

                    <div className="form-outline mb-4">
                      <input type="email" name="email" id="form3Example3cg" className="form-control form-control-lg" onChange={handleChange} />
                      <label className="form-label" htmlFor="form3Example3cg">Your Email</label>
                    </div>

                    <div className="form-outline mb-4">
                      <input type="password" name="password" id="form3Example4cg" className="form-control form-control-lg" onChange={handleChange}/>
                      <label className="form-label" htmlFor="form3Example4cg">Password</label>
                    </div>

                    <div className="form-outline mb-4">
                      <input type="password" name="passwordConfirmation" id="form3Example4cdg" className="form-control form-control-lg" onChange={handleChange}/>
                      <label className="form-label" htmlFor="form3Example4cdg">Repeat your password</label>
                    </div>

                    <div className="d-flex justify-content-center">
                      <button type="submit" className="btn btn-primary btn btn-lg text-white">Register</button>
                    </div>

                    <p className="text-center text-muted mt-5 mb-0">Have already an account?  <Link to="/login"><button className="btn btn-outline-primary">Login here</button></Link>
                    </p> 
                  </form>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>





  // <section className="d-flex p-2 bd-highlight">
  //   <div className="card">
  //     <div className="card-header">
  //     </div>
  //     <div className="card-body">
  //       <h5 className="card-title">Create an account</h5>
  //       <form className="card-text .flex-column" onSubmit={handleSubmit}>
  //         <label className="authLabel" htmlFor='firstName'>
  //           <i className="bi bi-person-circle"></i>
  //         </label>
  //         <input className="regInput"
  //           placeholder='First name'
  //           name='firstName'
  //           onChange={handleChange}
  //         />
  //         <label className='authLabel' htmlFor='lastName'>
  //         </label>
  //         <input 
  //           placeholder='Last name'
  //           name='lastName'
  //           onChange={handleChange}
  //         />
  //         <label className='authLabel' htmlFor='email'>
  //         </label>
  //         <input
  //           placeholder='Email'
  //           name='email'
  //           onChange={handleChange}
  //         />
  //         <label className='authLabel' htmlFor='username'>
  //         </label>
  //         <input
  //           placeholder='Username'
  //           name='username'
  //           onChange={handleChange}
  //         />
  //         <label className='authLabel' htmlFor='password'>
  //         </label>
  //         <input
  //           placeholder='Password'
  //           type="password"
  //           name='password'
  //           onChange={handleChange}
  //         />
  //         <label className='authLabel' htmlFor='passwordConfirmation'>
  //         </label>
  //         <input
  //           placeholder='Confirm password'
  //           type="password"
  //           name='passwordConfirmation'
  //           onChange={handleChange}
  //         />
  //         <button className="register btn btn-primary" type='submit' id="reg">Register</button>
  //       </form>
  //       <Link>
  //         <a href="/login" className="login btn btn-primary" id="log">Login</a>
  //       </Link>
  //     </div>
  //   </div>
  // </section>
  )
}

export default Register