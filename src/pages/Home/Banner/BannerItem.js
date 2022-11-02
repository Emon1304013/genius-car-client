import React from "react";
import './BannerItem.css'

const BannerItem = ({ slide }) => {
  const { image, id, prev, next } = slide;
  return (
    <div id={`slide${id}`} className="carousel-item relative w-full">
      <div className="carousel-img">
        <img alt="" src={image} className="w-full rounded-lg" />
      </div>
      <div className="absolute transform -translate-y-1/2 left-5 top-1/2 text-white w-1/2 rounded-2xl px-10">
        <h1 className="text-6xl mb-4">
          Affordable <br />
          Price For Car <br />
          Servicing
        </h1>
        <p className="w-4/5 text-xl mb-2">
          There are many variations of passages of available, but the majority
          have suffered alteration in some form
        </p>

        <button className="btn btn-secondary mr-4">Discover More</button>
        <button className="btn btn-outline btn-primary">Latest Project</button>
      </div>

      <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
        <a href={`#slide${prev}`} className="btn btn-circle mr-4">
          ❮
        </a>
        <a href={`#slide${next}`} className="btn btn-circle">
          ❯
        </a>
      </div>
    </div>
  );
};

export default BannerItem;
