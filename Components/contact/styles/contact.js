import styled from 'styled-components'

export const Wrapper = styled.div`
 display: grid;
 grid-template-columns: 1fr 1fr;
 grid-gap: 60px;
background-color: var(--color-blue);
min-height: 600px;
padding: 60px;

@media only screen and (max-width: 933px) {  
    display: none;
}
`

export const Details = styled.div`
    
    /* > p {
        margin-top: 5px;
    } */
`

export const Title = styled.span`
    font-size: 1.8rem;
    font-weight: 800;
    width: 40%;
`

export const Inner = styled.div`
   /* background-color: var(--color-blue-dark); */
    /* margin-top: 122px; */
`

export const Grid = styled.div`
    display: grid;
    grid-template-columns: 50px 1fr;
    grid-gap: 20px;

`

export const Icon = styled.div`
   color: var(--color-gold);
   font-size: 25px;

`

export const Info = styled.div`
> p {
        margin-top: 10px;
    }
    > span {
        color: var(--color-gold);
        font-weight: bold;
    }
`