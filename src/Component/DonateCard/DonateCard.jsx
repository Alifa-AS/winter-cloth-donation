import React from 'react';

const DonateCard = ({donate}) => {
    console.log(donate);
    const{image, title, description, division} = donate

    return (
        <div className='flex justify-center p-4'>
            <div className="card card-compact bg-base-100 w-full max-w-sm md:max-w-md lg:max-w-lg shadow-xl">
            <figure  className="px-4 pt-4 md:px-6 md:pt-8">
                <img
                className='w-full h-auto object-cover rounded-xl'
                src={image}
                alt="img" />
            </figure>
            <div className="card-body">
                <h2 className="card-title text-lg md:text-lg lg:text-xl font-bold">{title}</h2>
                <p className='text-sm md:text-base'>{description}</p>
                <p className='text-sm md:text-base font-semibold'>{division}</p>
                <div className="card-actions">
                <button className="btn btn-info w-full md:w-auto">Donate Now</button>
                </div>
            </div>
            </div>
        </div>
    );
};

export default DonateCard;