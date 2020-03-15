import React from "react";

function ListElement({title, description, urlToImage}) {
  return (
    <li className="news__element">
      <div className="news__title">
        {title}
      </div>
      <div className="news__image">
        <img src={urlToImage}
             alt="news"/>
      </div>
      <div className="news__description">
        {description}
      </div>
      

    </li>
  )
}

export default ListElement;