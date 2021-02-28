import React from 'react'
import { About } from '../Components'
import { FaAngleRight } from 'react-icons/fa'
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

export function AboutContainer() {

    return (
        <About>
            <About.Container>
                <About.Quote id="quote">
                    <About.Title>“Your legal minds with a personal touch”</About.Title>
                </About.Quote>
                <About.Wrapper>
                    <About.Sidebar>
                        <About.Ul>
                            <About.Li>
                                <Link to="about" spy={true} smooth={true} offset={-90} >
                                    <About.Heading href="">About</About.Heading>
                                </Link>
                                <ul>
                                    <About.SubHeading><a href="#">Name</a></About.SubHeading>
                                    <About.SubHeading><a href="#">Name</a></About.SubHeading>
                                </ul>
                            </About.Li>

                            <About.Li>
                                <Link to="test2" spy={true} smooth={true} offset={-90} >
                                    <About.Heading href="#section2">Section 2</About.Heading>
                                </Link>
                                <ul>
                                    <About.SubHeading><a href="#">Name</a></About.SubHeading>
                                    <About.SubHeading><a href="#">Name</a></About.SubHeading>
                                </ul>
                            </About.Li>
                            <About.Li>
                                <Link to="section3" spy={true} smooth={true} offset={-90} >
                                    <About.Heading href="#section2">Section 3</About.Heading>
                                </Link>
                                <ul>
                                    <About.SubHeading><a href="#">Name</a></About.SubHeading>
                                    <About.SubHeading><a href="#">Name</a></About.SubHeading>
                                </ul>
                            </About.Li>

                        </About.Ul>
                    </About.Sidebar>
                    <About.DocWrapper>
                        <h3 name="about">About us</h3>
                        <p className="body">NN Legal Consulting is a well-established, fully black-owned and small-sized business and law consultancy practice with prospective national capacity through network of qualified and well capacitated professionals, enabling us substantial influence throughout the country. Our services range is clustered into Legal Consulting as well as Enterprise Consulting, where we offer fully customized professional and efficient services to our diverse business clients (b2b), individuals from all walks of life and public sector organisations.</p>
                        <h3 name="test2">Section 2</h3>
                        <p className="body">Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus repudiandae eum impedit nulla excepturi temporibus fugit consequatur quidem iste fuga. NN Legal Consulting is a well-established, fully black-owned and small-sized business and law consultancy practice with prospective national capacity through network of qualified and well capacitated professionals, enabling us substantial influence throughout the country. Our services range is clustered into Legal Consulting as well as Enterprise Consulting, where we offer fully customized professional and efficient services to our diverse business clients (b2b), individuals from all walks of life and public sector organisations. NN Legal Consulting is a well-established, fully black-owned and small-sized business and law consultancy practice with prospective national capacity through network of qualified and well capacitated professionals, enabling us substantial influence throughout the country. Our services range is clustered into Legal Consulting as well as Enterprise Consulting, where we offer fully customized professional and efficient services to our diverse business clients (b2b), individuals from all walks of life and public sector organisations.NN Legal Consulting is a well-established, fully black-owned and small-sized business and law consultancy practice with prospective national capacity through network of qualified and well capacitated professionals, enabling us substantial influence throughout the country. Our services range is clustered into Legal Consulting as well as Enterprise Consulting, where we offer fully customized professional and efficient services to our diverse business clients (b2b), individuals from all walks of life and public sector organisations. individuals from all walks of life and public sector organisations. NN Legal Consulting is a well-established, fully black-owned and small-sized business and law consultancy practice with prospective national capacity through network of qualified and well capacitated professionals, enabling us substantial influence throughout the country. Our services range is clustered into Legal Consulting as well as Enterprise Consulting, where we offer fully customized professional and efficient services to our diverse business clients (b2b), individuals from all walks of life and public sector organisations.NN Legal Consulting is a well-established, fully black-owned and small-sized business and law consultancy practice with prospective national capacity through network of qualified and well capacitated professionals, enabling us substantial influence throughout the country. Our services range is clustered into Legal Consulting as well as Enterprise Consulting, where we offer fully customized professional and efficient services to our diverse business clients (b2b), individuals from all walks of life and public sector organisations.individuals from all walks of life and public sector organisations. NN Legal Consulting is a well-established, fully black-owned and small-sized business and law consultancy practice with prospective national capacity through network of qualified and well capacitated professionals, enabling us substantial influence throughout the country. Our services range is clustered into Legal Consulting as well as Enterprise Consulting, where we offer fully customized professional and efficient services to our diverse business clients (b2b), individuals from all walks of life and public sector organisations.NN Legal Consulting is a well-established, fully black-owned and small-sized business and law consultancy practice with prospective national capacity through network of qualified and well capacitated professionals, enabling us substantial influence throughout the country. Our services range is clustered into Legal Consulting as well as Enterprise Consulting, where we offer fully customized professional and efficient services to our diverse business clients (b2b), individuals from all walks of life and public sector organisations.individuals from all walks of life and public sector organisations. NN Legal Consulting is a well-established, fully black-owned and small-sized business and law consultancy practice with prospective national capacity through network of qualified and well capacitated professionals, enabling us substantial influence throughout the country. Our services range is clustered into Legal Consulting as well as Enterprise Consulting, where we offer fully customized professional and efficient services to our diverse business clients (b2b), individuals from all walks of life and public sector organisations.NN Legal Consulting is a well-established, fully black-owned and small-sized business and law consultancy practice with prospective national capacity through network of qualified and well capacitated professionals, enabling us substantial influence throughout the country. Our services range is clustered into Legal Consulting as well as Enterprise Consulting, where we offer fully customized professional and efficient services to our diverse business clients (b2b), individuals from all walks of life and public sector organisations.</p>
                        <h3 name="section3">About us</h3>
                        <p className="body">NN Legal Consulting is a well-established, fully black-owned and small-sized business and law consultancy practice with prospective national capacity through network of qualified and well capacitated professionals, enabling us substantial influence throughout the country. Our services range is clustered into Legal Consulting as well as Enterprise Consulting, where we offer fully customized professional and efficient services to our diverse business clients (b2b), individuals from all walks of life and public sector organisations.NN Legal Consulting is a well-established, fully black-owned and small-sized business and law consultancy practice with prospective national capacity through network of qualified and well capacitated professionals, enabling us substantial influence throughout the country. Our services range is clustered into Legal Consulting as well as Enterprise Consulting, where we offer fully customized professional and efficient services to our diverse business clients (b2b), individuals from all walks of life and public sector organisations.NN Legal Consulting is a well-established, fully black-owned and small-sized business and law consultancy practice with prospective national capacity through network of qualified and well capacitated professionals, enabling us substantial influence throughout the country. Our services range is clustered into Legal Consulting as well as Enterprise Consulting, where we offer fully customized professional and efficient services to our diverse business clients (b2b), individuals from all walks of life and public sector organisations.</p>
                    </About.DocWrapper>
                </About.Wrapper>
            </About.Container>
        </About>
    )
}