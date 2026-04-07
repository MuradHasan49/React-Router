import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import ProductCard from './ProductCard';

const RecipeDetails = () => {
    const { id } = useParams();
    const [dynamicApi, setDynamicApi] = useState(null); // Start as null

    useEffect(() => {
        fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
            .then(res => res.json())
            .then(data => setDynamicApi(data.meals)); // Set the array
    }, [id]);

    if (!dynamicApi) {
        return <h2>Loading Recipe...</h2>;
    }

    return (
        <>
            <div>
                {dynamicApi.map(mealData => (
                   <ProductCard key={mealData.idMeal} mealData={mealData}/> 
                ))}
            </div>
        </>
    )
}

export default RecipeDetails