import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

const CategoryBtn = () => {
    const[categories, setCategories] = useState([]);
    useEffect(()=>{
        fetch("/category.json")
        .then(res => res.json())
        .then((data) => setCategories(data))
        .catch((error) => console.error("ERROR",error))
    },[]);

    // {
    //     "id": 1,
    //     "category": "Dhaka",
    //     "slug": "dhaka"
    // },

    return (
        <div className='flex justify-center items-center md:gap-4 gap-2'>
            
            {
               categories.map((category) => (
               <NavLink to={
                category.category === "All" ? "/donation" : 
                `/donation/category/${category.slug}`
                }
                className={({isActive}) =>
               `btn lg:px-10 ${
                (isActive || location.pathname === 
                    `/donation/category/${category.slug}`)
                    && category.category !== "All"
                    ? "btn-primary" :
                    category.category === "All" && location.pathname === "/donation"
                    ? "btn-primary": "btn-outline"
                    }`
                
            }
                key={category.id}>
                {category.category} 
                </NavLink>
               ) 
            )}

        </div>
    );
};

export default CategoryBtn;