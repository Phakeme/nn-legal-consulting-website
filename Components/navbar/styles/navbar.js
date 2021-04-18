import styled from 'styled-components'

export const NavbarWrapper = styled.nav`
    color: white;
    padding: 30px 0;
    margin: auto;
    width:100%;

    @media only screen and (max-width: 933px) {  
       
        padding: 30px 1.5rem;
}

@media only screen and (max-width: 800px) {  
       position: sticky;
       top: 0;
       padding: 10px 16px;
       /* background-color: red; */
       z-index: 200;
       background-color: var(--color-blue);
       box-shadow: -1px 6px 19px -1px rgba(0,0,0,0.71);
-webkit-box-shadow: -1px 6px 19px -1px rgba(0,0,0,0.71);
-moz-box-shadow: -1px 6px 19px -1px rgba(0,0,0,0.71);
}
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

    @media only screen and (max-width: 600px) {  
        font-size: 1rem;
        line-height: 27px;
        padding: 0 66px;
}

@media only screen and (max-width: 411px) {  
        font-size: 1rem;
        line-height: 27px;
        padding: 0 15px;
}

@media only screen and (max-width: 376px) {  
 display: none
}
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
