import styled from 'styled-components'

export const ContactWrapper = styled.div`
/* display: grid;
grid-template-columns: 1fr 1fr; */
display: flex;
justify-content: space-between;
align-items: center;
background-color: var(--color-black-navy);
color: white;
min-height: 281px;
padding: 80px;
/* margin-top: 15px; */
`

export const Content = styled.div`
padding: 30px;
    background-color: yellowgreen;
    > p {
        margin-top: 5px;
    }
`

export const Title = styled.span`
    font-size: 1.8rem;
    font-weight: 800;
    width: 40%;
`


// bg-black text-white h-32 mt-4
