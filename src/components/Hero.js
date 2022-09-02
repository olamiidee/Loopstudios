import React, { useRef } from "react";

export default function Hero() {
  const menuRef = useRef();
  const btnRef = useRef();

  function navToggle() {
    btnRef.current.classList.toggle("open");
    menuRef.current.classList.toggle("flex");
    menuRef.current.classList.toggle("hidden");
  }

  return (
    <section id="hero">
      <div className="container max-w-full mx-auto md:px-32 md:py-16 px-6 py-12 text-white">
        <nav className="flex items-center justify-between text-bold">
          <img
            className="md:w-[15%] w-[40%]"
            src="/images/logo.svg"
            alt="img"
          />
          <div className="hidden md:flex md:space-x-8 font-alata">
            <div className="group">
              <a href="#">About</a>
              <div className="group-hover:border-b-2 mx-2 group-hover:border-blue-0"></div>
            </div>
            <div className="group">
              <a href="#">Careers</a>
              <div className="group-hover:border-b-2 mx-2 group-hover:border-blue-50"></div>
            </div>
            <div className="group">
              <a href="#">Events</a>
              <div className="group-hover:border-b-2 mx-2 group-hover:border-blue-50"></div>
            </div>
            <div className="group">
              <a href="#">Products</a>
              <div className="group-hover:border-b-2 mx-2 group-hover:border-blue-50"></div>
            </div>
            <div className="group">
              <a href="#">Support</a>
              <div className="group-hover:border-b-2 mx-2 group-hover:border-blue-50"></div>
            </div>
          </div>
          {/* Hamburger button */}
          <div className="md:hidden">
            <button
              className="z-40 md:hidden focus:outline-none block hamburger"
              id="menu-btn"
              type="button"
              onClick={navToggle}
              ref={btnRef}
            >
              <span className="hamburger-top"></span>
              <span className="hamburger-middle"></span>
              <span className="hamburger-bottom"></span>
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        <div
          className="absolute top-0 left-0 bottom-0 flex-col self-end space-y-6 min-h-screen w-full py-1 pt-40 pl-12 text-4xl text-white bg-black uppercase hidden z-30"
          id="menu"
          ref={menuRef}
        >
          <a className="hover:text-pink-500" href="#">
            About
          </a>
          <a className="hover:text-pink-500" href="#">
            Careers
          </a>
          <a className="hover:text-pink-500" href="#">
            Events
          </a>
          <a className="hover:text-pink-500" href="#">
            Products
          </a>
          <a className="hover:text-pink-500" href="#">
            Support
          </a>
        </div>

        <div className="max-w-lg border-2 my-32 border-white text-4xl md:text-6xl p-8 md:p-10 font-sans font-light md:m-24 md:mx-0 uppercase">
          <p>immersive experinece that deliver</p>
        </div>
      </div>
    </section>
  );
}
