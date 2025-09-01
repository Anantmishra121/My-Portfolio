import React from "react";
import styled from "styled-components";
import { data } from "../data/data";
import { RxExternalLink } from "react-icons/rx";
import { AiOutlineGithub } from "react-icons/ai";
import { Link } from "react-router-dom";

/**
 * WorkCard Component - Project showcase cards with hover effects
 * Displays project images with overlay containing description and links
 */
const WorkCard = () => {
  return (
    <>
      {data.map((data) => (
        <div
          data-aos="zoom-in"
          key={data.id}
          className="flex flex-col justify-center items-center gap-4 w-full"
        >
          {/* Project image container with hover popup */}
          <POPUP className="img-content relative w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-xs">
            <div className="aspect-square w-full transition duration-500 cursor-pointer shadow-xl rounded-md overflow-hidden bg-cover mx-auto">
              <img
                src={data.img}
                alt={data.title}
                className="object-cover w-full h-full transition duration-500 cursor-pointer"
              />
            </div>

            {/* Hover popup with project details */}
            <div className="popup h-[220px] w-full shadow-xl rounded-md overflow-hidden p-4 sm:h-[200px]">
              <p className="text-gray-900 text-base leading-[1.4] text-justify w-full">
                {data.desc}
              </p>
              <div className="flex items-center justify-center gap-4 flex-wrap">
                {/* Demo link */}
                <Link
                  to={data.link}
                  target="_blank"
                  className="mt-3 rounded-md shadow-md p-1 px-2 flex gap-2 items-center justify-center font-medium"
                >
                  <RxExternalLink className="text-black bg-white rounded-full border w-[32px] h-[32px] p-2" />
                  <p className="text-black text-sm">Demo</p>
                </Link>
                {/* GitHub repository link */}
                <Link
                  to={data.git}
                  target="_blank"
                  className="mt-3 rounded-md shadow-md p-1 px-2 flex gap-2 items-center justify-center font-medium"
                >
                  <AiOutlineGithub className="text-black bg-white rounded-full border w-[32px] h-[32px] p-2" />
                  <p className="text-black text-sm">Code</p>
                </Link>
              </div>
            </div>
          </POPUP>
          {/* Project title */}
          <p className="text-gray-800 text-lg font-medium text-center w-full break-words">
            {data.title}
          </p>
        </div>
      ))}
    </>
  );
};

export default WorkCard;

const POPUP = styled.div`
  position: relative;
  .popup {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    opacity: 0;
    margin: auto;
    transition: 0.5s ease;
    background: rgba(255, 255, 255, 0.5);
    backdrop-filter: blur(5px);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
  .icon {
    color: #fff !important;
  }
  &:hover .popup {
    opacity: 1;
    color: #fff;
  }
`;