import { Outlet, useLoaderData, useParams } from 'react-router-dom';
import DonateCard from '../DonateCard/DonateCard';
import CategoryBtn from '../DonateCard/CategoryBtn';



const Donation = () => {

    const allDonations = useLoaderData() || [];
    const { category } = useParams();

    const filterDonations = !category || category.toLowerCase() === 'all'
    ? allDonations :
    allDonations.filter(
        donation => donation.division.toLowerCase() === category.toLowerCase()
    );
    
    return (
        <div>
            <main className='py-20'>
                <aside className='pb-10 text-center'>
                    <CategoryBtn></CategoryBtn>
                </aside>
                 <section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 '>
                    {
                        filterDonations.length > 0 ? (
                        filterDonations.map((donate,idx)=> (
                        <DonateCard key={idx} donate={donate}></DonateCard>
                    ))
                    ): (
                        <p className='text-center col-span-full text-gray-500'>
                            No Donations available for this category</p>
                    )}
                 </section>
            </main>
           <div>
              <Outlet />
           </div>
        </div>
    );
};

export default Donation;