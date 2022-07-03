const Sidebar = () => {
  return (
    <div className=" w-full lg:w-1/4 bg-blue p-8 flex flex-col justify-between lg:fixed top-0 left-0 bottom-0">
      <div>
        <button className="bg-darkGrey text-white py-2 px-3">
          Search for places
        </button>
      </div>
      <div className="flex flex-col text-center">
        <div className="mb-14">
          <span className="text-white text-9xl">15</span>
          <span className="text-grey text-4xl">c</span>
        </div>
        <span className="text-grey text-3xl mb-10 font-medium">shower</span>
        <div className="flex gap-x-3.5 items-center justify-center mb-4">
          <span className="text-softBlue">Today</span>
          <span className="text-softBlue">.</span>
          <span className="text-softBlue">Fri, 5 Jun</span>
        </div>
        <span className="text-softBlue">Helsinki</span>
      </div>
    </div>
  );
};

export default Sidebar;
