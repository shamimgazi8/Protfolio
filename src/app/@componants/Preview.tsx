"use client";
import { useParams } from "next/navigation";
import { IoClose } from "react-icons/io5";
import { useState, useEffect } from "react";

const PreviewSlugPage = () => {
  const [selectedImage, setSelectedImage] = useState<ImageData | null>(null);
  const [zoom, setZoom] = useState(1); // Zoom level state

  interface ImageData {
    id: number;
    src: string;
    alt: string;
    width: number;
    height: number;
  }

  const images: ImageData[] = [
    {
      id: 1,
      src: "https://www.hubspot.com/hs-fs/hubfs/lemon%20(1).jpg?width=650&height=425&name=lemon%20(1).jpg",
      alt: "Placeholder Image 1",
      width: 600,
      height: 400,
    },
    {
      id: 2,
      src: "https://templatemag.com/wp-content/uploads/pro-business-website-template.jpg",
      alt: "Placeholder Image 2",
      width: 600,
      height: 400,
    },
    {
      id: 3,
      src: "https://images-wixmp-530a50041672c69d335ba4cf.wixmp.com/templates/image/e0414d55412070ec14fe66a17456bdc03af074b08431d6891d6a18582608fe841629730037754.jpg",
      alt: "Placeholder Image 3",
      width: 600,
      height: 400,
    },
    {
      id: 4,
      src: "https://img.freepik.com/free-psd/landing-page-template-creative-event_23-2150273639.jpg?size=626&ext=jpg&ga=GA1.1.1819120589.1727395200&semt=ais_hybrid",
      alt: "Placeholder Image 4",
      width: 600,
      height: 400,
    },
  ];

  const params = useParams();

  const handleWheelZoom = (event: WheelEvent) => {
    event.preventDefault();
    const zoomChange = event.deltaY > 0 ? -0.1 : 0.1;
    setZoom((prevZoom) => Math.max(1, prevZoom + zoomChange));
  };

  useEffect(() => {
    if (selectedImage) {
      window.addEventListener("wheel", handleWheelZoom);
    }

    return () => {
      window.removeEventListener("wheel", handleWheelZoom);
    };
  }, [selectedImage]);

  return (
    <div className="text-4xl text-white z-[100] p-[50px]">
      <h1>{`Gallery of ${params?.slug}`}</h1>
      <div className="mt-[20px]">
        {/* Gallery grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {images.map((image) => (
            <div
              key={image.id}
              className="cursor-pointer z-50"
              onClick={() => {
                setSelectedImage(image);
                setZoom(1); // Reset zoom when selecting a new image
              }}
            >
              <img
                src={image.src}
                alt={image.alt}
                width={image.width}
                height={image.height}
                className="object-cover rounded-lg shadow-md hover:shadow-lg transition-all"
              />
            </div>
          ))}
        </div>

        {/* Image Modal */}
        {selectedImage && (
          <div
            data-aos="zoom-in"
            data-aos-duration="400"
            className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm bg-opacity-75 z-50"
          >
            <div className="relative">
              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                width={selectedImage.width * zoom} // Apply zoom to width
                height={selectedImage.height * zoom} // Apply zoom to height
                className="max-h-[90vh] rounded-lg"
              />
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-2 right-2 bg-red-500 text-white p-1 rounded-full hover:bg-red-700 transition-all"
              >
                <IoClose />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PreviewSlugPage;
