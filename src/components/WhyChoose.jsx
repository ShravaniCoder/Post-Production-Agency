import React from "react";
import ChooseV from "../assets/video/chhose.mp4";

const WhyChooseUs = () => {
  const features = [
    {
      title: "Industry Expertise",
      description:
        "A leading Marathi post production house and film restoration company in India.",
    },
    {
      title: "Creative Storytelling",
      description:
        "Our editors at LorinzaZenix enhance every frame with innovation and imagination.",
    },
    {
      title: "Cutting-Edge Technology",
      description:
        "We use ultra digital studio tools for premium-quality results.",
    },
    {
      title: "Client-Focused Approach",
      description:
        " Every LorinzaZenix project is tailored—from OTT/web series post production to TV commercials.",
    },
  ];

  return (
    <>
    <section className="bg-black text-white  px-4 md:px-20">

      
      <div className=" mx-auto text-center">
   <div className="text-center mb-6">
        <p className="text-[#FE1A88] text-xl font-semibold font-carme-regular uppercase mb-3">
        Why Choose Us
        </p>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-tasa-orbiter font-bold leading-snug">
          We make your business <br /> look good.
        </h2>
      </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-[#252831] rounded-lg p-6 text-center shadow-md flex flex-col justify-center min-h-[220px] hover:bg-[#222633] transition-all duration-300"
            >
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-lg text-gray-300 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
          
    </section>
    <div className="w-full py-8 flex items-center justify-center">
              <div className="w-full h-[300px] sm:h-[350px] md:h-[420px] lg:h-[500px] overflow-hidden border border-gray-700">
                <video
                  src={ChooseV}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            </>
  );
};

export default WhyChooseUs;
