import { GlassEffect } from "./styled";
import ButtonWrapper from "@/components/UI/ButtonWrapper";

const Form = () => {
  return (
    <div className="mt-[180px] lg:mt-[240px] relative flex flex-col items-center justify-center ">
      <GlassEffect className="w-[100%] z-30 lg:w-[80%] absolute p-4">
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
                  BorderRadius: 50,
                }}
              >
                Book Appointment
              </ButtonWrapper>
            </div>
          </div>
        </form>
      </GlassEffect>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="grid gap-4">
          <div className="image-overlay w-full h-auto overflow-hidden relative">
            <img
              className="h-full w-full object-cover rounded-lg"
              src="https://www.donorkite.com/wp-content/uploads/2024/02/Group-744.png"
              alt=""
            />
          </div>
          <div className="image-overlay w-full h-auto overflow-hidden relative">
            <img
              className="h-full w-full object-cover rounded-lg"
              src="https://www.churchtrac.com/articles/images/blog_the_state_of_church_giving_feature.jpg"
              alt=""
            />
          </div>
          <div className="image-overlay w-full h-auto overflow-hidden relative">
            <img
              className="h-full w-full object-cover rounded-lg"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFFiJkgpIC82hTBuLZhLJGZ6gAje6d4qabdurjAegQo50CfKwWPivOb5ZsUWdHSwq42qk&usqp=CAU"
              alt=""
            />
          </div>
        </div>
        <div className="grid gap-4">
          <div className="image-overlay w-full h-auto overflow-hidden relative">
            <img
              className="h-full w-full object-cover rounded-lg"
              src="https://www.shutterstock.com/image-photo/charity-donation-box-collection-give-600nw-2148892269.jpg"
              alt=""
            />
          </div>
          <div className="image-overlay w-full h-auto overflow-hidden relative">
            <img
              className="h-full w-full object-cover rounded-lg"
              src="https://www.shutterstock.com/image-photo/charity-donation-box-collection-give-600nw-2148892269.jpg"
              alt=""
            />
          </div>
          <div className="image-overlay w-full h-auto overflow-hidden relative">
            <img
              className="h-full w-full object-cover rounded-lg"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTL4x-mAKH7DN3m51BgDK6F2PhMTiHPnyhmg&s"
              alt=""
            />
          </div>
        </div>
        <div className="grid gap-4">
          <div className="image-overlay w-full h-auto overflow-hidden relative">
            <img
              className="h-full w-full object-cover rounded-lg"
              src="https://christian.net/wp-content/uploads/2024/02/what-covenant-is-made-in-baptism-1709180397.jpg"
              alt=""
            />
          </div>
          <div className="image-overlay w-full h-auto overflow-hidden relative">
            <img
              className="h-full w-full object-cover rounded-lg"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_V-z5IVuXEbAazp-dk6tP_8owmAsfpK2TzA&s"
              alt=""
            />
          </div>
          <div className="image-overlay w-full h-auto overflow-hidden relative">
            <img
              className="h-full w-full object-cover rounded-lg"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_V-z5IVuXEbAazp-dk6tP_8owmAsfpK2TzA&s"
              alt=""
            />
          </div>
        </div>
        <div className="grid gap-4">
          <div className="image-overlay w-full h-auto overflow-hidden relative">
            <img
              className="h-full w-full object-cover rounded-lg"
              src="https://www.churchtrac.com/articles/images/blog_the_state_of_church_giving_feature.jpg"
              alt=""
            />
          </div>
          <div className="image-overlay w-full h-auto overflow-hidden relative">
            <img
              className="h-full w-full object-cover rounded-lg"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKCzKRU0U7-rlqwc_EK7VLRfUWgudAmlUoug&s"
              alt=""
            />
          </div>
          <div className="image-overlay w-full h-auto overflow-hidden relative">
            <img
              className="h-full w-full object-cover rounded-lg"
              src="https://images.squarespace-cdn.com/content/v1/5ca79f2016b64015238f489f/fb1900ef-e3c9-4142-9201-c3135ba0c6c7/Screen+Shot+2023-08-30+at+3.41.50+PM.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
