import React, { useState } from 'react';
import axios from 'axios';

const ContactUs = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
    });

    const { username, email } = formData;

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
                username: '',
                email: '',
            });
        } catch (error) {
            console.error('Error submitting form data:', error);
        }

        console.log('Submitting form data:', formData); // Debugging
    };

    return (
        <>
            <h3 className='contactus_title'> Feel Free to contact us</h3>

            <div className='contactus_container'>
                <div className='left_contact'>
                    <img src="" alt="image" />
                </div>

                <div className='right_contact'>
                    <form onSubmit={handleSubmit}>
                        <div>
                            <label>First Name:</label>
                            <input className='input_items' name="username" type='text' placeholder='Enter Username' onChange={handleChange} value={username} autoComplete="off" />
                        </div>

                        <div>
                            <label>Last Name:</label>
                            <input name="email" type='email' placeholder='Enter Email' onChange={handleChange} value={email} autoComplete="off" />
                        </div>

                        <div>
                            <label htmlFor="email">Email:</label>
                            <input name="email" type='email' placeholder='Enter Email' onChange={handleChange} value={email} autoComplete="off" />
                        </div>

                        <div>
                            <label htmlFor="Email">Phone:</label>
                            <input name="email" type='email' placeholder='Enter Email' onChange={handleChange} value={email} autoComplete="off" />
                        </div>
                        <div>
                            <label htmlFor="Email">Phone:</label>
                            <input name="email" type='email' placeholder='Enter Email' onChange={handleChange} value={email} autoComplete="off" />
                        </div>
                        <div>
                            <label htmlFor="Email">Phone:</label>
                            <input name="email" type='email' placeholder='Enter Email' onChange={handleChange} value={email} autoComplete="off" />
                        </div>
                        <div>
                            <label htmlFor="Email">Phone:</label>
                            <input name="email" type='email' placeholder='Enter Email' onChange={handleChange} value={email} autoComplete="off" />
                        </div>
                        <div>
                            <label htmlFor="Email">Phone:</label>
                            <input name="email" type='email' placeholder='Enter Email' onChange={handleChange} value={email} autoComplete="off" />
                        </div>
                        <div>
                            <label htmlFor="Email">Phone:</label>
                            <textarea name="email" type='textbox' placeholder='Enter Email' onChange={handleChange} value={email} autoComplete="off" />
                        </div>

                        <div style={{ width: "100%" }}>
                            <button type='submit'>Submit</button>
                        </div>
                    </form>
                </div>
            </div>


            {/* <div>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d111235.35876205424!2d76.88172008783555!3d29.396485425497453!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390dda457afbe651%3A0x41d3f6feacaa74d4!2sPanipat%2C%20Haryana!5e0!3m2!1sen!2sin!4v1691249560979!5m2!1sen!2sin" width="100%" height="450" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div> */}
        </>
    );
};

export default ContactUs;
