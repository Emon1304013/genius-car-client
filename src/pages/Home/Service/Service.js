import React, { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";

const Service = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("services.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div>
      <div className="space-y-4">
        <h4 className="text-center font-bold text-xl text-[#FF3811]">
          Service
        </h4>
        <h2 className="text-center font-bold text-3xl">Our Service Area</h2>
        <p className="w-1/2 mx-auto text-center">
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.{" "}
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 my-10 gap-y-4 mx-4">
        {services.map((service) => (
          <ServiceCard key={service._id} service={service}></ServiceCard>
        ))}
      </div>
    </div>
  );
};

export default Service;
