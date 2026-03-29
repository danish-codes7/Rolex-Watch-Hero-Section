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
            <h1>HOME</h1>
            <h1 className="opacity-70">COLLECTIONS</h1>
          </div>
          <div className="flex gap-10 items-center">
            <h1 className="opacity-70">ABOUT</h1>
            <h1 className="opacity-70">SERVICE</h1>
            <i className="ri-search-line bg-gradient-to-br from-[#3d2b1a] via-[#C9A96E] to-[#DFDBD0] bg-clip-text text-transparent text-2xl"></i>
            <i class="ri-heart-3-line bg-gradient-to-br from-[#3d2b1a] via-[#C9A96E] to-[#DFDBD0] bg-clip-text text-transparent  text-2xl"></i>
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
      </div>
    </div>
  );
};

export default App;
