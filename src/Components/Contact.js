import React from 'react'
import './Styles/Contact.css';
import { useState } from 'react';
import axios from 'axios';

const Contact = () => {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const [message, setMessage] = useState('');

    const handleSaveData = () => {
        axios.post('http://localhost:4000/insert', {
            Fullname: fullName,
            // Email: email,
            // Address: address,
            // Phone: phone,
            // Message: message,
        })
    };
    return (
        <div>
            <div className='contact'>
                <h2 className='c-text'>Contact Me</h2>
                <p>Get in touch</p>
                <form className='form' onSubmit={handleSaveData}>
                    <input type='text' value={fullName} onChange={(e) => { setFullName(e.target.value) }} className='in' placeholder='Your Name' required />
                    <input type='email' value={email} onChange={(e) => { setEmail(e.target.value) }} className='inp' placeholder='Your Email' required />
                    <input type='text' value={address} onChange={(e) => { setAddress(e.target.value) }} placeholder='Your Address' required />
                    <input type='number' value={phone} onChange={(e) => { setPhone(e.target.value) }} placeholder='Your Phone Number' required />
                    <textarea cols='20' value={message} onChange={(e) => { setMessage(e.target.value) }} rows={10} placeholder='Your Message' required />
                    <div className='c-m-btn'>
                        <button type='submit' className='btn'>Send Message</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
export default Contact;
