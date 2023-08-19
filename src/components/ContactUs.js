import { useEffect, useState } from 'react';
import { TopLoader } from '../UI/TopLoader';
import { LazyLoadImage } from "react-lazy-load-image-component";

import "../App.css"


const ContactUs = () => {
    const [progress, setProgress] = useState(0);
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

        setForm({
            name: '',
            lname: '',
            email: '',
            phone: '',
            textbox: ''
        });
    };

    useEffect(() => {
        setProgress(100)
    }, [])


    return (
        <>
            <TopLoader progress={progress} setProgress={setProgress} />

            <h2 className='contactus_title'>Feel Free to Contact Us</h2>

            <section className='contactus_container'>
                <LazyLoadImage
                    className='left_contact'
                    src="contact.webp"
                    alt="contact img"
                />


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
            </section>
        </>
    );
};

export default ContactUs;
