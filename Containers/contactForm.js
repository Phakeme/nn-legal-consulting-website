import React from 'react'
import { useFormik } from "formik";
import * as Yup from 'yup';
import { ContactForm } from '../Components'

export function ContactFormContainer() {
    const formik = useFormik({
        initialValues: {
            fullName: "",
            email: "",
            message: "",
        },

        validationSchema: Yup.object({
            fullName: Yup.string()
                .max(15, "Must be 15 characters or less")
                .required("Required"),
            email: Yup.string().email("Invalid email address").required("Required"),
            message: Yup.string()
                .min(10, "Must be atleast 10 characters or more")
                .required("Required"),
        }),

        onSubmit: (values) => {
            alert(JSON.stringify(values, null, 2));
            console.log(values, "values");
        },
    });

    return (
        <ContactForm>
            <ContactForm.Headings>
                <h2 style={{ marginTop: 0 }}>We'd love to hear from you</h2>
                <p >For all enquiries, please enter your details in the form below.</p>
            </ContactForm.Headings>



            <form autoComplete="off" onSubmit={formik.handleSubmit}>

                <input
                    id="fullName"
                    name="fullName"
                    type="text"
                    placeholder="Full Name"
                    onChange={formik.handleChange}
                    value={formik.values.fullName}

                />
                {formik.touched.fullName && formik.errors.fullName ? (
                    <div>
                        {formik.errors.fullName}
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
                <button type="submit">
                    <span style={{ fontSize: "16px" }}>Send message</span>
                </button>
            </form>



        </ContactForm>
    )
}