import React from 'react'
import { Wrapper, Form } from './styles/contactForm'

export default function ContactForm({ children, ...restProps }) {
    return <Form {...restProps}>{children}</Form>
}

// ContactForm.Form = function ContactForm({ children, ...restProps }) {
//     return <Form {...restProps}>{children}</Form>
// }
