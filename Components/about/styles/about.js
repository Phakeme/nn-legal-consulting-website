import styled from 'styled-components'

export const AboutWrapper = styled.div`
background-color: var(--color-black-navy);
min-height: 720px;
/* color: var(--color-black); */
padding: 135px ;
`

export const Wrapper = styled.div`
display: grid;
grid-template-columns: 1fr 1fr;
/* background-color: red; */
grid-gap: 50px;
/* min-height: 520px; */
`

export const Content = styled.div`
    /* background-color: yellowgreen; */
    > p {
        margin-top: 5px;
    }
    /* height: 100%; */
    /* padding: 50px; */
`

export const Title = styled.h3`
    font-size: 1.8rem;
    text-align: right;
    line-height: 40px;
    margin-top: 0;
    font-weight: 900;
`


// bg-black text-white h-32 mt-4
