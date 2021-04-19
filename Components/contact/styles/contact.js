import styled from 'styled-components'

export const Wrapper = styled.div`
display: grid;
grid-template-columns: repeat(auto-fill, minmax(370px, 1fr));
grid-gap: 60px;
background-color: var(--color-blue);
min-height: 600px;
padding: 60px;

@media only screen and (max-width: 1025px) {
    padding: 10px; 
}

@media only screen and (max-width: 882px) {  
    padding: 20px;
}

@media only screen and (max-width: 797px) {  
    grid-gap: 30px;
}

@media only screen and (max-width: 400px) {
    display: block;  
    padding: 5px;
    width: 100%;
    }
`

export const Details = styled.div`

@media only screen and (max-width: 820px) {  
    padding: 30px;
    background-color: var(--color-black-navy);
}

    @media only screen and (max-width: 400px) {  
    margin-top: 20px;
    padding: 15px;
    }
`

export const Title = styled.span`
    font-size: 1.8rem;
    font-weight: 800;
    width: 40%;
`

export const Inner = styled.div`
    @media only screen and (max-width: 818px) { 
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 20px; 
}

@media only screen and (max-width: 634px) { 
    grid-template-columns: 1fr;
}
`

export const Grid = styled.div`
    display: grid;
    grid-template-columns: 50px 1fr;
    grid-gap: 20px;

    @media only screen and (max-width: 700px) {  
    grid-gap: 0px; 
}

@media only screen and (max-width: 400px) {  
    grid-template-columns: 1fr;
}
`

export const Icon = styled.div`
   color: var(--color-gold);
   font-size: 25px;
`

export const Info = styled.div`
> p { margin-top: 10px; }
    > span {
        color: var(--color-gold);
        font-weight: bold;
    }
`