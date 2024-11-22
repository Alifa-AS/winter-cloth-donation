import React from 'react';
import image from "../../assets/a.jpg"

const About = () => {
    return (
        <div className='my-20'>
            <div className="hero bg-base-200 p-8 lg:p-20">
            <div className="hero-content flex-col lg:flex-row lg:gap-10" data-aos="flip-left">
                <img
                src={image}
                className="w-full rounded-lg shadow-2xl max-w-[250px] sm:max-w-[250px] md:max-w-sm lg:max-w-md" />
                <div className='text-center lg:text-left'>
                <h1 className="text-3xl lg:text-4xl font-bold">About Us</h1>
                <p className="py-4 lg:py-6 text-sm sm:text-base">
                At Our Donation Center, we believe that no one should have to face the harshness of winter without proper warmth and care. Our mission is to bring comfort to those in need by providing essentials like warm clothing, blankets, and meals. With the generous support of our community, we aim to spread warmth, hope, and kindness during the coldest months of the year. Join us in making a difference this winter—because together, we can help everyone find
                 a little more warmth.
                </p>
                <button className="btn btn-primary mt-4">Get Start</button>
                </div>
            </div>
            </div>
        </div>
    );
};

export default About;