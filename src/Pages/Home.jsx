import { Suspense, useState } from 'react'
import { use } from 'react'
import CategoryCard from '../assets/ReUseComponets/CategoryCard'
import MealCard from '../assets/ReUseComponets/MealCard'
import NoMealsFound from '../assets/ReUseComponets/NoMealsFound'

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
            <div className=" container mx-auto py-10">
                <Suspense fallback={<span className="loading loading-spinner text-error"></span>}>

                    <div className="p-6 bg-gray-800 rounded-lg grid grid-cols-12 gap-20">
                        <div className=" col-span-3 text-center ">
                            <h1 className="text-2xl font-semibold py-4 text-gray-500 ">All Meal Categories</h1>
                            <div className="flex flex-col gap-2">

                                {
                                    data.categories.map((item) => <button onClick={() => buttonhandler(item.strCategory)} key={item.idCategory} className={`${clickBtn === item.strCategory? "btn-primary text-white":""} btn text-gray-500`}>{item.strCategory}</button>)
                                }
                            </div>
                        </div>
                        <div className="col-span-9 ">
                            <h1 className='text-3xl font-bold text-gray-500 border-b text-center'> {clickBtn} Meals List</h1>
                            <div className={`${!hidden ? "hidden" : ""} py-6 grid grid-cols-3 gap-4`}>
                                {!data ? " " :<div className='col-span-3'> <NoMealsFound/> </div>}
                                { data.categories.map(item => <CategoryCard key={item.idCategory} categories={item} />)}
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