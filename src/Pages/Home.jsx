import App from '../App'
import { NavLink } from 'react-router'
import { Suspense } from 'react'
import { use } from 'react'
import CategoryCard from '../assets/ReUseComponets/CategoryCard'

const API = fetch("https://www.themealdb.com/api/json/v1/1/categories.php").then(res => res.json())

const Home = () => {

const data = use(API)
    return (
        <>
            <div className=" container mx-auto">

                <Suspense fallback={<span className="loading loading-spinner text-error"></span>}>

                    <div className="p-6 bg-gray-800 rounded-lg grid grid-cols-12 gap-20">
                        <div className=" col-span-3 text-center ">
                              <h1 className="text-2xl font-semibold py-4 text-gray-500 ">All Meal Categories</h1>
                              <div className="flex flex-col gap-2">

                            {
                                data.categories.map((item) => <button key={item.idCategory} className="btn btn-primary">{item.strCategory}</button>)
                            }
                            </div>
                        </div>
                        <div className="col-span-9 ">
                            <h1 className='text-3xl font-bold text-gray-500 border-b text-center'>All Meals</h1>
                            <div className="py-6 grid grid-cols-3 gap-4">
                                {data.categories.map(item=> <CategoryCard  key={item.idCategory}  categories={item}/> )}
                            </div>
                        </div>
                    </div>
                </Suspense>
            </div>
        </>
    )
}

export default Home