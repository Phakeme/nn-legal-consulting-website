import styled from 'styled-components'

export const AboutWrapper = styled.div`
background-color: var(--color-black-navy);
/* min-height: 720px; */
/* color: var(--color-black); */
/* background-color: red; */
/* padding: 100px ; */
`

export const Quote = styled.div`
/* background-color: red; */
padding: 80px;
`

export const Title = styled.h3`
    font-size: 1.8rem;
    text-align: center;
    font-size: 38px;
    font-style: italic;
    font-family: 'Playfair Display', serif;
    line-height: 40px;
    margin-top: 0;
    margin-bottom: 0;
    font-weight: 100;
`

export const Wrapper = styled.div`
display: grid;
grid-template-columns: 325.5px 1fr;
/* background-color: red; */
/* padding-bottom: 70px; */
/* grid-gap: 50px; */
/* min-height: 520px; */
`

export const Sidebar = styled.div`
/* width: 300px; */
/* top: 3rem; */
position: sticky;
  position: -webkit-sticky;
  top: 70px;
    left: 13px;
    width: 335px;
    height: fit-content;
/* background-color: red; */
/* position: absolute; */
padding: 0 20px;
/* overflow-x: auto; */
/* overflow: scroll; */
/* position: fixed; */
    z-index: 10;
    /* top: 3.6rem; */
    /* left: 0; */
border-right: 1px solid var(--color-gold);
/* overflow-y: auto; */
/* position: fixed; */
/* z-index: 1; */
  /* top: 0;
  left: 0; */
  /* background-color: #111; */
  /* overflow-x: hidden; */
  /* padding-top: 20px; */
/* min-height: 300px; */
`

export const Ul = styled.ul`
/* background-color: red; */

list-style: none;
padding: 0;

`

export const Li = styled.li`
/* background-color: green; */
/* padding: 10px; */
margin-bottom: 5px;

/* background-color: var(--color-blue); */
/* height: 30px; */
`

export const Heading = styled.div`
display: flex;
font-weight: bold;
padding: 10px;
background-color: var(--color-blue);
width: 100%;
offset: 500px;
border-left: 1px solid var(--color-gold);
cursor: pointer;
`

export const SubHeading = styled.li`
list-style:none;
background-color: var(--color-blue);
/* height: 30px; */
padding: 10px;
margin: 5px 0;

`

export const DocWrapper = styled.div`
position: relative;
/* overflow: scroll; */
/* width: 900px; */
/* padding: 10px; */
padding: 0 30px;
width: 100%;
/* height: 700px; */
/* margin-left: 300px; */
/* background-color: blue; */
/* margin-bottom: 70px; */
`

export const Content = styled.div`
    /* background-color: yellowgreen; */
    > p {
        margin-top: 5px;
    }
    /* height: 100%; */
    /* padding: 50px; */
`


/* a.anchor {
    display: block;
    position: relative;
    top: -250px;
    visibility: hidden;
} */


