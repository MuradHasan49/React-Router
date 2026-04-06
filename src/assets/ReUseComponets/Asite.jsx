import { use } from "react"

const Asite = ({ API }) => {
    const data = use(API)
    console.log(data)
    return (
        <>
        <div className="grid grid-cols-1 py-15 px-20 bg-gray-800 rounded-lg  ">
            {
                data.meals.map(item => <button className="btn btn-primary mt-2  max-w-30">{item.strCategory}</button>)
            }
        </div>
        </>
    )
}

export default Asite