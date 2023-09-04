import React from "react";

const RoleItem = ({ image, name, role }) => {
  return (
    <div className="flex flex-col items-center justify-center rounded-lg text-center p-2 md:hover:-translate-y-4 md:hover:shadow-lg transition duration-300 ease-in md:hover:bg-slate-100 ">
      <img
        className="w-[10rem] shadow-lg my-2 outline outline-slate-700 rounded-full outline-4 outline-offset-4"
        src={image}
        alt={name}
      ></img>

      <h3 className="text-[1.3rem] lg:text-[1.7rem] main-heading ">{name}</h3>
      <p className="font-bold  text-slate-500">{role}</p>
    </div>
  );
};

export default RoleItem;
