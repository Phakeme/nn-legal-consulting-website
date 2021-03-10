import React from 'react'
import { Formik } from 'formik';
import { ContactForm } from '../Components'

export function ContactFormContainer() {
    return (
        <ContactForm>
            <ContactForm.Headings>
                <h2 style={{ marginTop: 0 }}>We'd love to hear from you</h2>
                <p >For all enquiries, please enter your details in the form below.</p>
            </ContactForm.Headings>
            <Formik
                initialValues={{ name: '', email: '', message: '' }}

                validate={values => {
                    const errors = {};
                    if (!values.email) {
                        errors.email = 'Required';
                    } else if (
                        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                    ) {
                        errors.email = 'Invalid email address';
                    }
                    return errors;
                }}
                onSubmit={(values, { setSubmitting }) => {
                    setTimeout(() => {
                        alert(JSON.stringify(values, null, 2));
                        setSubmitting(false);
                    }, 400);
                }}
            >
                {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    isSubmitting,
                    /* and other goodies */
                }) => (
                    <form onSubmit={handleSubmit} autoComplete="off">

                        <input
                            type="text"
                            name="name"
                            placeholder="Full name"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.name}
                        />
                        {errors.name && touched.name && errors.name}
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.email}
                        />
                        {errors.email && touched.email && errors.email}

                        <textarea
                            name="message"
                            placeholder="Message"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.message}
                            required
                        />
                        <div style={{ margin: "5px 0 20px 0" }}>
                            {errors.message && touched.message && errors.message}
                        </div>
                        <button type="submit" disabled={isSubmitting}>
                            <span style={{ fontSize: "16px" }}>Send message</span>
                        </button>
                    </form>
                )}
            </Formik>

        </ContactForm>
    )
}