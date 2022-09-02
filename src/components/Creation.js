import React from "react";

export default function Creation() {
  return (
    <section id="Creation">
      <div className="container max-w-full mx-auto px-6 md:px-32">
        <div className="md:flex items-center justify-between">
          <h2 className="max-w-lg mt-10 mb-6 text-4xl md:text-5xl md:mt-0 font-sans uppercase font-thin text-gray-900 text-center">
            our creations
          </h2>
          <button className="md:block hidden uppercase border-2 border-gray-500 px-12 py-2 tracking-widest hover:bg-black hover:text-white hover:border-0">
            see all
          </button>
        </div>

        <div className="mt-16">
          <div className="item-container">
            <div className="group item">
              <img
                src="/images/desktop/image-deep-earth.jpg"
                alt=""
                class="hidden w-full duration-200 md:block group-hover:scale-110"
              />

              <img
                src="images/mobile/image-deep-earth.jpg"
                alt=""
                class="w-full md:hidden"
              />

              <div class="item-gradient"></div>

              <h5>Deep Earth</h5>
            </div>

            <div className="group item">
              <img
                src="/images/desktop/image-night-arcade.jpg"
                alt=""
                class="hidden w-full duration-200 md:block group-hover:scale-110"
              />

              <img
                src="images/mobile/image-night-arcade.jpg"
                alt=""
                class="w-full md:hidden"
              />

              <div class="item-gradient"></div>

              <h5>night arcade</h5>
            </div>
            <div className="group item">
              <img
                src="/images/desktop/image-soccer-team.jpg"
                alt=""
                class="hidden w-full duration-200 md:block group-hover:scale-110"
              />

              <img
                src="images/mobile/image-soccer-team.jpg"
                alt=""
                class="w-full md:hidden"
              />

              <div class="item-gradient"></div>

              <h5>soccer team vr</h5>
            </div>
            <div className="group item">
              <img
                src="/images/desktop/image-grid.jpg"
                alt=""
                class="hidden w-full duration-200 md:block group-hover:scale-110"
              />

              <img
                src="images/mobile/image-grid.jpg"
                alt=""
                class="w-full md:hidden"
              />

              <div class="item-gradient"></div>

              <h5>the grid</h5>
            </div>
          </div>

          <div className="item-container">
            <div className="group item">
              <img
                src="/images/desktop/image-from-above.jpg"
                alt=""
                class="hidden w-full duration-200 md:block group-hover:scale-110"
              />

              <img
                src="images/mobile/image-from-above.jpg"
                alt=""
                class="w-full md:hidden"
              />

              <div class="item-gradient"></div>

              <h5>from up above vr</h5>
            </div>

            <div className="group item">
              <img
                src="/images/desktop/image-pocket-borealis.jpg"
                alt=""
                class="hidden w-full duration-200 md:block group-hover:scale-110"
              />

              <img
                src="images/mobile/image-pocket-borealis.jpg"
                alt=""
                class="w-full md:hidden"
              />

              <div class="item-gradient"></div>

              <h5>pocket borealis</h5>
            </div>
            <div className="group item">
              <img
                src="/images/desktop/image-curiosity.jpg"
                alt=""
                class="hidden w-full duration-200 md:block group-hover:scale-110"
              />

              <img
                src="images/mobile/image-curiosity.jpg"
                alt=""
                class="w-full md:hidden"
              />

              <div class="item-gradient"></div>

              <h5>the curiosity</h5>
            </div>
            <div className="group item">
              <img
                src="images/desktop/image-fisheye.jpg"
                alt=""
                class="hidden w-full duration-200 md:block group-hover:scale-110"
              />

              <img
                src="images/mobile/image-fisheye.jpg"
                alt=""
                class="w-full md:hidden"
              />

              <div class="item-gradient"></div>

              <h5>make it fisheye</h5>
            </div>
          </div>
        </div>
        <div class="flex justify-center mt-10 md:hidden">
          <button class="md:hidden uppercase border-2 border-gray-500 tracking-widest hover:bg-black hover:text-white hover:border-0 px-12 py-2">
            See All
          </button>
        </div>
      </div>
    </section>
  );
}
