import React from 'react'
import { Contact, Hero } from '../Components'
import { ContactFormContainer } from './contactForm'
import { IoMdPin, IoMdMail } from "react-icons/io"
import { RiContactsBookUploadFill } from "react-icons/ri"
import { FaHourglassHalf } from "react-icons/fa"

export function ContactContainer() {
    return (
        <Contact>
            <Contact.Wrapper name="contact">
                <ContactFormContainer />

                <Contact.Details>
                    <Contact.Inner>
                        <Contact.Grid>
                            <Contact.Icon><IoMdPin /></Contact.Icon>
                            <Contact.Info>
                                <span>COME VISIT</span>
                                <p>   102 Stephen Dlamini Road <br />
                                2nd Floor, Musgrave <br />
                                Durban 4001</p>
                            </Contact.Info>
                        </Contact.Grid>
                        <Contact.Grid>
                            <Contact.Icon><RiContactsBookUploadFill /></Contact.Icon>

                            <Contact.Info><span>CONTACT US</span><p>+27 (0)31 3133 300<br />+27 (0)81 373 7694</p></Contact.Info>
                        </Contact.Grid>

                        <Contact.Grid>
                            <Contact.Icon><IoMdMail /></Contact.Icon>
                            <Contact.Info><span>EMAIL</span><p>mbalingubo@outlook.com<br />mbali@nnlegalconsulting.co.za</p></Contact.Info>
                        </Contact.Grid>

                        <Contact.Grid>
                            <Contact.Icon><FaHourglassHalf /></Contact.Icon>

                            <Contact.Info><span>OPEN HOURS</span>
                                <p>M-F: 8am – 5pm <br />
                            Sat: 10am – 2pm <br />
                            Sun: Closed</p>
                            </Contact.Info>
                        </Contact.Grid>
                    </Contact.Inner>
                </Contact.Details>
            </Contact.Wrapper>
        </Contact>
    )
}