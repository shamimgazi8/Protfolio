"use client";
import { useParams } from "next/navigation";
const PreviewSlug = () => {
  const params = useParams();

  return (
    <div className=" text-4xl text-white">
      <h1>{`Gallery of ${params?.slug}`}</h1>
    </div>
  );
};
export default PreviewSlug;
