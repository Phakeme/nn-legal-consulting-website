import React from 'react'
import { About } from '../Components'

export function AboutContainer() {
    return (
        <About>
            <About.Container>
                <About.Quote>
                    <About.Title>“Your legal minds with a personal touch”</About.Title>
                </About.Quote>
                <About.Wrapper>
                    <About.Sidebar>
                        <ul>
                            <li>About us</li>
                            <li>Why choose us</li>
                            <li>Expertise</li>
                            <li>Enterprise Services</li>
                        </ul>
                    </About.Sidebar>
                    <About.DocWrapper>
                        Document
                    </About.DocWrapper>
                </About.Wrapper>
            </About.Container>
        </About>
    )
}