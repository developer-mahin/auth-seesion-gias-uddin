import { createBrowserRouter } from 'react-router-dom'
import About from '../components/About/About'
import Error from '../components/Error/Error'
import Home from '../components/Home/Home'
import Main from '../components/Layout/Main'
import Login from '../components/Login/Login'
import Register from '../components/Register/Register'

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement:<Error></Error>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/home',
                element:<Home></Home>
            },
            {
                path:'/about',
                element:<About></About>
            },
            {
                path:'/login',
                element: <Login></Login>
            },
            {
                path:'/register',
                element:<Register></Register>
            }
        ]
    }
])


export default router;