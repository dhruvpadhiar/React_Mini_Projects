import { useState, useEffect } from 'react'
import {useDispatch} from 'react-redux'
import authService from './appwrite/auth'
import {login, logout} from './store/authSilce'
import './App.css'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import {Outlet} from 'react-router-dom'

function App() {
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()

  useEffect(() => {
    authService.getCurrentUser()
    .then((userData) => {
      if (userData) {
        dispatch(login({userData}))
      } else {
        dispatch(logout())
      }
    })
    .finally(() => setLoading(false))
  }, [])

  return !loading ? (
    <div className='min-h-screen flex flex-wrap content-between bg-white'>
      <div className='w-full block'>
        <Header/>
        <main>
          TODO: {/* <Outlet/> */}
        </main>
        <Footer/>
      </div>
    </div>
  ) : null


}

export default App
