import styled from 'styled-components'

export const NavbarWrapper = styled.nav`
    color: white;
    padding: 30px 0;
    margin: auto;
    width:100%;
`

export const Box = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width:100%;
`

export const Logo = styled.img`
    height: 100%;
`

export const MainButton = styled.div`
    padding: 10px 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 50px;
    text-transform:uppercase;
    border: 2px solid #c3996b;
    cursor: pointer;
    border-radius: 50px;
    transition: transform .2s;

    :hover{
       background-color:#c3996b; 
    }

    > h3 {
        padding-bottom: 2px;
    }
`
