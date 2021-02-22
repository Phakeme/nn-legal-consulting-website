import styled from 'styled-components'
// import Image from 'next/image'

export const Wrapper = styled.main`
    height: 600px;
    color: white;
`

export const Inner = styled.div`
 display: grid;
 grid-template-columns: 1fr 1fr;
grid-gap: 1px; 
height: 100%;
`

export const Links = styled.div`
 display: grid;
 grid-template-columns: 1fr 1fr;
 grid-template-rows: 1fr 1fr;
 grid-gap: 1px; 
 height: 100%;
`

export const LinkItem = styled.div`
 /* background-color: royalblue;*/ 
background: linear-gradient(0deg, rgba(0,0,0, 0.5), rgba(0,0,0, 0.5)),url('/bg.jpg');
 background-size: cover;
 background-repeat: no-repeat; 
`

export const Showcase = styled.div`
 background: linear-gradient(0deg, rgba(0, 38, 58, 0.2), rgba(0, 38, 58, 0.2)),url('/hero.jpg');
 background-size: cover;
 background-repeat: no-repeat;
`