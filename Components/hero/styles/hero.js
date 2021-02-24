import styled from 'styled-components'
// import Image from 'next/image'

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
 font-size: 24px;
 height: 100%;
`

export const LinkItem1 = styled.div`
background: linear-gradient(0deg, rgba(0,0,0, 0.4), rgba(0,0,0, 0.4)),url('/bg.jpg');
 background-size: cover;
 background-repeat: no-repeat; 
 height: 100%;
 padding:20px;
 transition: transform .2s;
 :hover{
    transform: scale(1.1);
    box-shadow: -1px 3px 25px -1px rgba(0,0,0,0.74);
-webkit-box-shadow: -1px 3px 25px -1px rgba(0,0,0,0.74);
-moz-box-shadow: -1px 3px 25px -1px rgba(0,0,0,0.74);
 }
 `

export const LinkItem2 = styled.div`
background: linear-gradient(0deg, rgba(0,0,0, 0.5), rgba(0,0,0, 0.5)),url('/bg.jpg');
 background-size: cover;
 background-repeat: no-repeat; 
 height: 100%;
 padding:20px;
 transition: transform .2s;
 :hover{
    transform: scale(1.1);
    box-shadow: -1px 3px 25px -1px rgba(0,0,0,0.74);
-webkit-box-shadow: -1px 3px 25px -1px rgba(0,0,0,0.74);
-moz-box-shadow: -1px 3px 25px -1px rgba(0,0,0,0.74);
 }
`

export const LinkItem3 = styled.div`
background: linear-gradient(0deg, rgba(0,0,0, 0.6), rgba(0,0,0, 0.6)),url('/bg.jpg');
 background-size: cover;
 background-repeat: no-repeat; 
 height: 100%;
 padding:20px;
 transition: transform .2s;
 :hover{
    transform: scale(1.1);
    box-shadow: -1px 3px 25px -1px rgba(0,0,0,0.74);
-webkit-box-shadow: -1px 3px 25px -1px rgba(0,0,0,0.74);
-moz-box-shadow: -1px 3px 25px -1px rgba(0,0,0,0.74);
 }
`

export const LinkItem4 = styled.div`
background: linear-gradient(0deg, rgba(0,0,0, 0.7), rgba(0,0,0, 0.7)),url('/bg.jpg');
 background-size: cover;
 background-repeat: no-repeat;
 height: 100%;
 padding:20px;
 transition: transform .2s;
 :hover{
    transform: scale(1.1);
    box-shadow: -1px 3px 25px -1px rgba(0,0,0,0.74);
-webkit-box-shadow: -1px 3px 25px -1px rgba(0,0,0,0.74);
-moz-box-shadow: -1px 3px 25px -1px rgba(0,0,0,0.74);
 }
`

export const Showcase = styled.div`
 /* background: linear-gradient(0deg, rgba(0, 38, 58, 0.2), rgba(0, 38, 58, 0.2)),url('/hero.jpg'); */
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
