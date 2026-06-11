import React from 'react';
import factoryVideo from "../../assets/about/animated vedio.mp4"


// Mocking data structure based on your code for context
const stats = [
  { label: 'Years of Excellence', value: '39+ Years' },
  { label: 'Premium Collections', value: '500+' },
  { label: 'Projects Delivered', value: '2000+' },
  { label: 'Happy Clients', value: '10,000+' },
];

export default function AboutSection() {
  return (
    <section className="bg-[#F8F8F8] py-26 px-6 md:px-12 lg:px-20 select-none">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start">
        
        {/* Left Container */}
        <div className="lg:col-span-6 flex flex-col">
          <span className="text-[#B78A79] font-['AlbertSans'] text-xs font-medium uppercase tracking-[0.2em] block mb-5">
            ABOUT Triveni
          </span>
          
          <h2 className="text-3xl md:text-4xl lg:text-[30px] font-['AlbertSans'] font-extralight text-[#1A1A1A] leading-[1.2] tracking-tight mb-6 max-w-xl">
            Defined by Scale, Consistency, and Control
          </h2>
          
          <p className="text-[#555555] font-['AlbertSans'] text-[13px] leading-[1.6] mb-7 max-w-lg">
            Every figure reflects a manufacturing process built on strict quality standards and
            dependable supply built over decades of experience. Supplying across India and to
            select export markets.
          </p>

          <div className="rounded-2xl overflow-hidden aspect-[2/1] w-full max-w-xl bg-gray-200">
            <video
              src={factoryVideo}
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Right Container */}
        <div className="lg:col-span-6 w-full lg:mt-6">
          <div className="flex flex-col">
            {stats.map((stat, idx) => (
              <div
                key={idx}
                className="border-b border-[#DCDCDC] py-12 flex justify-between items-center "
              >
                <span className="font-['AlbertSans'] text-[16px] md:text-[17px] text-[#333333] font-normal">
                  {stat.label}
                </span>
                <span className="font-['AlbertSans'] text-[20px] md:text-[22px] text-[#C58345] font-normal tracking-wide">
                  {stat.value}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}