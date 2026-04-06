
import React, { useState, useEffect } from 'react';

const MealCard = ({ clickBtn }) => {

    const [data, setData] = useState(null);

    useEffect(() => {
        fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${clickBtn}`)
            .then(res => res.json())
            .then(result => {
                setData(result.meals);
                data(null);
            });
    });



    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
    {data?.map((meal) => (
        /* The key must be on the direct child of the map function */
        <div 
            key={meal.idMeal} 
            className="card bg-base-100 shadow-xl border border-base-200 transition-all hover:scale-[1.02] overflow-hidden group"
        >
            {/* Image Section */}
            <figure className="px-6 pt-6">
                <div className="relative h-64 w-full overflow-hidden rounded-xl bg-base-200">
                    <img
                        src={meal.strMealThumb}
                        alt={meal.strMeal}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                </div>
            </figure>

            {/* Content Section */}
            <div className="card-body items-center text-center p-6">
                <h2 className="card-title text-2xl font-bold text-white line-clamp-1">
                    {meal.strMeal}
                </h2>
                
                <p className="text-sm opacity-60 mb-4 uppercase tracking-widest font-semibold">
                    Meal ID: {meal.idMeal}
                </p>

                <div className="card-actions w-full">
                    <button className="btn btn-primary btn-block  border-none text-white font-bold  transition-all active:scale-95">
                        View Recipe Details
                    </button>
                </div>
            </div>
        </div>
    ))}
</div>
        </>
    )
}

export default MealCard