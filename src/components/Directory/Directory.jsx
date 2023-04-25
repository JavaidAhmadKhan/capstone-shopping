/* eslint-disable react/prop-types */

import CategoryItem from '../CategoryItem/CategoryItem'
import './directory.styles.scss'

const Directory = ({ categories }) => {
    return (
        <div className="directory-container">
            {categories.map((category) => (
                <CategoryItem key={category.id} category={category} />
            ))}

        </div>
    )
}

export default Directory
