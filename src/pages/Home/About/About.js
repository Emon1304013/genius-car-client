import React from "react";
import person from '../../../assets/images/about_us/person.jpg'
import parts from '../../../assets/images/about_us/parts.jpg'

const About = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 my-32 gap-10">
      <figure className="relative h-full">
        <img src={person} alt="person" className="rounded-lg w-3/4 h-[470px]"/>
        <img src={parts} alt="parts" className="absolute w-3/5 border-8 border-white rounded-xl left-48 top-[225px] h-[330px]" />
      </figure>
      <div className="w-3/4">
        <h2 className="card-title text-orange-700 font-bold mb-8">About Us</h2>
        <h3 className="text-4xl font-bold mb-8">We are qualified <br /> & of experience <br /> in this field</h3>
        <p className="mb-8">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
        <p className="mb-8">The majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>

        <button className="px-7 py-4 bg-[#FF3811] text-white rounded-lg">Get More Info</button>
      </div>
    </div>
  );
};

export default About;
