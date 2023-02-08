import { BrowserRouter } from 'react-router-dom'
import { RecoilRoot } from 'recoil'
import Router from './routers/router'

const App = () => {
    return (
        <RecoilRoot>
            <BrowserRouter>
                <Router/>
            </BrowserRouter>
        </RecoilRoot>
    )
}

export default App;
