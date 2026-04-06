import React from 'react';

const CategoryCard = ({categories}) => {

  return (
    <div className="card bg-base-100 shadow-xl border border-base-200 transition-all hover:scale-[1.02]">
      {/* Category Image */}
      <figure className="px-10 pt-10">
        <img
          src={categories.strCategoryThumb}
          alt={categories.strCategory}
          className="rounded-xl bg-base-200"
        />
      </figure>

      <div className="card-body items-center text-center">
        <h2 className="card-title text-2xl font-bold">{categories.strCategory}</h2>
        
        {/* Description - limited to 3 lines for clean UI */}
        <p className="text-sm opacity-70 line-clamp-3">
          {categories.strCategoryDescription}
        </p>

        {/* Action Button */}
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