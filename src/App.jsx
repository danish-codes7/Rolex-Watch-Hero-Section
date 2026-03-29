import React from "react";

const App = () => {
  return (
    <div className='h-screen w-screen bg-[url("https://i.pinimg.com/1200x/af/77/1c/af771cc65e15111095e50784786b21e5.jpg")] bg-cover'>
      {/* Navbar */}
      <div className="py-5 px-10 flex items-center justify-between">
        {/* LOGO */}
        <div className="flex flex-col items-center">
          <img className="h-15" src="/images/rolex-logo.png" alt="" />
          <span className="font-[font1] text-white">ROLEX</span>
        </div>

        {/* MENU */}

        <div className="flex pr-10 flex-col  items-center gap-4 font-bold font-[font1] text-lg text-white">
          <div className="flex items-center pl-22 gap-8">
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
            <i class="ri-heart-3-line cursor-pointer bg-gradient-to-br from-[#3d2b1a] via-[#C9A96E] to-[#DFDBD0] bg-clip-text text-transparent  text-2xl"></i>
          </div>
        </div>
      </div>

      {/* Main-content */}
      <div className="w-full flex items-center gap-4">
        {/* Left-content */}
        <div className="p-5 pl-10 mt-5">
          <h1 className="text-4xl text-white  tracking-tighter whitespace-nowrap font-bold uppercase font-[font1]">
            limited collection
          </h1>
          <h1 className="text-8xl bg-gradient-to-br from-[#3d2b1a] via-[#C9A96E] to-[#DFDBD0] bg-clip-text text-transparent mt-5  whitespace-nowrap font-bold uppercase font-[font2]">
            classic <br /> watch
          </h1>
          <h1 className="font-thin text-white uppercase tracking-widest ml-2 mt-3 text-xl">
            starting in the swiss mountains
          </h1>
          <div className="w-50 rounded-full h-1 bg-gradient-to-br from-[#3d2b1a] via-[#C9A96E] to-[#DFDBD0] mt-8" />
          <p className="text-lg w-120 font-medium mt-2 pr-10 text-white font-[font1] uppercase">
            A symphony of precision and elegance , this watch is a marvel of
            modern horology. Its heart beats with the Caliber 3235.
          </p>
        </div>

        {/* Center-Watch-Image */}
        <img className="h-110 ml-5" src="/images/watch.png" alt="" />

        {/* Right-content */}
        <div className="ml-25 mt-40">
          {/* watch name */}
          <h1 className="text-4xl text-[#997E48] uppercase whitespace-nowrap font-bold bg-gradient-to-br from-[#3d2b1a] via-[#C9A96E] to-[#DFDBD0] bg-clip-text text-transparent font-[font2]">
            Rolex Submariner
          </h1>

          {/* colors */}
          <p className="text-xl mt-5 text-white font-[font1]">colors</p>
          <div className="flex bg-white w-35 px-4 py-3 rounded-full items-center justify-center gap-5 mt-2">
            <div className="h-5 w-5 hover:scale-130 transition-all duration-300 cursor-pointer rounded-full bg-[#275e3b]" />
            <div className="h-5 w-5 hover:scale-130 transition-all duration-300 cursor-pointer rounded-full bg-black" />
            <div className="h-5 w-5 hover:scale-130 transition-all duration-300 cursor-pointer rounded-full bg-[#C9A96E]" />
          </div>

          <div className="border-2 border-white flex items-center justify-center p-2 rounded-2xl mt-5 w-90">
            {/* watch-price */}

            <h1 className="text-xl text-white  font-[font1]">
              MRP : $ 9,450 - $ 16,800
            </h1>
          </div>

          {/* CTA BUTTONS */}

          <div className="mt-8 flex items-center gap-5">
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
