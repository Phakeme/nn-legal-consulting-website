import React from 'react'
import { Headings, Form } from './styles/contactForm'

export default function ContactForm({ children, ...restProps }) {
    return <Form {...restProps}>{children}</Form>
}

ContactForm.Headings = function ContactHeadings({ children, ...restProps }) {
    return <Headings {...restProps}>{children}</Headings>
}
