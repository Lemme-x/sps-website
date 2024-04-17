import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects, projectsF, projectsS, projectsSec } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}) => {
  return (
    <motion.div >
      {/* <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}> */}
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className={`bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full ${name.toLowerCase().includes("dr.") ? "g-border" : "r-border"}`}
      >
        <div className='relative w-[310px] h-[230px]'>
          <img
            src={image}
            alt='project_image'
            className='w-full h-full object-cover rounded-2xl'
          />

          <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
            >
              <img
                src={github}
                alt='source code'
                className='w-1/2 h-1/2 object-contain'
              />
            </div>
          </div>
        </div>

        <div className='mt-5'>
          <h3 className='text-white font-bold text-[24px]'>{name}</h3>
          <p className='mt-2 text-secondary text-[14px]'>{description}</p>
        </div>

        <div className='mt-4 flex flex-wrap gap-2'>
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] blue-text-gradient`}
            >
              {tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
 
      <motion.div className="center-text">
        {/* <motion.div variants={textVariant()}> */}
        <h2 className={`${styles.sectionHeadText}`}>Board </h2>
        <p className={`${styles.sectionSubText} `}>Year 2024</p>
      </motion.div>




      <div className='f-card mt-20 flex flex-wrap gap-7'>
        {projectsF.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
      <div className='f-card mt-7 flex flex-wrap gap-7'>
        {projectsS.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
      <div className='f-card mt-7 flex flex-wrap gap-7'>
        {projectsSec.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
      <div className='s-card mt-7 flex flex-wrap gap-7'>
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "");
