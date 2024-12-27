import { useState } from "react";

export default function Home() {
  const [toggle, setToggle] = useState("left");

  const handleToggle = (position) => {
    setToggle(position);
  };

  return (
    <main className="min-h-screen bg-[url('/home/background.png')] bg-cover bg-center  text-white overflow-hidden">
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-20">
          <div className="text-2xl font-bold">THINKARI</div>

          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-white/80 hover:text-white">
              Products
            </a>
            <a href="#" className="text-white/80 hover:text-white">
              Store
            </a>
            <a href="#" className="text-white/80 hover:text-white">
              Support
            </a>
          </div>
        </div>

        <div className="form-box relative w-[240px] bg-gray-700 px-5 py-2 rounded-full">
          <div className="button-box relative bg-gray-700 rounded-full flex items-center p-1">
            <div
              id="btn"
              className={`absolute top-0 bottom-0 w-1/2 rounded-full transition-all duration-300 ${toggle === "left" ? "left-0 bg-blue-500" : "left-1/2 bg-green-500"}`}
            ></div>
            <button
              type="button"
              className="w-1/2 text-center relative z-10 focus:outline-none "
              onClick={() => handleToggle("left")}
            >
              AiLens
            </button>
            <button
              type="button"
              className="w-1/2 text-center relative z-10 focus:outline-none"
              onClick={() => handleToggle("right")}
            >
              Buy Now
            </button>
          </div>
        </div>
      </nav>
    </main>
  );
}
