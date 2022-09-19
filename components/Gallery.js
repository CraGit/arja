import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import Image from "next/image";
import Modal from "./Modal";

export default function Gallery({ galerija }) {
  const router = useRouter();
  const [clickedImage, setClickedImage] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(null);
  //change state of clickedImage on arrow key press

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowRight") {
        handleRotationRight();
      } else if (e.key === "ArrowLeft") {
        handleRotationLeft();
      } else if (e.key === "Escape") {
        setClickedImage(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [clickedImage]);

  function handleClick(item, index) {
    setClickedImage(item);
    setCurrentImageIndex(index);
  }

  function handleRotationRight() {
    if (currentImageIndex + 1 === galerija.length) {
      setCurrentImageIndex(0);
      setClickedImage(galerija[0]);
      return;
    }
    const newIndex = currentImageIndex + 1;

    setCurrentImageIndex(newIndex);
    setClickedImage(galerija[newIndex]);
  }

  function handleRotationLeft() {
    if (currentImageIndex === 0) {
      setCurrentImageIndex(galerija.length - 1);
      setClickedImage(galerija[galerija.length - 1]);
      return;
    }
    const newIndex = currentImageIndex - 1;
    setCurrentImageIndex(newIndex);
    setClickedImage(galerija[newIndex]);
  }

  return (
    <div className="py-6 sm:py-8 lg:py-12">
      <div className="max-w-screen-2xl px-4 md:px-8 mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 xl:gap-8 mb-4 md:mb-8">
          {galerija.map((item, index) => (
            <div
              onClick={() => handleClick(item, index)}
              className="group h-48 md:h-80 flex items-end bg-gray-100 overflow-hidden rounded-lg shadow-lg relative"
              key={index}
            >
              <Image
                src={`https:${item.fields.file.url}`}
                loading="lazy"
                layout="fill"
                alt={
                  item.fields.description
                    ? item.fields.description
                    : "Aria Interiers"
                }
                className="w-full h-full object-cover object-center absolute inset-0 group-hover:scale-110 transition duration-200 cursor-pointer"
              />
              <div className="bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50 absolute inset-0 pointer-events-none" />
              <span className="inline-block text-white text-sm md:text-lg relative ml-4 md:ml-5 mb-3">
                {item.fields.title}
              </span>
            </div>
          ))}
          {clickedImage && (
            <Modal
              clickedImage={clickedImage}
              handleRotationRight={handleRotationRight}
              handleRotationLeft={handleRotationLeft}
              setClickedImage={setClickedImage}
            />
          )}
        </div>
      </div>
    </div>
  );
}
