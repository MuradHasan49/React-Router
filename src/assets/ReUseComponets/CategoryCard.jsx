import React from 'react';

const CategoryCard = ({ categories }) => {

    return (
       <div className="card group bg-base-100 shadow-xl border border-base-200 transition-all hover:scale-[1.02]">

    <div className="px-6 pt-6">
        <figure className="relative h-64 w-full overflow-hidden rounded-xl bg-base-200">
            <img
                src={categories.strCategoryThumb}
                alt={categories.strCategory}
                /* This now works because it finds the 'group' parent */
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
        </figure>
    </div>

    <div className="card-body items-center text-center">
        <h2 className="card-title text-2xl font-bold">{categories.strCategory}</h2>
        <p className="text-sm opacity-70 line-clamp-3">
            {categories.strCategoryDescription}
        </p>
        <div className="card-actions mt-4 w-full">
            <button className="btn btn-primary btn-block">
                View Recipes
            </button>
        </div>
    </div>
</div>
    );
};

export default CategoryCard;