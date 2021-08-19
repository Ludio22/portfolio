import React, { createRef } from 'react';
import emailjs from 'emailjs-com';

export default function ContactUs() {

    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('service_pc9m0nq', 'template_qpsk4zs', e.target, 'user_WvRo3DLvaWpuyFVEWT4Yr')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        cleanForm();
    }

    let unRef = createRef();
    let ueRef = createRef();
    let mesRef = createRef();

    const cleanForm = () => {
        unRef.current.value = "";
        ueRef.current.value = "";
        mesRef.current.value = "";
    }

    return (
        <form className="contact-form" onSubmit={sendEmail}>
            <input type="hidden" name="contact_number" />
            <label>Name</label>
            <input ref={unRef} type="text" name="user_name" />
            <label>Email</label>
            <input ref={ueRef} type="email" name="user_email" />
            <label>Message</label>
            <textarea ref={mesRef} id="mes" name="message" />
            <input id="sub" type="submit" value="Send" />
        </form>
    );
}