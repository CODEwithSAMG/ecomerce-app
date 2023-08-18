import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import "../App.css"
const ContactUs = () => {
    const [form, setForm] = useState({
        name: '',
        lname: '',
        email: '',
        phone: '',
        textbox: ''
    });
    const { name, lname, email, phone, textbox } = form;

    const handleChange = (e) => {
        const { name, value } = e.target;

        setForm((prevState) => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (form) {
            axios
                .post('http://localhost:5000/demo', form)
                .then((res) => {
                    console.log(res.data);
                })
                .catch((error) => {
                    console.log('Error submitting form data:', error);
                });
        }

        setForm({
            name: '',
            lname: '',
            email: '',
            phone: '',
            textbox: ''
        });
    };

    return (
        <>
            <h2 className='contactus_title'>Feel Free to Contact Us</h2>
            <div className='contactus_container'>
                <div className='left_contact'>
                    <LazyLoadImage
                        width="100%" height="100%"
                        effect="blur" loading="eager" />
                </div>

                <div className='right_contact'>
                    <form>
                        <div>
                            <label>First Name:</label>
                            <input
                                className='input_items'
                                name='name'
                                type='text'
                                placeholder='Enter First Name'
                                onChange={handleChange}
                                value={name}
                                autoComplete='off'
                                required
                            />
                        </div>

                        <div>
                            <label>Last Name:</label>
                            <input
                                className='input_items'
                                name='lname'
                                type='text'
                                placeholder='Enter Last Name'
                                onChange={handleChange}
                                value={lname}
                                autoComplete='off'
                                required
                            />
                        </div>

                        <div>
                            <label>Email Address:</label>
                            <input
                                className='input_items'
                                name='email'
                                type='email'
                                placeholder='Enter your Email Address'
                                onChange={handleChange}
                                value={email}
                                autoComplete='off'
                                required
                            />
                        </div>

                        <div>
                            <label>Phone Number:</label>
                            <input
                                className='input_items'
                                name='phone'
                                type='phone'
                                placeholder='Enter phone number'
                                onChange={handleChange}
                                value={phone}
                                autoComplete='off'
                                required
                            />
                        </div>

                        <div className='text_style'>
                            <label>Text:</label>
                            <textarea
                                className='input_items'
                                name='textbox'
                                placeholder='Enter text'
                                onChange={handleChange}
                                value={textbox}
                                rows="4"
                            />
                        </div>
                    </form>

                    <div>
                        <button type='submit' onClick={handleSubmit}>Submit</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ContactUs;
