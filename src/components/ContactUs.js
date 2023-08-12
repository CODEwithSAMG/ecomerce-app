import React, { useState } from 'react';
import axios from 'axios';

const ContactUs = () => {
    const [form, setForm] = useState({
        name: '',
        email: '',
        password: ''
    });
    const { name, email, password } = form;

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({
            ...form,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:5000/demo', form)
            .then((res) => {
                // console.log(res.data);
            })
            .catch((error) => {
                console.log('Error submitting form data:', error);
            });
    };

    return (
        <>
            <h3 className='contactus_title'>Feel Free to Contact Us</h3>
            <div className='contactus_container'>
                <div className='left_contact'>
                    <img src='' alt='Image' />
                </div>

                <div className='right_contact'>
                    <form onSubmit={handleSubmit}>
                        <div>
                            <input
                                className='input_items'
                                name='name'
                                type='text'
                                placeholder='Enter First Name'
                                onChange={handleChange}
                                value={name} // Bind the input value to the state
                                autoComplete='off'
                                required
                            />
                        </div>
                        <div>
                            <input
                                className='input_items'
                                name='email'
                                type='email'
                                placeholder='Enter Email'
                                onChange={handleChange}
                                value={email} // Bind the input value to the state
                                autoComplete='off'
                                required
                            />
                        </div>
                        <div>
                            <input
                                className='input_items'
                                name='password'
                                type='password'
                                placeholder='Enter phone number'
                                onChange={handleChange}
                                value={password}
                                autoComplete='off'
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
