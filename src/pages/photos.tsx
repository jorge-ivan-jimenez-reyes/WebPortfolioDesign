import React from "react";
import Image from "next/image";
import { useTheme } from "../context/ThemeContext";
import Footer from "../components/Footer";

const PhotosPage = () => {
  const { isDarkMode } = useTheme();

  // This is a placeholder array for photos. In a real application, you would fetch these from an API or database.
  const photos = [
    { id: 1, src: "/path/to/photo1.jpg", alt: "Description of photo 1" },
    { id: 2, src: "/path/to/photo2.jpg", alt: "Description of photo 2" },
    { id: 3, src: "/path/to/photo3.jpg", alt: "Description of photo 3" },
    { id: 4, src: "/path/to/photo4.jpg", alt: "Description of photo 4" },
    { id: 5, src: "/path/to/photo5.jpg", alt: "Description of photo 5" },
    { id: 6, src: "/path/to/photo6.jpg", alt: "Description of photo 6" },
  ];

  return (
    <div
      className={`min-h-screen ${isDarkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-black"}`}
    >
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8">My Photos</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {photos.map((photo) => (
            <div key={photo.id} className="relative aspect-w-1 aspect-h-1">
              <Image
                src={photo.src}
                alt={photo.alt}
                layout="fill"
                objectFit="cover"
                className="rounded-lg shadow-md"
              />
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PhotosPage;
