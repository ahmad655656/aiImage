"use client";
import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import axios from "axios";
import { toast } from "sonner";
import { Loader } from "lucide-react";
import Image from "next/image";
const Hero = () => {
  const [promt, setPromt] = useState("");
  const [image, setImage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleImageGeneration = async () => {
    setLoading(true);
    const options = {
      method: "POST",
      url: "https://ai-text-to-image-generator-flux-free-api.p.rapidapi.com/aaaaaaaaaaaaaaaaaiimagegenerator/quick.php",
      headers: {
        "x-rapidapi-key": "2807226023msh3061067cb283352p162606jsn975d88c6b4cb",
        "x-rapidapi-host":
          "ai-text-to-image-generator-flux-free-api.p.rapidapi.com",
        "Content-Type": "application/json",
      },
      data: {
        prompt: promt,
        style_id: 2,
        size: "1-1",
      },
    };
    try {
      const response = await axios.request(options);
      setImage(response?.data.final_result[0].origin);
      toast.success("Image generated successfully");
    } catch (error: unknown) {
      if (axios.isAxiosError(error) && error.response) {
        toast.error(error.response.data.message);
      } else {
        toast.error("An error occurred");
      }
    } finally {
      setLoading(false);
    }
  };
  console.log(promt);
  const handleDownloadImage = () => {
    const link = document.createElement("a");
    link.target = "_blank";
    link.href = image;
    link.download = "generated-img.jpg";
    link.click();
  };
  return (
    <div id="home" className="w-[95%] min-h-screen relative mx-auto mt-[20vh] ">
      {/* content */}
      <div className="relative z-10 text-white flex flex-col items-center justify-center">
        <h1 data-aos="fade-up"  className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-center bg-gradient-to-r from-orange-300 to-cyan-500 text-transparent bg-clip-text ">
          Create Beautiful Image with <br /> Artificial Intelligence
        </h1>
        <p data-aos="fade-up" data-aos-delay="100" className="mt-3 text-sm md:text-base font-semibold text-center text-gray-300 ">
          Get started with our AI-powered image generator tools
        </p>
        {/* Prompt input box */}
        <div className="h-11 md:h-16 w-[95%] sm:w-[90%] md:w-[80%] lg:w-[70%] xl:w-[60%] bg-white rounded-lg mt-12 px-2 md:px-6 flex items-center justify-between ">
          <input
            value={promt}
            onChange={(e) => setPromt(e.target.value)}
            type="text"
            placeholder="Generate Your Dream Image"
            className="h-full rounded-lg outline-none w-full text-black block flex-1 placeholder:text-xs sm:placeholder:text-base "
          />
          <Button
            onClick={handleImageGeneration}
            variant={"default"}
            size={"lg"}
          >
            Generate
          </Button>
        </div>
        {/* Tags */}
        <div className="flex items-baseline mt-6 space-x-4 flex-wrap space-y-3">
          <p className="text-center">Popular Tag : </p>
          <Button variant={"secondary"}>Creative</Button>
          <Button variant={"secondary"}>Hyperreality</Button>
          <Button variant={"secondary"}>Steampunk</Button>
          <Button variant={"secondary"}>Animation</Button>
          <Button variant={"secondary"}>Business</Button>
        </div>
        {/* show loading and image */}
        {loading && (
          <div>
            <Loader className="animate-spin mt-6" />
          </div>
        )}
        {image && image !== "" && (
          <div className="mt-8 flex flex-col items-center">
            <img
              src={image}
              alt="ai image"
              className="rounded-lg shadow-lg max-w-full h-[500px]"
              loading="lazy"
            />
            <Button
              onClick={handleDownloadImage}
              className="mt-4 mb-4 bg-orange-500 hover:bg-orange-400"
            >
              Download
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Hero;
