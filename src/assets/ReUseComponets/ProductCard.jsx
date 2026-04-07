import React from 'react';

const ProductCard = ({ mealData }) => {

    if (!mealData) return <div className="text-center p-10">Loading recipe...</div>;

    const { strArea, strMeal, strMealThumb, strCategory, strTags, strInstructions } = mealData;

    const tagsArray = strTags ? strTags.split(',') : [];

    const instructionsArray = strInstructions ? strInstructions.split('.').filter(step => step.trim() !== "") : [];

    // 3. Fix Ingredients: The API gives them as strIngredient1, strIngredient2...
    const ingredients = [];
    for (let i = 1; i <= 20; i++) {
        const name = mealData[`strIngredient${i}`];
        const measure = mealData[`strMeasure${i}`];

        if (name && name.trim() !== "") {
            ingredients.push({ item: name, amount: measure });
        }
    }

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-50 p-6">
            <div className="max-w-4xl w-full bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row border border-gray-100">

              
                <div className="md:w-5/12 relative group">
                    <img
                        src={strMealThumb}
                        alt={strMeal}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-4 left-4 flex flex-col gap-2">
                        <span className="bg-orange-600 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest shadow-lg">
                            {strArea}
                        </span>
                    </div>
                </div>

              
                <div className="md:w-7/12 p-8 md:p-10 flex flex-col">
                    <div className="mb-6">
                        <span className="text-orange-500 font-bold text-sm uppercase tracking-wide">
                            {strCategory} Recipe
                        </span>
                        <h1 className="text-3xl font-black text-gray-900 mt-1 leading-tight">
                            {strMeal}
                        </h1>
                        <div className="flex flex-wrap gap-2 mt-3">
                            {tagsArray.map((tag) => (
                                <span key={tag} className="text-[11px] bg-gray-100 text-gray-500 px-2 py-0.5 rounded border border-gray-200 uppercase font-medium">
                                    #{tag}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-8 mb-8">
                  
                        <div className="space-y-3">
                            <h3 className="text-sm font-bold text-gray-800 uppercase border-b border-orange-100 pb-2">
                                Ingredients
                            </h3>
                            <ul className="space-y-2 h-40 overflow-y-auto pr-2">
                                {ingredients.map((ing, i) => (
                                    <li key={i} className="text-[11px] text-gray-600 flex justify-between gap-1">
                                        <span className="font-semibold text-gray-800">{ing.item}</span>
                                        <span className="text-gray-400 text-right">{ing.amount}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

    
                        <div className="space-y-3">
                            <h3 className="text-sm font-bold text-gray-800 uppercase border-b border-orange-100 pb-2">
                                Quick Steps
                            </h3>
                            <div className="space-y-2">
                                {instructionsArray.slice(0, 3).map((step, i) => (
                                    <p key={i} className="text-[10px] text-gray-500 italic leading-relaxed line-clamp-3">
                                        • {step.trim()}.
                                    </p>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Action Button */}
                    <div className="mt-auto pt-6 border-t border-gray-50 flex items-center justify-between">
                        <div>
                            <p className="text-[10px] text-gray-400 uppercase font-bold">Preparation Time</p>
                            <p className="text-lg font-bold text-gray-800">~ 45 Mins</p>
                        </div>
                        <button className="bg-gray-900 hover:bg-orange-600 text-white px-8 py-3 rounded-xl font-bold transition-all duration-300 shadow-lg active:scale-95">
                            Start Cooking
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;