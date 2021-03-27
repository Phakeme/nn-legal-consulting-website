import styled from 'styled-components'

export const Wrapper = styled.main`
    height: 600px;
    @media only screen and (max-width: 933px) {  
        height: fit-content;
}
`

export const Inner = styled.div`
 display: grid;
 grid-template-columns: 600px 1fr;
height: 100%;

@media only screen and (max-width: 933px) {  
    grid-template-columns: 1fr;
}
`

export const Links = styled.div`
 display: grid;
 grid-template-columns: 1fr 1fr;
 grid-template-rows: 1fr 1fr;
 height: 100%;

 @media only screen and (max-width: 633px) {  
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr;
}
`

export const LinkItemText = styled.div`
 display: flex;
 align-items: center;
 justify-content: center;
 text-align: center;
 padding: 20px;
 font-size: 20px;
 height: 100%;
 width: 100%;
 /* background-color: red; */
 > h2 {
    text-transform: capitalize;
 }
 > div {
    font-weight: 500;
    border-bottom: 1px solid var(--color-gold);
 }
`

export const LinkItem = styled.div`
 background-size: cover;
 background-repeat: no-repeat; 
 height: 100%;
 padding:20px;
 transition: transform .2s;
 cursor: pointer;
 :hover{
    transform: scale(1.1);
    box-shadow: -1px 3px 25px -1px rgba(0,0,0,0.74);
-webkit-box-shadow: -1px 3px 25px -1px rgba(0,0,0,0.74);
-moz-box-shadow: -1px 3px 25px -1px rgba(0,0,0,0.74);
 }
 `

export const Showcase = styled.div`
display: flex;
/* background-color: red; */
width: 100%;
align-items: center;
justify-content: center;
 background-size: cover;
 background-position: center;
 background-repeat: no-repeat;

 @media only screen and (max-width: 933px) {  
    height: 300px;
}

  @media only screen and (max-width: 633px) {  
    height: 200px;
}
`

export const Button = styled.div`
  color: var(--color-white);
    background-color: var(--color-blue);
    padding: 10px 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 50px;
    width: 200px;
    cursor: pointer;
    border-radius: 50px;
    text-transform:uppercase;
    transition: transform .2s;

    :hover{
        background-color: var(--color-gold);
    }

    > h3 {
        padding: 0 8px 5px 8px ;
    }
`
