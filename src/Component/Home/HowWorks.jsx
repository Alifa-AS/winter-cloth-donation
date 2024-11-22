import React from 'react';
import img from '../../assets/b.jpg'

const HowWorks = () => {
    return (
        <div className='my-20'>
           <div className="hero bg-base-200 py-20">
            <div className="hero-content flex-col lg:flex-row-reverse" data-aos="zoom-in-up">
                <img
                src={img}
                className="max-w-full sm:max-w-xs md:max-w-sm lg:max-w-sm rounded-lg shadow-2xl object-cover" />
                <div>
                <h1 className="text-4xl font-bold">How It Works</h1>
                <p className="py-6">
                   <li className='font-bold'>Instructions for Donation</li>
                   <ul><span className='font-semibold'>What to Donate:</span>
                    Winter clothing: coats, scarves, gloves, hats (new or gently used).
                    Warm blankets and sleeping bags.
                    Monetary donations to fund the purchase and delivery of winter essentials.
                    <br />
                    How to Donate:

                    Visit our website to make an online donation.
                    Package your clothing and blankets securely for drop-off.</ul>
                    <li className='font-bold'> Collection Points</li>
                    <ul>Local Library - Division B
                    Address: 456 Library Lane, Division B
                    Timings: 10 AM - 6 PM, Monday to Friday 
                    <br />
                    <ul>Town Hall - Division C
                    Address: 789 City Square, Division C
                    Timings: 8 AM - 4 PM, Monday to Sunday</ul>
                    </ul>
                    <li className='font-bold'>Supported Divisions</li>
                    <ul>
                    Division A: Urban centers and shelters. <br />
                    Division B: Suburban communities and local <organizations className="br"></organizations>
                    Division C: Rural areas with limited resources. <br />
                    </ul>
                </p>
                 
                </div>
            </div>
            </div>
        </div>
    );
};

export default HowWorks;