import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { RiSendPlaneFill } from "react-icons/ri";

/**
 * Contact Component - Contact form section for user inquiries
 * Provides a form for visitors to send messages via email
 */
const Contact = ({ darkMode }) => {
  return (
    <div id="contact" className={`container m-auto mt-16 ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}` }>
      {/* Section header */}
      <div
        data-aos="fade-up"
        className="relative mb-5">
        <h3 className=" text-3xl font-black text-gray-400 sm:text-2xl">
          Contact
        </h3>
        <span className="h-[1.1px] right-0 absolute w-[92%] bg-gray-300 block"></span>
      </div>

      {/* Contact form container */}
      <div className="card-wrapper w-[90%] sm:w-[100%] mx-auto mt-5 flex items-center justify-center sm:flex-col">
        <div className="left w-[70%] flex-1 flex items-center justify-center sm:flex-col sm:w-full">
          <div className="flex-3 w-1/2 gap-3 flex items-end justify-end  flex-col sm:w-3/4">
            <div
              data-aos="zoom-in"
            >
              <h1 className="text-5xl font-bold sm:text-3xl">Any Query!</h1>
              <h3 className="text-xl sm:text-lg">
                Drop your Message Here
              </h3>
            </div>
          </div>
          <div className=" flex p-5 items-center justify-center ">

          </div>
        </div>
        <div className="right flex-1">
          {/* Contact form */}
          <form
            data-aos="zoom-in"
            className="flex justify-center items-center flex-col gap-5 w-[70%] md:w-[100%] sm:w-[95%] mx-auto"
            action="mailto:xyz@gmail.com"
          >
            <input
              className="px-3 shadow-[0_0_16px_0px_rgba(0,0,0,0.1)] p-2 rounded-lg w-full"
              type="email"
              placeholder="e.g. example@email.com"
              name=""
            />
            <input
              className="px-3 shadow-[0_0_16px_0px_rgba(0,0,0,0.1)] p-2 rounded-lg w-full"
              type="text"
              placeholder=" Your Name"
              name=""
            />
            <textarea
              className="px-3 shadow-[0_0_16px_0px_rgba(0,0,0,0.1)] p-2 rounded-lg w-full"
              rows="4"
              cols="50"
              placeholder="Write your message"
              name=""
              id=""
            />
            <button
              className="bg-yellow-500  text-white font-semibold  p-2 rounded-lg flex items-center justify-center space-x-1"
              type="submit"
            >
              <span>Send</span>
              <RiSendPlaneFill/>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
