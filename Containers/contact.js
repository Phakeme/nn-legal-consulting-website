import React from 'react'
import { Contact, Hero } from '../Components'
import { ContactFormContainer } from './contactForm'

export function ContactContainer() {
    return (
        <Contact>
            <Contact.Wrapper name="contact">

                <ContactFormContainer />

                <Contact.Details>
                    Contact details section
                    </Contact.Details>

            </Contact.Wrapper>
        </Contact>
    )
}