import styled from 'styled-components'

export const AboutWrapper = styled.div`
padding: 60px;
background-color: var(--color-black-navy);

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
    /* grid-gap: 20px; */
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
    /* width: 100%;
    position: relative;
  top: 0px;

  border-right: none; */
    display: none;
}

`

export const Ul = styled.div`
list-style: none;
padding: 0;
margin: 0 0 0 0;
width: 95.6%;
`

export const Li = styled.div`
/* padding-left: 25px; */
margin: 10px 0;
`

export const Heading = styled.div`
display: flex;
justify-content: space-between;
font-weight: bold;
font-size: 20px;
padding: 10px;
background-color: var(--color-blue);
width: 100%;
offset: 500px;
border-left: 1px solid var(--color-gold);
    margin: 5px auto;

cursor: pointer;
:hover{
    /* color: var(--color-blue); */
    background-color: var(--color-gold);
}
`

export const SubHeading = styled.div`
border-bottom: 1px solid var(--color-gold);
cursor: pointer;
padding: 5px 10px;
margin: 5px 0;

:hover {
   background-color: var(--color-blue); 
}
`

export const DocWrapper = styled.div`
position: relative;

> p {
    text-align: justify;
}

> h2 :first-child{
    margin-top: 0;
}
`

export const Content = styled.div`
    > p {
        margin-top: 5px;
    }
`
