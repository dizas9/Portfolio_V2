import React, { useState } from "react";
import { TECollapse } from "tw-elements-react";
import { accordionMenuData } from "./Infodata";

export default function AccordionCustomIcon() {
  const [activeElement, setActiveElement] = useState("");

  const handleClick = (value) => {
    if (value === activeElement) {
      setActiveElement("");
    } else {
      setActiveElement(value);
    }
  };
  return (
    <>
      {accordionMenuData.map((item, itemIndex) => (
        <div id={item.id} className="rounded-lg  mb-2 mt-2">
          <div className="border-b rounded-lg border-b-lite mx-5">
            <h2 className="mb-0">
              <button
                className={`${
                  activeElement === item.id &&
                  `text-highlightDark [box-shadow:inset_0_-1px_0_rgba(229,231,235)]`
                } group relative flex w-full items-center border-0 bg-sectionDark rounded-lg px-5 py-4 text-left text-base lg:text-2xl text-lite transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none`}
                type="button"
                onClick={() => handleClick(item.id)}
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                {item.header}
                <span
                  className={`${
                    activeElement === item.id
                      ? `rotate-[-180deg] -mr-1`
                      : `rotate-0 fill-[#212529]  dark:fill-white`
                  } ml-auto h-5 w-5 shrink-0 fill-[#336dec] transition-transform duration-200 ease-in-out motion-reduce:transition-none dark:fill-blue-300`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="h-6 w-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                </span>
              </button>
            </h2>
            {item.data.map((subItem, subItemIndex) => (
              <TECollapse
                show={activeElement === item.id}
                className="!mt-0 !rounded-b-none !shadow-none"
              >
                <div
                  className="px-5 py-4 text-justify text-lite font-thin lg:text-2xl"
                  key={subItemIndex}
                >
                  <strong className="text-highlightDark">
                    {subItem.title}
                  </strong>{" "}
                  {subItem.info}
                </div>
              </TECollapse>
            ))}
          </div>
        </div>
      ))}
    </>
  );
}
