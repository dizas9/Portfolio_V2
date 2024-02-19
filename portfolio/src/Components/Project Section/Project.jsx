import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useScroll } from "../../hooks/useScroll";
import { ProjectData } from "./ProjectData";
import "../../App.css";
import { useModal } from "../../hooks/useModal";

export default function Project({ title, id }) {
  const { scrollY } = useScroll(0);
  const { modalOpen, modalClose, isModalOpen } = useModal(false);
  const [selectedProject, SetSelectedProject] = useState(null);

  function handleShowbutton(project) {
    SetSelectedProject(project);
    modalOpen();
  }

  return (
    <div
      className={`w-screen h-screen absolute top-[220vh] xl:top-[200vh] lg:top-[255vh] flex flex-col justify-center items-center my-72`}
      id={id}
    >
      {scrollY >= 1810 && (
        <>
          <motion.p
            className="text-center text-highlightDark pb-10 font-bold text-2xl lg:text-3xl "
            initial={{ y: 500 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {title}
          </motion.p>
          <div className="flex flex-col lg:flex-row lg:flex-wrap h-fit lg:w-[70%] justify-between gap-10">
            {ProjectData.map((project, projectIndex) => (
              <motion.div
                className="h-[15vh] lg:h-[30vh] w-[85vw] lg:w-[30vw] flex flex-col justify-center items-center relative"
                key={projectIndex}
                initial={{ x: projectIndex % 2 === 0 ? 100 : -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: projectIndex * 0.5 }}
              >
                <div className="w-full h-full hover:hue-rotate-180 shadow-white brightness-90">
                  <img
                    src={project.thumbnail}
                    alt="Project IMg"
                    className={`object-fill transition hover:object-cover border-2 border-[white] p-3 w-full h-full rounded-md`}
                  />
                </div>
                <p
                  className={`absolute bottom-3 left-5 ${
                    projectIndex === 2 || projectIndex === 3 ? "text-[blue]" : "text-lite"
                  } font-semibold`}
                >
                  {project.title}
                </p>
                <button
                  className="absolute top-[-2px] right-[-2px] text-lite  text-sm lg:text-xl"
                  onClick={() => handleShowbutton(project)}
                >
                  <img
                    src="image/expand.gif"
                    alt=""
                    className="w-5 lg:w-6 rounded"
                  />
                </button>
              </motion.div>
            ))}
          </div>

          {isModalOpen && selectedProject && (
            <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-sectionDark bg-opacity-90">
              <div className="bg-lite bg-scroll p-8 rounded shadow-md h-[400px] w-[90vw] overflow-y-auto relative text-highlightLite">
                <div className="text-2xl font-bold pb-5">
                  {selectedProject.title}
                </div>
                <p className="pb-5">{selectedProject.description}</p>
                <button
                  onClick={modalClose}
                  className="fixed top-[20%] lg:top-[20%] right-[10%] lg:right-[5%] text-lite text-sm lg:text-xl"
                >
                  <img src="image/expand.gif" alt="" className="w-6 rounded" />
                </button>
                <div className="flex flex-col pb-5">
                  <p className="text-xl font-medium pb-3">Technology :</p>
                  <ul className="flex gap-5 flex-wrap">
                    {selectedProject.technology.map((tech, techIndex) => (
                      <li className="list-disc" key={techIndex}>
                        {tech.name}
                      </li>
                    ))}
                  </ul>
                </div>
                <details className="pb-5">
                  <summary className="text-xl font-medium pb-3">
                    My Learnings
                  </summary>
                  <ul className="">
                    {selectedProject.details.map((item, itemIndex) => (
                      <li className="list-disc pb-2" key={itemIndex}>
                        {item.detail}
                      </li>
                    ))}
                  </ul>
                </details>
                <div className="flex gap-5 ">
                  <div className="flex gap-2 flex-wrap">
                    {selectedProject.links.map((link, linkIndex) => (
                      <>
                        <a
                          href={link.link}
                          className="decoration-sectionDark underline text-lg font-semibold"
                          key={linkIndex}
                        >
                          {link.name}
                        </a>
                        <img src="image/goto.png" alt="" className="w-7" />
                      </>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
}
