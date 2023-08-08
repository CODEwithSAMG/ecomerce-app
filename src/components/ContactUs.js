import React, { useState } from 'react';
import axios from 'axios';

const ContactUs = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: '',
    });

    const { firstName, lastName, email, phone, message } = formData;

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await axios.post('http://localhost:5000/api/contact', formData);
            setFormData({
                firstName: '',
                lastName: '',
                email: '',
                phone: '',
                message: '',
            });
        } catch (error) {
            console.error('Error submitting form data:', error);
        }
    };

    return (
        <>
            <h3 className='contactus_title'>Feel Free to Contact Us</h3>

            <div className='contactus_container'>
                {/* Left Content */}
                <div className='left_contact'>
                    <img src='' alt='Image' />
                </div>

                {/* Right Content */}
                <div className='right_contact'>
                    <form onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor='firstName'>First Name:</label>
                            <input
                                className='input_items'
                                name='firstName'
                                type='text'
                                placeholder='Enter First Name'
                                onChange={handleChange}
                                value={firstName}
                                autoComplete='off'
                                required
                            />
                        </div>

                        <div>
                            <label htmlFor='lastName'>Last Name:</label>
                            <input
                                className='input_items'
                                name='lastName'
                                type='text'
                                placeholder='Enter Last Name'
                                onChange={handleChange}
                                value={lastName}
                                autoComplete='off'
                                required
                            />
                        </div>

                        <div>
                            <label htmlFor='email'>Email:</label>
                            <input
                                className='input_items'
                                name='email'
                                type='email'
                                placeholder='Enter Email'
                                onChange={handleChange}
                                value={email}
                                autoComplete='off'
                                required
                            />
                        </div>

                        <div>
                            <label htmlFor='phone'>Phone:</label>
                            <input
                                className='input_items'
                                name='phone'
                                type='tel'
                                placeholder='Enter Phone Number'
                                onChange={handleChange}
                                value={phone}
                                autoComplete='off'
                                required
                            />
                        </div>

                        <div>
                            <label htmlFor='message'>Message:</label>
                            <textarea
                                className='input_items'
                                name='message'
                                placeholder='Enter Your Message'
                                onChange={handleChange}
                                value={message}
                                required
                            />
                        </div>

                        <div style={{ width: '100%' }}>
                            <button type='submit'>Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default ContactUs;
