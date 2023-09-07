/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";

import "./diirectory-item.style.scss";
import { useState } from "react";

const DirectoryItem = ({ category }) => {
  const { imageUrl, title, route } = category;
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const onNavigateHandler = () => navigate(route);

  return (
    <>
      {loading ? (
        "loading..."
      ) : (
        <div className="category-container" onClick={onNavigateHandler}>
          <div
            className="background-image"
            style={{ backgroundImage: `url(${imageUrl})` }}
          />
          <div className="category-body-container">
            <h2>{title}</h2>
            <p>Shop Now</p>
          </div>
        </div>
      )}
    </>
  );
};

export default DirectoryItem;
