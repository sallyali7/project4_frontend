import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Navbar from './common/Navbar'
import Jobs from './common/jobs/Jobs'
import WhoWeAre from './navbarfiles/WhoWeAre'
import Blogs from './navbarfiles/blogs/Blogs'
import ContactUs from './navbarfiles/ContactUs'
import LandingPage from './common/LandingPage'
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
  const [isAuth, setIsAuth] = React.useState(false)

  return (
    <BrowserRouter>
      <Navbar
        isAuth={isAuth}
        setIsAuth={setIsAuth}/>
      <Switch>
        <Route exact path='/'>
          <LandingPage setIsAuth={setIsAuth}/>
        </Route>
        <Route  path='/register/'>
          <Register />
        </Route>
        <Route path='/login/'>
          <Login setIsAuth={setIsAuth}/>
        </Route>
        <Route  path='/jobs'>
          <Jobs />
        </Route>
        <Route  path='/whoweare'>
          <WhoWeAre />
        </Route>
        <Route path='/blogs'>
          <Blogs />
        </Route>
        <Route path='/contactus'>
          <ContactUs />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default App
