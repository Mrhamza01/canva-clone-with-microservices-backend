"use client";

import { Crown, Loader2 } from "lucide-react";
import { Button } from "../ui/button";
import { useState } from "react";

function Banner() {
  const [loading, setLoading] = useState(false);

  const handleCreateNewDesign = async () => {
    if (loading) return;
    try {
      setLoading(true);

      // Add your create logic
    } catch (e) {
      console.log(e);
      setLoading(false);
    }
  };

  return (
    <div
      className=" mx-auto max-w-6xl 
        rounded-2xl 
        bg-linear-to-r from-[#00c4cc] via-[#8b3dff] to-[#5533ff]
        text-white 
        p-5 sm:p-7 md:p-10  md:-ml-44
        shadow-xl 
        relative overflow-hidden lg:ml-0 lg:max-w-8x
      "
    >
      {/* Soft Effects */}
      <div className="absolute inset-0 opacity-20 bg-[url('/noise.png')] pointer-events-none" />
      <div className="absolute top-0 -left-10 w-40 sm:w-56 h-40 sm:h-56 bg-white/20 blur-3xl rounded-full" />
      <div className="absolute bottom-0 -right-10 w-56 sm:w-72 h-56 sm:h-72 bg-purple-500/30 blur-3xl rounded-full" />

      {/* CONTENT */}
      <div className="relative flex flex-col items-center text-center">
        {/* CROWN + TITLE */}
        <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
          <div className="p-3 sm:p-4 rounded-full bg-white/20 backdrop-blur-xl shadow-md">
            <Crown className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 text-yellow-300" />
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold leading-tight drop-shadow-lg">
            Transform Your Ideas Into Stunning Designs
          </h1>
        </div>

        {/* SUBTITLE */}
        <p className="text-sm sm:text-base md:text-lg lg:text-xl font-medium opacity-90 max-w-2xl mb-5 sm:mb-7">
          Create scroll-stopping, high-impact thumbnails that captivate viewers
          and boost your engagement instantly.
        </p>

        {/* CTA BUTTON */}
        <Button
          onClick={handleCreateNewDesign}
          disabled={loading}
          className="
            bg-white 
            hover:bg-white/90 
            text-[#8b3dff] 
            font-semibold 
            rounded-xl
            px-5 py-2 sm:px-7 sm:py-3 
            text-sm sm:text-base
            shadow-md
            flex items-center gap-2
          "
        >
          {loading && <Loader2 className="w-5 h-5 animate-spin" />}
          Start Designing Now
        </Button>
      </div>
    </div>
  );
}

export default Banner;
