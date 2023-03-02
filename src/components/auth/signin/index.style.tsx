import styled from 'styled-components'

export const background = styled.div`
    width: 100%;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const wrapper = styled.div`
    width: 60%;
    height: 80vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 2px solid black;
    > h1 {
        font-size: calc((100vw / 1240) * 50);
    }
`
export const formContainer = styled.div`
    display: grid;
`

export const idForm = styled.div`
`

export const passwordForm = styled.div`
`

export const passwordCheckForm = styled.div`
`

export const nickForm = styled.div`
`

export const nameForm = styled.div`
`

export const emailForm = styled.div`
`

