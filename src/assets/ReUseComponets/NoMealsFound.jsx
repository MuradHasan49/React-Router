import React from 'react';
import { GiChefToque, GiCookingPot } from 'react-icons/gi';
import { HiOutlineArrowNarrowRight } from 'react-icons/hi';
import { MdOutlineRestaurantMenu } from 'react-icons/md';

const NoMealsFound = () => {
    return (
        <div className="flex justify-center items-center min-h-[450px] p-4">
            <div className="card w-full max-w-md bg-base-100 shadow-2xl border border-base-200">
                
               
                <div className="relative h-32 bg-primary rounded-t-2xl flex items-center justify-center overflow-hidden">
                    <GiCookingPot className="absolute -left-4 -bottom-4 text-white/10 text-9xl rotate-12" />
                    <div className="bg-white/20 backdrop-blur-md p-4 rounded-full border border-white/30 shadow-xl">
                        <GiChefToque className="text-white text-5xl animate-pulse" />
                    </div>
                </div>

                <div className="card-body items-center text-center">
                    
                    <div className="badge badge-outline badge-primary font-bold uppercase tracking-widest text-[10px] mb-2">
                        Empty Kitchen
                    </div>

                   
                    <h2 className="card-title text-3xl font-black text-base-content">
                        No Meals Found
                    </h2>
                    
                   
                    <p className="text-base-content/70 text-sm leading-relaxed my-4">
                        We couldn't find any meals in this category. Our chefs are likely dreaming up new recipes! 
                        Try selecting a different <span className="text-primary font-bold">Category</span> from the menu.
                    </p>

                    
                    <div className="flex gap-4 my-2 text-base-content/20">
                        <MdOutlineRestaurantMenu size={24} />
                        <div className="divider divider-horizontal"></div>
                        <GiCookingPot size={24} />
                    </div>

                   
                    <div className="card-actions w-full mt-6">
                        <button className="btn btn-primary btn-block group rounded-xl shadow-lg hover:shadow-primary/30 transition-all">
                            Explore Menu
                            <HiOutlineArrowNarrowRight className="text-xl group-hover:translate-x-2 transition-transform" />
                        </button>
                    </div>
                </div>

              
                <div className="p-4 bg-base-200/50 rounded-b-2xl flex justify-center">
                    <span className="text-[10px] font-medium text-base-content/40 uppercase tracking-[0.2em]">
                        Freshness Guaranteed • 2026
                    </span>
                </div>
            </div>
        </div>
    );
};

export default NoMealsFound;