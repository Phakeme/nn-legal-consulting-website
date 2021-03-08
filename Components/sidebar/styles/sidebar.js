import styled from 'styled-components'

export const Wrapper = styled.nav`
    /* padding: 67px 30px 30px 0px; */
    display: flex;
    /* justify-content: start; */
    /* align-items: end; */
    position: fixed;
    height: 100vh;
    top: 0;
    right: ${({ sidebar }) => (sidebar ? '0' : "-100%")};
    z-index: 20;
    background-color: rgba(0, 0, 0, 0.5);
    width: 100%;
`

export const Content = styled.div`
display: flex;
width: 440px;
margin-left: auto;
`

export const Body = styled.div`
    height: 100vh;
    margin-left: 20px;
    background: var(--color-black-navy);
    width:100%;
    left: 0;
    padding: 67px 30px;
`

export const Icon = styled.div`
    padding-top: 67px;
    :hover{
        cursor: pointer;
    }
`

export const Links = styled.div`
/* background-color: black; */
/* min-height: 500px; */
`