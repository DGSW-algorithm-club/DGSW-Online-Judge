import * as style from './index.style'
import logo from '../../../images/logo.png'

export default () => {
    return (
        <style.background>
            <style.logo src={logo}/>
            <style.container>
                <span>문제</span>
                <span>문제집</span>
                <span>대회</span>
                <span>채점 현황</span>
                <span>랭킹</span>
                <span>게시판</span>
            </style.container>
            <style.authForm />
        </style.background>
    )
}
