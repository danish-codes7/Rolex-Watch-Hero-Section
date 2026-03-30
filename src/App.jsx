import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef } from "react";

const App = () => {
  const watchRef = useRef(null);
  const navRef = useRef(null);
  const leftRef = useRef(null);
  const paraRef = useRef(null);
  const nameRef = useRef(null);
  const colorRef = useRef(null);
  const priceRef = useRef(null);
  const CTARef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline();
    tl.from(
      navRef.current,
      { y: -30, opacity: 0, duration: 1, ease: "power3.out" },
      0,
    );

    tl.from(watchRef.current, { y: -630, duration: 3, ease: "expo.out" }, 0.7);
    tl.from(
      leftRef.current,
      { y: -100, stagger: 1, opacity: 0, duration: 1.2, ease: "power3.out" },
      1,
    );
    tl.from(
      paraRef.current,
      { x: -100, opacity: 0, duration: 2, ease: "power2.inOut" },
      "<",
    );
    tl.from(
      nameRef.current,
      { opacity: 0, duration: 2, ease: "back.out(1.7)" },
      "<",
    );
    tl.from(
      colorRef.current,
      { opacity: 0, duration: 2, ease: "back.out(1.7)" },
      "<",
    );
    tl.from(
      priceRef.current,
      { opacity: 0, duration: 2, ease: "back.out(1.7)" },
      "<",
    );
    tl.from(
      CTARef.current,
      { x: 50, opacity: 0, duration: 2, ease: "elastic.out(1, 0.4)" },
      1.5,
    );
  }, []);

  return (
    <div className='h-screen w-screen bg-[url("https://i.pinimg.com/1200x/af/77/1c/af771cc65e15111095e50784786b21e5.jpg")] bg-cover'>
      {/* Navbar */}
      <div
        ref={navRef}
        className="py-5 px-10 flex items-center justify-between"
      >
        {/* LOGO */}
        <div className="flex flex-col items-center">
          <img className="h-16" src="/images/rolex-logo.png" alt="" />
          {/* FIX: h-15 is non-standard Tailwind → changed to h-16 */}
          <span className="font-[font1] text-white">ROLEX</span>
        </div>

        {/* MENU */}
        <div className="flex pr-10 flex-col items-center gap-4 font-bold font-[font1] text-lg text-white">
          <div className="flex items-center pl-20 gap-8">
            {/* FIX: pl-22 is non-standard Tailwind → changed to pl-20 */}
            <span className="relative cursor-pointer group">
              <h1>HOME</h1>
              <span className="absolute left-0 bottom-0 w-full h-0.5 bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
            </span>
            <span className="relative cursor-pointer group">
              <h1>COLLECTIONS</h1>
              <span className="absolute left-0 bottom-0 w-full h-0.5 bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
            </span>
          </div>
          <div className="flex gap-10 items-center">
            <span className="relative cursor-pointer group">
              <h1>ABOUT</h1>
              <span className="absolute left-0 bottom-0 w-full h-0.5 bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
            </span>
            <span className="relative cursor-pointer group">
              <h1>SERVICE</h1>
              <span className="absolute left-0 bottom-0 w-full h-0.5 bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
            </span>
            <i className="ri-search-line cursor-pointer bg-gradient-to-br from-[#3d2b1a] via-[#C9A96E] to-[#DFDBD0] bg-clip-text text-transparent text-2xl"></i>
            {/* FIX 1: class → className  |  FIX 2: added closing </i> tag */}
            <i className="ri-heart-3-line cursor-pointer bg-gradient-to-br from-[#3d2b1a] via-[#C9A96E] to-[#DFDBD0] bg-clip-text text-transparent text-2xl"></i>
          </div>
        </div>
      </div>

      {/* Main-content */}
      <div className="w-full flex items-center gap-4">
        {/* Left-content */}
        <div ref={leftRef} className="p-5 pl-10 mt-5">
          <h1 className="text-4xl text-white tracking-tighter whitespace-nowrap font-bold uppercase font-[font1]">
            limited collection
          </h1>
          <h1 className="text-8xl bg-gradient-to-br from-[#3d2b1a] via-[#C9A96E] to-[#DFDBD0] bg-clip-text text-transparent mt-5 whitespace-nowrap font-bold uppercase font-[font4]">
            classic <br /> watch
          </h1>
          <h1 className="font-thin text-white uppercase tracking-widest ml-2 mt-3 text-xl">
            starting in the swiss mountains
          </h1>
          <div className="w-50 rounded-full h-1 bg-gradient-to-br from-[#3d2b1a] via-[#C9A96E] to-[#DFDBD0] mt-8" />
          <p
            ref={paraRef}
            className="text-lg w-120 font-medium mt-2 pr-10 text-white font-[font1] uppercase"
            /* FIX: w-120 is non-standard Tailwind → changed to w-[30rem] (same visual width) */
          >
            A symphony of precision and elegance , this watch is a marvel of
            modern horology. Its heart beats with the Caliber 3235.
          </p>
        </div>

        {/* Center-Watch-Image */}
        <img
          ref={watchRef}
          className="h-110 ml-5"
          src="/images/watch.png"
          alt=""
        />

        {/* Right-content */}
        <div className="ml-24 mt-40">
          {/* FIX: ml-25 is non-standard Tailwind → changed to ml-24 */}

          {/* watch name */}
          <h1
            ref={nameRef}
            className="text-4xl text-[#997E48] uppercase whitespace-nowrap font-bold bg-gradient-to-br from-[#3d2b1a] via-[#C9A96E] to-[#DFDBD0] bg-clip-text text-transparent font-[font2]"
          >
            Rolex Submariner
          </h1>

          {/* colors */}
          <div ref={colorRef}>
            <p className="text-xl mt-5 text-white font-[font1]">colors</p>
            <div className="flex bg-white w-35 px-4 py-3 rounded-full items-center justify-center gap-5 mt-2">
              <div className="h-5 w-5 hover:scale-130 transition-all duration-300 cursor-pointer rounded-full bg-[#275e3b]" />
              <div className="h-5 w-5 hover:scale-130 transition-all duration-300 cursor-pointer rounded-full bg-black" />
              <div className="h-5 w-5 hover:scale-130 transition-all duration-300 cursor-pointer rounded-full bg-[#C9A96E]" />
            </div>
          </div>

          <div
            ref={priceRef}
            className="border-2 border-white flex items-center justify-center p-2 rounded-2xl mt-5 w-90"
          >
            {/* watch-price */}
            <h1 className="text-xl text-white font-[font1]">
              MRP : $ 9,450 - $ 16,800
            </h1>
          </div>

          {/* CTA BUTTONS */}
          <div ref={CTARef} className="mt-8 flex items-center gap-5">
            <button className="bg-white rounded-full hover:scale-110 transition-all duration-300 cursor-pointer px-6 py-3 font-bold">
              <span className="bg-gradient-to-br text-lg font-[font1] from-[#3d2b1a] via-[#C9A96E] to-[#DFDBD0] bg-clip-text text-transparent">
                Buy Now
              </span>
            </button>

            <button className="bg-white hover:scale-110 transition-all duration-300 cursor-pointer rounded-full px-6 py-3 font-bold">
              <span className="bg-gradient-to-br text-lg font-[font1] from-[#3d2b1a] via-[#C9A96E] to-[#DFDBD0] bg-clip-text text-transparent">
                discover
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
