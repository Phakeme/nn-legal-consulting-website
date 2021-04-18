import styled from 'styled-components'

export const FounderWrapper = styled.div`
padding: 60px;
background-color: var(--color-blue);

@media only screen and (max-width: 1025px) {
   padding: 60px;
}

@media only screen and (max-width: 933px) {  
}
`

export const Wrapper = styled.div`
display: grid;
grid-gap: 40px;

@media only screen and (max-width: 1025px) {
   grid-gap: 60px;
}

@media only screen and (max-width: 933px) {  
    grid-gap: 20px;
    grid-template-columns: 250px 1fr;
}

@media only screen and (max-width: 800px) {  
    grid-template-columns: 1fr;
}
`

export const Sidebar = styled.div`
position: sticky;
position: -webkit-sticky;
top: 70px;
left: 13px;
width: 335px;
height: fit-content;
margin-bottom: 20px;
z-index: 10;
border-right: 1px solid var(--color-gold);

@media only screen and (max-width: 933px) {  
    width: 250px;
}

@media only screen and (max-width: 800px) {  
    display: none;
}
`

export const Img = styled.img`
`

export const ImageWrapper = styled.div`
height: 200px;
width: 200px; 
border-radius: 50%; 
background-image: url( "/m.jpg");
background-size: cover;
background-repeat: no-repeat;
-webkit-transform:rotate(20deg);
-moz-transform:rotate(20deg);

@media only screen and (max-width: 500px) {  
    margin: auto;
}
`

export const Inner = styled.div`
`

export const Content = styled.div`
`

export const QuoteWrapper = styled.div`
    display: grid;
    grid-template-columns: 200px 1fr;
    grid-gap: 50px;
    width: 100%;
    margin: auto;

    @media only screen and (max-width: 500px) {  
    grid-template-columns: 1fr;
    align-items: center;
    text-align: center;
}
`
