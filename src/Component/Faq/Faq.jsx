import React from 'react';

const Faq = () => {
    return (
        <>
        <section className='container mx-auto px-4 sm:px-6 lg:px-8'>
            <h1 className='text-3xl font-bold text-center py-10'>Frequently Asked</h1>
          </section>
        <div className='mb-10'>

            <div className="collapse collapse-plus bg-base-200 my-5">
            <input type="radio" name="my-accordion-3" defaultChecked />
            <div className="collapse-title text-xl font-medium">What can I donate?</div>
            <div className="collapse-content">
                <p>We’d love all your good quality clean adults’ and children’s clothing, as well as pairs of shoes. Underwear, lingerie, and swimwear are welcome, along with accessories like handbags and belts. We also collect bed linen, sheets, duvet covers, pillow cases, curtains, towels, and soft toys. Additionally, perfumes, toiletries, laptops, tablets, mobile phones, and small bric-a-brac items are appreciated.</p>
            </div>
            </div>
            <div className="collapse collapse-plus bg-base-200 my-5">
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title text-xl font-medium">Do you collect baby clothes?</div>
            <div className="collapse-content">
                <p>Yes, we’d love clean baby clothes too.</p>
            </div>
            </div>
            <div className="collapse collapse-plus bg-base-200 my-5">
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title text-xl font-medium">Do you collect towels and curtains?</div>
            <div className="collapse-content">
                <p>Yes, we accept clean towels and curtains.</p>
            </div>
           </div>
        </div>

        </>
    );
};

export default Faq;