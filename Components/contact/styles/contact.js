import styled from 'styled-components'

export const Wrapper = styled.div`
 display: grid;
 grid-template-columns: 1fr 1fr;
 grid-gap: 60px;
background-color: var(--color-blue);
min-height: 600px;
padding: 60px;
`

export const Details = styled.div`
    background-color: var(--color-blue);
    /* > p {
        margin-top: 5px;
    } */
`

export const Title = styled.span`
    font-size: 1.8rem;
    font-weight: 800;
    width: 40%;
`