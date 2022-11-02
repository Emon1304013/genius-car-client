import React from "react";
import { FaBeer,FaArrowRight } from 'react-icons/fa';
import { Link } from "react-router-dom";

const ServiceCard = ({service}) => {
    const {title,price,_id,img,} = service;
  return (
    <div className="card w-96 mx-auto shadow-xl border-2">
      <figure>
        <img src={img} alt={title} className='h-56 w-full rounded-3xl p-4'/>
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p className="text-[#FF3811] font-bold">Price: ${price}</p>
        <div className="card-actions justify-end text-[#FF3811]">
          <Link><FaArrowRight></FaArrowRight></Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
