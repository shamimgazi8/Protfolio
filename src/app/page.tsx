import Image from "next/image";
import BlackWhole from "./@componants/BlackWhole";
import HomeContent from "./@componants/HomeContent";
import Hireme from "./@componants/Hireme";

export default function Home() {
  return (
    <div className="h-full w-full">
      <BlackWhole />
      <HomeContent />
      <Hireme />
    </div>
  );
}
