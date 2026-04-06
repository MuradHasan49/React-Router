import App from '../App'
import { NavLink } from 'react-router'
import { Suspense, useState } from 'react'
import { use } from 'react'
import CategoryCard from '../assets/ReUseComponets/CategoryCard'
import MealCard from '../assets/ReUseComponets/MealCard'

const API = fetch("https://www.themealdb.com/api/json/v1/1/categories.php").then(res => res.json())


const Home = () => {
    const data = use(API)

    const [hidden, setHidden] = useState(true);
    const [clickBtn, setClickBtn] = useState([]);

    const buttonhandler = (clickBtn) => {
        setClickBtn(clickBtn)
        setHidden(false)
    }

    return (
        <>
            <div className=" container mx-auto">
                <Suspense fallback={<span className="loading loading-spinner text-error"></span>}>

                    <div className="p-6 bg-gray-800 rounded-lg grid grid-cols-12 gap-20">
                        <div className=" col-span-3 text-center ">
                            <h1 className="text-2xl font-semibold py-4 text-gray-500 ">All Meal Categories</h1>
                            <button onClick={() => setHidden(true)} className='btn btn-soft btn-warning w-full mb-2'>Show All Meals</button>
                            <div className="flex flex-col gap-2">

                                {
                                    data.categories.map((item) => <button onClick={() => buttonhandler(item.strCategory)} key={item.idCategory} className="btn btn-primary">{item.strCategory}</button>)
                                }
                            </div>
                        </div>
                        <div className="col-span-9 ">
                            <h1 className='text-3xl font-bold text-gray-500 border-b text-center'>All Meals</h1>
                            <div className={`${!hidden ? "hidden" : ""} py-6 grid grid-cols-3 gap-4`}>
                                {data.categories.map(item => <CategoryCard key={item.idCategory} categories={item} />)}
                            </div>
                            <MealCard clickBtn={clickBtn} />
                        </div>
                    </div>
                </Suspense>
            </div>
        </>
    )
}

export default Home