import { useEffect, useState } from 'react';
import { TopLoader } from '../UI/TopLoader';
import { POSTDATA } from "../auth/HTTRequests"
import { toast, ToastContainer } from "react-toastify";

import 'react-toastify/dist/ReactToastify.css';

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

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await POSTDATA("/contact", form)

            if (response) {
                toast.success("form succesfully submited");
            } else {
                toast.error("Failed to submit contact form");
            }
        } catch (error) {
            toast.error("Something went wrong", error);
        }

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
            <ToastContainer position="top-center" />

            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3476.263000233578!2d76.94601037608054!3d29.391861449193815!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ddbbbde2535cb%3A0xbd73390676c652a9!2sAggarsain%20Colony%2C%20Panipat%2C%20Haryana%20132108!5e0!3m2!1sen!2sin!4v1699253421243!5m2!1sen!2sin" width="100%" height="450" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>

            <section className='contactus_container p-10'>
                <div className='right_contact'>
                    <h2 className='contactus_title'>Feel Free to Contact Us</h2>

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

                    <div style={{ textAlign: "center" }}>
                        <button type='submit' onClick={handleSubmit}>Submit</button>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ContactUs;
