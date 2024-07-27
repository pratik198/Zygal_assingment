import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const slides = [
  {
    image:
      "https://cdn.pixabay.com/photo/2019/07/26/10/04/building-4364408_1280.jpg",
    title: "Slide 1",
    quote: "The best way to predict the future is to invent it.",
  },
  {
    image:
      "https://cdn.pixabay.com/photo/2023/03/18/05/14/saint-marks-basilica-7859843_1280.jpg",
    title: "Slide 2",
    quote: "Life is 10% what happens to us and 90% how we react to it.",
  },
  {
    image:
      "https://cdn.pixabay.com/photo/2018/07/18/20/25/channel-3547224_960_720.jpg",
    title: "Slide 3",
    quote:
      "Success is not the key to happiness. Happiness is the key to success.",
  },
];

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate();

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const handleAuthButtonClick = () => {
    navigate("/login");
  };

  return (
    <div className="flex items-center justify-center min-h-screen p-4 ">
      <div className="relative p-4 rounded-lg shadow-lg w-full max-w-[90%] md:max-w-[80%] lg:max-w-[70%] xl:max-w-[60%]">
        <div className="carousel w-full overflow-hidden rounded-lg">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {slides.map((slide, index) => (
              <div
                key={index}
                className="min-w-full flex-shrink-0 flex flex-col items-center"
                style={{ height: "auto" }} // Height adjusted to auto for better responsiveness
              >
                <div
                  className="relative w-full"
                  style={{ paddingTop: "56.25%" }}
                >
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className="absolute top-0 left-0 w-full h-full object-cover rounded-t-lg"
                  />
                </div>
                <p className="text-center mt-4 text-lg italic px-4">
                  {slide.quote}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="dots flex justify-center mt-4">
          {slides.map((_, index) => (
            <span
              key={index}
              onClick={() => goToSlide(index)}
              className={`mx-2 cursor-pointer h-3 w-3 rounded-full transition-all duration-300 ease-in-out ${
                currentSlide === index ? "bg-blue-500" : "bg-blue-300"
              }`}
            />
          ))}
        </div>

        <button
          onClick={handleAuthButtonClick}
          className="mt-4 p-4 bg-blue-500 text-white rounded-lg shadow-md w-full text-center text-lg transition-transform duration-300 transform hover:scale-105"
        >
          Explore
        </button>
      </div>
    </div>
  );
};

export default Carousel;
