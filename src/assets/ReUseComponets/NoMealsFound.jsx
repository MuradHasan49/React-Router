import React from 'react';
import { GiCookingPot, GiHotMeal, GiCampfire, GiBubblingBowl } from 'react-icons/gi';
import { MdOutlineNoFood } from 'react-icons/md';

const NoMealsFound = () => {
    return (
        <div className="flex justify-center items-center min-h-[600px] p-4 bg-transparent">
            <div className="card w-full max-w-md bg-base-100/60 backdrop-blur-md border border-dashed border-base-300 shadow-xl">
                
                <div className="card-body items-center text-center py-12">
                    <div className="relative mb-12">
                        <div className="absolute -top-12 left-1/2 -translate-x-1/2 flex gap-3">
                            <GiHotMeal className="text-primary/40 animate-bounce transition-all" size={24} />
                            <GiBubblingBowl className="text-primary/20 animate-bounce delay-150" size={28} />
                            <GiHotMeal className="text-primary/40 animate-bounce delay-300" size={24} />
                        </div>

                        <div className="relative">
                            <GiCookingPot className="text-8xl text-base-content/10 absolute -inset-2 blur-sm" />
                            <GiCookingPot className="text-8xl text-primary animate-pulse" />
                        </div>

                        <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 flex justify-center text-orange-500 animate-pulse">
                            <GiCampfire size={36} />
                        </div>
                    </div>

                    <div className="flex items-center justify-center gap-2 text-base-content/30 italic font-medium mb-4">
                        <MdOutlineNoFood size={20} />
                        <span className="tracking-widest uppercase text-xs">Kitchen is Quiet</span>
                    </div>

                    <div className="space-y-6">
                        <h2 className="text-4xl font-black uppercase tracking-tighter text-base-content leading-tight">
                            A Waiting <span className="text-primary">Menu</span>
                        </h2>
                        
                        <div className="flex items-center justify-center gap-3">
                            <span className="h-px w-10 bg-primary/20"></span>
                            <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-primary/60">Chef's Note</span>
                            <span className="h-px w-10 bg-primary/20"></span>
                        </div>

                        <p className="text-base-content/60 italic leading-relaxed max-w-xs mx-auto text-sm">
                            "Our culinary inspirations are currently being refreshed. We kindly invite you to 
                            <span className="text-primary font-bold not-italic"> select any category </span> 
                            above to discover our available gourmet selections."
                        </p>
                    </div>

                    <div className="w-12 h-1 bg-primary/10 mx-auto rounded-full mt-8"></div>
                </div>
            </div>
        </div>
    );
};

export default NoMealsFound;