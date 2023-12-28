import React from "react";

export default function Skill({title, id}) {
  return (
    <div
      className={`w-screen h-fit absolute top-[150vh] lg:top-[150vh] flex flex-col justify-center items-center my-72`}
      id={id}
    >
      <p className="text-center text-highlightDark pb-10 font-bold text-2xl lg:text-3xl">
        {title}
      </p>
      <div
        className={`h-fit w-[20rem] lg:w-[60rem] xl:w-[95rem] lg:py-10 py-5 outline-double outline-lite rounded-3xl`}
      ></div>
    </div>
  );
}
