import React from "react";
export default function Features() {
  return (
    <section id="features">
      <div className="relative container max-w-full flex flex-col md:flex-row text-gray-900 mx-auto mt-32 mb-24 px-6 md:px-32">
        <img src="/images/desktop/image-interactive.jpg" alt="img" />

        <div className=" bg-white text-center md:text-left  pr-0 md:pl-20 md:py-20 md:absolute right-12 top-48">
          <h2 className="max-w-lg mt-10 mb-6 text-4xl md:text-5xl md:mt-0 font-sans uppercase font-thin text-gray-900">
            The leader in interactive vr
          </h2>
          <p className="max-w-md text-[14px] leading-[28px] font-bold founded">
            Founded in 2011, Loopstudios has been producing world-class virtual
            reality projects for some of the best companies around the globe.
            Our award-winning creations have transformed businesses through
            digital experiences that bind to their brand.
          </p>
        </div>
      </div>
    </section>
  );
}
