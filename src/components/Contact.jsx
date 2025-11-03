import React from "react";
import Bgimage from "../assets/contact.webp";

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* 🔹 Top Half Section with Image Background */}
      <div className="relative h-[50vh] md:h-[55vh] flex flex-col items-center justify-center text-center overflow-hidden">
        <img
          src={Bgimage}
          alt="background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10 px-4">
          <h5 className="text-[#FE1A88] text-xl font-semibold uppercase mb-3">
            Booking Online
          </h5>
          <h1 className="text-white text-xl md:text-5xl font-bold">
            Schedule An Appointment
          </h1>
          <p className="text-white max-w-xl py-4 mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
        </div>
      </div>

      {/* 🔹 Bottom Section with Form (overlapping image by 10%) */}
      <div className="relative bg-black flex items-start justify-center px-4 pb-20">
        {/* Dotted Background */}
        <div className="absolute inset-0 bg-[radial-gradient(circle,_rgba(255,255,255,0.1)_1px,_transparent_1px)] bg-[length:20px_20px] opacity-20"></div>

        {/* Form Container */}
        <div className="relative z-10 bg-white/20 border border-white/20 rounded-xl p-8 md:p-12 w-full max-w-2xl shadow-lg -mt-[12vh] md:-mt-[17vh]">
          <form className="flex flex-col gap-3">
            {/* 🔸 Name & Company in one row */}
            <div className="flex flex-row gap-3">
              <div className="flex-1">
                <label className="text-base text-left text-white mb-1 block">
                  Name
                </label>
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full px-3 py-2 rounded-md bg-white text-gray-700 outline-none"
                />
              </div>
              <div className="flex-1">
                <label className="text-base text-left text-white mb-1 block">
                  Company
                </label>
                <input
                  type="text"
                  placeholder="Company"
                  className="w-full px-3 py-2 rounded-md bg-white text-gray-700 outline-none"
                />
              </div>
            </div>

            {/* 🔸 Phone & Email in one row */}
            <div className="flex flex-row gap-3">
              <div className="flex-1">
                <label className="text-base text-left text-white mb-1 block">
                  Phone
                </label>
                <input
                  type="text"
                  placeholder="Phone"
                  className="w-full px-3 py-2 rounded-md bg-white text-gray-700 outline-none"
                />
              </div>
              <div className="flex-1">
                <label className="text-base text-left text-white mb-1 block">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full px-3 py-2 rounded-md bg-white text-gray-700 outline-none"
                />
              </div>
            </div>

{/* 🔸 Date & Package in one row for desktop */}
<div className="flex flex-col md:flex-row gap-3">
  <div className="flex-1">
    <label className="text-base text-left text-white mb-1 block">
      Date
    </label>
    <input
      type="date"
      className="w-full px-3 py-2 rounded-md bg-white text-gray-700 outline-none"
    />
  </div>

  <div className="flex-1">
    <label className="text-base text-left text-white mb-1 block">
       Service
    </label>
    <select className="w-full px-3 py-2 rounded-md bg-white text-gray-700 outline-none">
      <option>Entire Film Editing</option>
      <option>Standard</option>
      <option>Premium</option>
    </select>
  </div>
</div>


            {/* 🔸 Note */}
            <div>
              <label className="text-base text-left text-white mb-1 block">
                Note
              </label>
              <textarea
                rows="4"
                placeholder="Note"
                className="w-full px-3 py-2 rounded-md bg-white text-gray-700 outline-none"
              ></textarea>
            </div>

            {/* 🔸 Button */}
            <div>
              <button
                type="submit"
                className="w-full py-3 rounded-full bg-gradient-to-l from-fuchsia-700 to-pink-600 hover:from-fuchsia-600 hover:to-pink-600 text-white font-semibold shadow-md transition-all"
              >
                Book Now !
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
