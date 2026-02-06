import React from "react";


const TemplateCard = ({ title, price }) => {
  return (
    <div className="border rounded-lg p-5 shadow hover:shadow-lg transition">
      <h2 className="text-xl font-semibold">{title}</h2>
      <p className="text-gray-600 mt-2">{price}</p>
      <button className="mt-4 w-full bg-black text-white py-2 rounded">
        View Details
      </button>
    </div>
  );
};

export default TemplateCard;