import App from '../App'
import { NavLink } from 'react-router'
import Asite from '../assets/ReUseComponets/Asite'
import { Suspense } from 'react'

const API = fetch("https://www.themealdb.com/api/json/v1/1/list.php?c=list").then(res => res.json())

const Home = () => {

    return (
        <>
        <div className=" container mx-auto">

            <Suspense fallback={<span className="loading loading-spinner text-error"></span>}>
                <Asite API={API}></Asite>
            </Suspense>
        </div>
        </>
    )
}

export default Home