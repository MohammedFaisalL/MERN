import React from 'react'

function Card({restaurant}) {
  return (
    <div className="card w-25 rounded-4 mb-3">
       <img src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${restaurant.info.cloudinaryImageId}`} class="card-img-top" alt="..."/>
       <div className="card-body pb-0">
       <p className="card-text fw-bold">{restaurant.info.name}</p>
       <div className="d-flex justify-content-start">
        <svg width="20" height="20" viewBox="0 0 24 24">
         <circle cx="12" cy="12" r="12" fill="green" />
         <path d="M12 2.5l2.89 6.14 6.49.59-4.84 4.41 1.56 6.36-5.62-3.5-5.62 3.5 1.56-6.36-4.84-4.41 6.49-.59L12 2.5z" fill="white" />
        </svg>
        <p className="ms-2">{restaurant.info.avgRating}</p>
        <p className="ms-2">&#x2022; {restaurant.info.sla.slaString}</p>
       </div>
       <p className="mb-0">
        {restaurant.info.cuisines.map((cuisine, index) => (
        <span key={index}>
         {cuisine}{index === restaurant.info.cuisines.length - 1 ? ' ' : ', '}
        </span>
        ))}
      </p>
       <p className="mb-3">{restaurant.info.areaName}</p>
       </div>
    </div>
  )
}

export default Card