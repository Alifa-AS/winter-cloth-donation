import React, { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
/**
 Quantity of items (e.g., 2 jackets, 3 blankets) 
•	Item type (e.g., blanket, jacket, sweater).
•	Pickup location(e.g. House 12, Road 5, Dhanmondi, Dhaka)
•	Additional notes (optional).
•	Upon submission, Display a Toast message “ Thank you ! We will reach your destination soon”. 

 */
const Modal = () => {

    const[formData, setFormData] = useState({
        quantity: '',
        item: '',
        location: '',
        notes: '',
    })
    const handleChange = (e) => {
        const {name,value} = e.target;
        setFormData((prev) => ({
            ...prev, [name]: value,
        }))
        
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        toast.success('Thank you! We will reach your destination soon.');
        setFormData({
            quantity: '',
            item: '',
            location: '',
            notes: '',
        })
        document.getElementById('my_modal_5').close();
    }
    return (
        <div>
            {/* toast */}
            <Toaster position='top-center' reverseOrder={false} />
            {/* modal */}
            <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
            <div className="modal-box">
                 <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label className="block mb-1 font-medium">
                                Quantity of Items</label>
                            <input
                                type="text"
                                name="quantity"
                                placeholder="e.g., 2 jackets"
                                value={formData.quantity}
                                onChange={handleChange}
                                className="input input-bordered input-primary w-full max-w-xs"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block mb-1 font-medium">Item Type</label>
                            <input
                                type="text"
                                name="item"
                                placeholder="e.g., blanket, sweater"
                                value={formData.item}
                                onChange={handleChange}
                                className="input input-bordered input-primary w-full max-w-xs"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block mb-1 font-medium">Pickup Location</label>
                            <input
                                type="text"
                                name="location"
                                placeholder="e.g., House 12, Road 5, Dhanmondi, Dhaka"
                                value={formData.location}
                                onChange={handleChange}
                                className="input input-bordered input-primary w-full max-w-xs"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block mb-1 font-medium">Additional Notes (Optional)</label>
                            <textarea
                                name="notes"
                                placeholder="Optional notes"
                                value={formData.notes}
                                onChange={handleChange}
                                className="textarea textarea-bordered textarea-sm w-full max-w-xs"
                            />
                        </div>
                   <button className='btn btn-primary' type='submit'>Submit</button>
                 </form>
                <div className="modal-action">
                    <button className='btn'
                    onClick={() => document.getElementById('my_modal_5').close()}>
                        Close</button>
                </div>
            </div>
            </dialog>
        </div>
    );
};

export default Modal;