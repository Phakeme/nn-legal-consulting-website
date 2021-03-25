import styled from 'styled-components'

export const FounderWrapper = styled.div`
padding: 60px;
background-color: var(--color-blue);

@media only screen and (max-width: 1025px) {
   
   padding: 20px;
   
   }

@media only screen and (max-width: 933px) {  
    padding: 15px;
}
`

export const Wrapper = styled.div`
display: grid;
grid-gap: 40px;
grid-template-columns: 325.5px 1fr;

@media only screen and (max-width: 1025px) {
   
    grid-gap: 20px;
   
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
background-image: url( "https://images.squarespace-cdn.com/content/v1/57065ff84d088e7900c2f3f0/1520606053873-RT0M82J7AL1II1LV8LDV/ke17ZwdGBToddI8pDm48kLkXF2pIyv_F2eUT9F60jBl7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0iyqMbMesKd95J-X4EagrgU9L3Sa3U8cogeb0tjXbfawd0urKshkc5MgdBeJmALQKw/ottawa-headshot-on-a-black-backdrop9.JPG?format=2500w");
background-size: cover;
background-position: -40px;
background-repeat: no-repeat;
`

export const Inner = styled.div`
background-color: blue;
`

export const Content = styled.div`
  background-color: green;
`

export const QuoteWrapper = styled.div`
    display: grid;
    grid-template-columns: 200px 1fr;
    grid-gap: 50px;
    width: 80%;
    margin: auto;
`
