import React from 'react'
import { About } from '../Components'
import LinkMenu from '../Components/about/LinkMenu'
import { AboutUs } from './aboutUs/aboutUs'
import { WhyChooseUs } from './aboutUs/whyChooseUs'
import { Expertise } from './aboutUs/expertise'
import { EnterpriseServices } from './aboutUs/interpriseServices'

export function AboutContainer() {

    return (
        <About>
            <About.Container>
                <About.Wrapper>

                    <About.Sidebar>
                        <LinkMenu />
                    </About.Sidebar>

                    <About.DocWrapper>
                        <AboutUs />
                        <WhyChooseUs />
                        <Expertise />
                        <EnterpriseServices />
                    </About.DocWrapper>

                </About.Wrapper>
            </About.Container>
        </About >
    )
}