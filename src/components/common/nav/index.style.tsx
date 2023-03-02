import styled from 'styled-components'

export const background = styled.div`
    width: 100vw;
    height: 100px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: white;
    box-shadow: 0px 3px 5px lightgray;
`

export const logo = styled.img`
    height: 100%;
`

export const container = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 18px;
    gap: 8%;
`

export const authForm = styled.div`
    width: 20%;
    height: 80%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10%;
    > span {
        font-size: 18px;
    }
    
`
export const authButton = styled.div`
    padding: 10px;
    color: white;
    background-color: #5f4ab9;
    border-radius: 10%;
    box-shadow: 0px 0px 5px 1px gray;
    cursor: pointer;
    transition: .15s ease-in-out all;
    &:hover {
        opacity: 0.9;
    }
`
