import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Navbar from './common/Navbar'
import Jobs from './common/Jobs/Jobs'
import WhoWeAre from './NavbarFiles/WhoWeAre'
import Blogs from './NavbarFiles/Blogs'
import ContactUs from './NavbarFiles/ContactUs'
import LandingPage from './LandingPage'
import Register from './auth/Register'
import Login from './auth/Login'



function App() {
  // React.useEffect(() => {
  //   const getData = async () => {
  //     const res = await axios.get('/api/jobs')
  //     console.log(res)
  //   }
  //   getData()
  // })

  return (
    <BrowserRouter>
      <Navbar/>
      <Switch>
        <Route exact path='/'>
          <LandingPage />
        </Route>
        <Route exact path='/register/'>
          <Register />
        </Route>
        <Route exact path='/login/'>
          <Login />
        </Route>
        <Route exact path='/jobs'>
          <Jobs />
        </Route>
        <Route exact path='/whoweare'>
          <WhoWeAre />
        </Route>
        <Route exact path='/blogs'>
          <Blogs />
        </Route>
        <Route exact path='/contactus'>
          <ContactUs />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default App
