import Main from '../components/main/index'
import SignIn from '../components/auth/signin/index'

interface typeRoutes {
    path: string,
    component: JSX.Element
}

export default [
    { path: '', component: <Main/> },
    { path: '/signin', component: <SignIn/> },
]