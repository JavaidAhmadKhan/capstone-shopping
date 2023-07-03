import Directory from "../../components/Directory/Directory"
import Hats from '../../assets/hats.jpg'
import Sneakers from '../../assets/sneakers.webp'
import Jeans from '../../assets/jeans.jpg'
import Hoodies from '../../assets/hoodies.webp'
import Shirts from '../../assets/shirts.webp'
import Jackets from '../../assets/jackets.webp'
import Mens from '../../assets/mens.webp'
import Womens from '../../assets/womens.webp'
import { Outlet } from "react-router-dom"


const Home = () => {
    const categories = [
        {
            id: 1,
            title: "Hats",
            imageUrl: Hats
        },
        {
            id: 2,
            title: "Sneakers",
            imageUrl: Sneakers
        },
        {
            id: 3,
            title: "Jeans",
            imageUrl: Jeans
        },
        {
            id: 4,
            title: "Hoodies",
            imageUrl: Hoodies
        },
        {
            id: 5,
            title: "Shirts",
            imageUrl: Shirts
        },
        {
            id: 6,
            title: "Jackets",
            imageUrl: Jackets
        },
        {
            id: 7,
            title: "Mens",
            imageUrl: Mens
        },
        {
            id: 8,
            title: "Womens",
            imageUrl: Womens
        },
    ]

    return (
        <div>
            <Outlet />
            <Directory categories={categories} />
        </div>
    )
}

export default Home