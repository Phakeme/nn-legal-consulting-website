import React, { useState } from 'react'
import emailjs from 'emailjs-com';
import { useFormik } from "formik";
import * as Yup from 'yup';
import { ContactForm } from '../Components'

if (process.browser) {

}

export function ContactFormContainer() {

    // const [isLoading, setIsLoading] = useState(false)
    const [submitState, setSubmitState] = useState('Send message')

    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            message: "",
        },

        validationSchema: Yup.object({
            name: Yup.string()
                .max(25, "Must be 25 characters or less")
                .required("Required"),
            email: Yup.string().email("Invalid email address").required("Required"),
            message: Yup.string()
                .min(10, "Must be atleast 10 characters or more")
                .required("Required"),
        }),

        onSubmit: (values, { resetForm }) => {
            // setIsLoading(true)
            setSubmitState('Sending...')
            // template_16zvxp2
            emailjs.send(process.env.NEXT_PUBLIC_SERVICE_ID, process.env.NEXT_PUBLIC_TEMPLATE_ID, values, process.env.NEXT_PUBLIC_USER_ID)
                .then((result) => {
                    // setIsLoading(false)
                    setSubmitState('Sent successfully')
                    // alert(result.text);
                    //   setSubmitState('Message sent successfully :)')
                    console.log(result.text);
                }, (error) => {
                    console.log(error.text);
                    // setIsLoading(false)
                    {
                        window.alert(process.env.NEXT_PUBLIC_SERVICE_ID)
                        window.alert(process.env.NEXT_PUBLIC_TEMPLATE_ID)
                        window.alert(process.env.NEXT_PUBLIC_USER_ID)
                    }
                    setSubmitState('Something went wrong')
                });
            resetForm()
        },
    });

    return (
        <ContactForm>
            <ContactForm.Headings>
                <h2 style={{ marginTop: 0 }}>We'd love to hear from you</h2>
                <p >For all enquiries, please enter your details in the form below.</p>
            </ContactForm.Headings>

            {/* autoComplete="off" */}

            <form onSubmit={formik.handleSubmit}>

                <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Full Name"
                    onChange={formik.handleChange}
                    value={formik.values.name}

                />
                {formik.touched.name && formik.errors.name ? (
                    <div>
                        {formik.errors.name}
                    </div>
                ) : null}
                <input
                    id="email"
                    name="email"
                    type="email"
                    onChange={formik.handleChange}
                    value={formik.values.email}
                    placeholder="Email"

                />
                {formik.touched.email && formik.errors.email ? (
                    <div>{formik.errors.email}</div>
                ) : null}

                <textarea
                    id="message"
                    name="message"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.message}
                    placeholder="Message / reason for appointment"
                />
                <div style={{ margin: "5px 0 20px 0" }}>
                    {formik.touched.message && formik.errors.message ? (
                        <div>{formik.errors.message}</div>
                    ) : null}
                </div>
                <div style={{ display: "flex", alignItems: "center", justifyContent: 'space-between' }}>
                    <button type="submit" >
                        <span style={{ fontSize: "16px" }}>{submitState}</span>
                    </button>
                    {submitState === "Something went wrong" ? (
                        <div>Please send direct email. </div>
                    ) : null}
                    {submitState === "Sent successfully" ? (
                        <div>We will contact you shortly. </div>
                    ) : null}

                </div>
            </form>



        </ContactForm>
    )
}