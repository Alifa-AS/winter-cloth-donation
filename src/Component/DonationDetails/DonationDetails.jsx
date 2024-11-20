import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Modal from '../Modal/Modal';

const DonationDetails = () => {
    
    const {id, image, title, description, status, contactInfo, division} = useLoaderData()
    

    return (
        <div className='py-20'>
            <div
                className="hero h-[500px]"
                style={{
                    backgroundImage: `url(${image})`,
                }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-neutral-content text-center">
                    <div className="max-w-md">
                    <h1 className="mb-5 text-4xl font-bold">{title}</h1>
                    <p className="mb-5 text-lg">{description}</p>
                    <p className="mb-5"><span className='font-bold px-2'>Division:</span> {division}</p>
                    <p className="mb-5"><span className='font-bold px-2'>Status:</span>{status}</p>
                    <p className="mb-5 font-semibold">{contactInfo}</p>
                    <button className="btn btn-primary" onClick={()=>document.getElementById('my_modal_5').showModal()}>Donate</button>
                    {/* <Link to={`/home/${details?.id}`} className="btn btn-primary">Back To Category</Link> */}
                    </div>
                </div>
                <Modal></Modal>
            </div>
        </div>
    );
};

export default DonationDetails;