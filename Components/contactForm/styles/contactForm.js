import styled from 'styled-components'

export const Form = styled.div`
    height: 100%;

    @media only screen and (max-width: 400px) {  
    /* background-color: red; */
    padding: 10px;
    margin: auto;
    width: 300px;
    }
`

export const Headings = styled.div`
    /* height: 100%; */
    /* background-color: red; */

    @media only screen and (max-width: 882px) {  
    text-align:center;
    margin-top: 20px;
}

    > h2 {
        @media only screen and (max-width: 882px) {  
    margin: 10px 0 5px 0 !important;
}
    }

    > p {
        @media only screen and (max-width: 882px) {  
    margin: 5px 0 5px 0 !important;
}
    }
`