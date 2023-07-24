import React, { useContext } from 'react';
import { AppContext } from '../context/ProductContext';

const ContactUs = () => {
    const { name } = useContext(AppContext);

    return (
        <>
            {name}
        </>

    )
}

export default ContactUs