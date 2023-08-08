import React from 'react';
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { AiOutlineStar } from "react-icons/ai";

const StarRating = ({ rating }) => {
    const fullStars = Math.floor(rating?.rate); // Get the number of full stars (e.g., 3.7 -> 3)
    const hasHalfStar = rating?.rate % 1 !== 0; // Check if there is a half star (e.g., 3.7 -> true)

    const ratingStars = Array.from({ length: 5 }, (_, index) => {
        switch (true) {
            case index < fullStars:
                return <FaStar key={index} />;
            case hasHalfStar && index === fullStars:
                return <FaStarHalfAlt key={index} />;
            default:
                return <AiOutlineStar key={index} />;
        }
    });

    return (
        <div>
            {ratingStars}
        </div>
    );
};

export default StarRating;
