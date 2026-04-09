import React, { useState } from 'react';
import { Link } from 'react-router';

const ProductCard = ({ mealData }) => {

    const [isVideoOpen, setIsVideoOpen] = useState(false);

    if (!mealData) return <div className="text-center p-10">Loading recipe...</div>;

    const { strArea, strMeal, strMealThumb, strCategory, strTags, strInstructions, strYoutube } = mealData;
    const tagsArray = strTags ? strTags.split(',') : [];
    const instructionsArray = strInstructions ? strInstructions.split('.').filter(step => step.trim() !== "") : [];

    const ingredients = [];
    for (let i = 1; i <= 20; i++) {
        const name = mealData[`strIngredient${i}`];
        const measure = mealData[`strMeasure${i}`];
        if (name && name.trim() !== "") {
            ingredients.push({ item: name, amount: measure });
        }
    }

    return (
        <div className="flex justify-center items-center min-h-[80vh] bg-gray-50 p-6 relative">
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

                    <div className="mt-auto pt-6 border-t border-gray-50 flex items-center justify-between">
                        <div>
                            <p className="text-[10px] text-gray-400 uppercase font-bold">Prep Time</p>
                            <p className="text-lg font-bold text-gray-800">~ 45 Mins</p>
                        </div>
                        <div className="flex flex-col gap-3 text-center">
                            <button
                                onClick={() => setIsVideoOpen(true)}
                                className="bg-gray-900 hover:bg-orange-600 text-white px-8 py-3 rounded-xl font-bold transition-all duration-300 shadow-lg active:scale-95 disabled:bg-gray-400 disabled:cursor-not-allowed"
                                disabled={!strYoutube}
                            >
                                {strYoutube ? "Start Cooking" : "Video Unavailable"}
                            </button>

                            <Link
                                className="bg-orange-900 hover:bg-orange-700 text-white px-8 py-3 rounded-xl font-bold transition-all duration-300 shadow-lg active:scale-95 text-sm"
                                to="/"
                            >
                                Back to Home
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {isVideoOpen && (
                <div className="modal modal-open modal-middle backdrop-blur-md z-100">
                    <div className="modal-box p-0 overflow-hidden max-w-4xl bg-black relative border border-white/10 shadow-2xl">

                        <div className="w-full aspect-video">
                            <iframe
                                width="100%"
                                height="100%"
                                src={`${strYoutube.replace("watch?v=", "embed/")}?autoplay=1`}
                                title="YouTube video player"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen
                            ></iframe>
                        </div>

                        <div className="p-4 flex justify-between items-center bg-gray-900 border-t border-white/5">
                            <h3 className="font-bold text-white uppercase tracking-widest text-xs">Cooking Tutorial: {strMeal}</h3>
                            <button
                                onClick={() => setIsVideoOpen(false)}
                                className="btn btn-primary btn-sm rounded-lg"
                            >
                                Stop Video
                            </button>
                        </div>
                    </div>

                    <div className="modal-backdrop bg-black/60" onClick={() => setIsVideoOpen(false)}></div>
                </div>
            )}
        </div>
    );
};

export default ProductCard;