import React from "react";

const LastDesign = () => {
  const avatars = Array.from({ length: 20 }).map((_, index) => (
    <img
      key={index}
      className="avatar w-16 h-16 rounded-full flex-shrink-0 border-2 border-blue-500 shadow-lg"
      src={`https://i.pravatar.cc/150?img=${index + 1}`}
      alt={`Avatar ${index + 1}`}
    />
  ));

  const images = Array.from({ length: 10 }).map((_, index) => (
    <img
      key={index}
      className="image w-full h-[400px] object-cover rounded-lg shadow-lg"
      src={`https://picsum.photos/seed/${index + 1}/800/600`}
      alt={`Random ${index + 1}`}
    />
  ));

  return (
    <div className="flex flex-col items-center p-4 min-h-screen">
      <div className="relative w-full max-w-[800px]">
        <div className="sticky top-0 z-10 bg-white py-4 border-b border-gray-300 overflow-x-auto scrollbar-hidden">
          <div className="flex space-x-4">{avatars}</div>
        </div>

        <div className="images-section flex flex-col overflow-y-auto space-y-4 mt-4">
          {images}
        </div>
      </div>
    </div>
  );
};

export default LastDesign;
