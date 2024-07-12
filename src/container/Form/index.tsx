import React from "react";
import ContainerWrapper from "@/components/ContainerWrapper";
import { ButtonContainer } from "@/components/Nabvar/styled";
import ButtonWrapper from "@/components/UI/ButtonWrapper";

const Form = () => {
  return (
    <div className="mt-[180px] lg:mt-[240px]">
      <ContainerWrapper>
        <div className="mt-10">
          <div className="text-center font-bold">
            <h5 className="text-[#F2C274]">Contact Us</h5>
          </div>
          <div className="mt-[5px] lg:mt-[20px] text-center text-4xl font-bold ">
            <h3>Make an Appointment</h3>
          </div>
          <form>
            <div className="p-0 pt-4 lg:p-8">
              <div className="flex flex-col lg:flex-row gap-4">
                <input
                  type="text"
                  name="name"
                  className="mt-1 block w-full lg:w-1/2 rounded-md border border-slate-300 bg-white px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
                  placeholder="Full Name *"
                />
                <input
                  type="email"
                  name="email"
                  className="mt-1 block w-full lg:w-1/2 rounded-md border border-slate-300 bg-white px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
                  placeholder="Email *"
                />
              </div>

              <div className="pt-4 pb-4 flex flex-col lg:flex-row gap-4">
                <input
                  type="text"
                  name="name"
                  className="mt-1 block w-full lg:w-1/2 rounded-md border border-slate-300 bg-white px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
                  placeholder="Full Name *"
                />
                <input
                  type="email"
                  name="email"
                  className="mt-1 block w-full lg:w-1/2 rounded-md border border-slate-300 bg-white px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
                  placeholder="Email *"
                />
              </div>

              <div>
                <textarea
                  name="message"
                  id="message"
                  cols={30}
                  rows={10}
                  className="mb-10 h-40 w-full resize-none rounded-md border border-slate-300 p-5 font-semibold text-gray-500 placeholder-slate-400 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
                  placeholder="Message"
                ></textarea>
              </div>
              <div className="flex justify-center items-cente">
                <ButtonWrapper
                  variant={{
                    BorderRadius: 25,
                  }}
                >
                  Book Appoinment
                </ButtonWrapper>
              </div>
            </div>
          </form>
        </div>
      </ContainerWrapper>
    </div>
  );
};

export default Form;
