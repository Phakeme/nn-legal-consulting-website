import styled from 'styled-components'

export const NavbarWrapper = styled.nav`
    color: white;
    padding: 30px 0;
    margin: auto;
    width:100%;
`

export const Inner = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width:100%;
`

export const Logo = styled.img`
    height: 100%;
`

export const Icon = styled.div`
    :hover{
       cursor: pointer;
    }
`

export const Qoute = styled.h3`
    font-size: 1.4rem;
    text-align: center;
    font-style: italic;
    font-family: 'Playfair Display', serif;
    line-height: 40px;
    margin-top: 0;
    margin-bottom: 0;
    font-weight: 100;
`

export const ToTop = styled.button`
  position: fixed;
  bottom: 20px;
  right: 39px;
  width: 29px;
  height: 29px;
  text-align: center;
  z-index: 99;
  font-size: 18px;
  border: none;
  outline: none;
  background-color: var(--color-gold);
  color: white;
  cursor: pointer;
  border-radius: 100px;
`
