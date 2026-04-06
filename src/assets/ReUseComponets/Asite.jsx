import { use } from "react"

const Asite = ({ API }) => {
    const data = use(API)
    // console.log(data)
    return (
        <>
        <div className="flex flex-col py-15">
             <h1 className="text-2xl font-semibold py-4 text-gray-500 ">All Meal Categories</h1>
            {
                data.meals.map((item,ind) => <li key={ind} className="">{item.strCategory}</li>)
            }
        </div>
        </>
    )
}

export default Asite