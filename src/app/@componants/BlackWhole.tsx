const BlackWhole = () => {
  return (
    <div className=" felx flex-col h-full w-full">
      <video
        autoPlay
        loop
        muted
        className=" rotate-180 absolute lg:top-[-520px] top-[-350px] md:top-[-510px] left-0 z-[1] w-full h-full object-cover sm:mt-0 mt-[-100px]"
      >
        <source src="/blackhole.webm" type="video/webm" />
      </video>
    </div>
  );
};
export default BlackWhole;
