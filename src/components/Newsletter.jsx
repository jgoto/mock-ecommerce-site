import { useState } from 'react';

function Newsletter(){
    const handleSubmit = (e) => {
        e.preventDefault();
        const email = e.target.newsletter_email.value;
        console.log("Subscribed", email)
    }
    return (
        <>
            <h2>Subscribe to our Newsletter</h2>
            <h3>Sign up to receive updates and special offers.</h3>
            <form id="newsletter_form" onSubmit={handleSubmit}>
                <input type="email" placeholder="Enter your email" name="newsletter_email" required />
                <button type ="sumbit" id="newsletter_submit_btn">Subscribe</button>
            </form>
            
        </>
    )
}

export default Newsletter;