import styled from 'styled-components'

export const Wrapper = styled.main`
    height: 600px;
    color: white;
`

export const Inner = styled.div`
 display: grid;
 /* grid-template-columns: 1fr 1fr; */
 grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
height: 100%;
`

export const Links = styled.div`
 display: grid;
 grid-template-columns: 1fr 1fr;
 grid-template-rows: 1fr 1fr;
 height: 100%;
`

export const LinkItemText = styled.div`
 display: flex;
 align-items: center;
 justify-content: center;
 text-align: center;
 padding: 20px;
 font-size: 20px;
 height: 100%;
 > h2 {
    text-transform: capitalize;
 }
`

export const LinkItem = styled.div`
/* background: linear-gradient(0deg, rgba(0,0,0, 0.4), rgba(0,0,0, 0.4)),url('/bg.jpg'); */
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
 background-size: cover;
 background-position: center;
 background-repeat: no-repeat;
`

export const Button = styled.div`
    background-color:#fff;
    padding: 10px 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 50px;
    color: #00263a;
    border-radius: 50px;
    transition: transform .2s;

    :hover{
       transform: scale(1.1);
    }

    > h3 {
        padding: 0 8px 5px 8px ;
    }
`
