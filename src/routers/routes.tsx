import Main from '../components/main/index'

interface typeRoutes {
    path: string,
    component: JSX.Element
}

export default [
    { path: '', component: <Main/> },
]