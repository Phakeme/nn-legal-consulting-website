import styled from 'styled-components'

export const UnionWrapper = styled.div`
padding: 60px 150px;

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
    grid-template-columns: 1fr 1fr;
}

@media only screen and (max-width: 800px) {  
    grid-template-columns: 1fr;
}
`

export const Inner = styled.div`
`

export const Heading = styled.div`
text-align: center;
margin-bottom: 3rem;
`

export const Logo = styled.div`
display: flex;
align-items: center;
justify-content: center;
text-align: center;
`

export const Logos = styled.div`
    display: grid;
    grid-template-columns: 200px 200px;
    grid-gap: 50px;
    margin: auto;
    justify-content: center;

    @media only screen and (max-width: 600px) {  
    grid-template-columns: 1fr;
    align-items: center;
    text-align: center;
}
`
