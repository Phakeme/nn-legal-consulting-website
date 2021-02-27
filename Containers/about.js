import React from 'react'
import { About } from '../Components'
import { FaAngleRight } from 'react-icons/fa'

export function AboutContainer() {
    return (
        <About>
            <About.Container>
                <About.Quote>
                    <About.Title>“Your legal minds with a personal touch”</About.Title>
                </About.Quote>
                <About.Wrapper>
                    <About.Sidebar>
                        <About.Ul>
                            <About.Li>
                                <About.Heading href="#about">About us</About.Heading>
                                <ul>
                                    <About.SubHeading><a href="#">Name</a></About.SubHeading>
                                    <About.SubHeading><a href="#">Name</a></About.SubHeading>
                                </ul>
                            </About.Li>

                            <About.Li>
                                <About.Heading href="#section2">Section 2</About.Heading>
                                <ul>
                                    <About.SubHeading><a href="#">Name</a></About.SubHeading>
                                    <About.SubHeading><a href="#">Name</a></About.SubHeading>
                                </ul>
                            </About.Li>

                        </About.Ul>
                    </About.Sidebar>
                    <About.DocWrapper>
                        <h3 id="about">About us</h3>
                        <p className="body">NN Legal Consulting is a well-established, fully black-owned and small-sized business and law consultancy practice with prospective national capacity through network of qualified and well capacitated professionals, enabling us substantial influence throughout the country. Our services range is clustered into Legal Consulting as well as Enterprise Consulting, where we offer fully customized professional and efficient services to our diverse business clients (b2b), individuals from all walks of life and public sector organisations.</p>
                        <h3 id="section2">Section 2</h3>
                        <p className="body">Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus repudiandae eum impedit nulla excepturi temporibus fugit consequatur quidem iste fuga.</p>
                    </About.DocWrapper>
                </About.Wrapper>
            </About.Container>
        </About>
    )
}