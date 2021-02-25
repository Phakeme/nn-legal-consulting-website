import React from 'react'
import { Contact, Hero } from '../Components'

export function ContactContainer() {
    return (
        <Contact>
            <Contact.Container>
                <Contact.Title>
                    Get in touch with us today to start fuelling your <br /> business’s growth</Contact.Title>
                <Hero.Button>
                    <h3> Contact us</h3>
                </Hero.Button>
                {/* <Contact.Content>
                    <p>Text</p>
                </Contact.Content> */}
                {/* <Contact.Content>
                    <p>Text</p>
                </Contact.Content> */}
            </Contact.Container>
        </Contact>
    )
}