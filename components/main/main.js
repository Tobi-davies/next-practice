const Main = () => {
  return (
    // <div className="w-full lg:w-3/4 lg:ml-auto flex align-center justify-center pt-8 bg-darkNavyBlue">
    <div className="w-full lg:w-3/4 lg:ml-auto py-8 bg-darkNavyBlue sm:flex sm:justify-center">
      <div
        // style={{ border: "1px solid red" }}
        className="max-w-full  sm:max-w-2xl px-6 sm:px-6"
        // className="max-w-full"
      >
        <div className="pb-4">vhlgutcvh</div>
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 gap-5 mb-16 px-6 sm:px-0">
          <div className="bg-blue text-white py-3 px-4">
            <p>Tomorrow</p>
            <p>Image</p>
            <div className="flex justify-between">
              <span>16c</span>
              <span className="text-grey">11c</span>
            </div>
          </div>
          <div className="bg-blue text-white py-3 px-4">
            <p>Tomorrow</p>
            <p>Image</p>
            <div className="flex justify-between">
              <span>16c</span>
              <span className="text-grey">11c</span>
            </div>
          </div>
          <div className="bg-blue text-white py-3 px-4">
            <p>Tomorrow</p>
            <p>Image</p>
            <div className="flex justify-between">
              <span>16c</span>
              <span className="text-grey">11c</span>
            </div>
          </div>
          <div className="bg-blue text-white py-3 px-4">
            <p>Tomorrow</p>
            <p>Image</p>
            <div className="flex justify-between">
              <span>16c</span>
              <span className="text-grey">11c</span>
            </div>
          </div>
          <div className="bg-blue text-white py-3 px-4">
            <p>Tomorrow</p>
            <p>Image</p>
            <div className="flex justify-between">
              <span>16c</span>
              <span className="text-grey">11c</span>
            </div>
          </div>
        </div>

        <h3 className="text-white font-bold text-xl mb-7">
          Today’s Hightlights{" "}
        </h3>
        <div className="grid sm:grid-cols-2 gap-7">
          <div className="bg-blue text-white py-6 px-3 text-center">
            <p>Wind status</p>
            <p className="text-3xl font-medium">
              <span className="text-6xl font-bold">7</span>mph
            </p>
            <p className="text-xs">WSW</p>
          </div>
          <div className="bg-blue text-white py-6 px-3 text-center">
            <p>Humidity</p>
            <p className="text-3xl font-normal">
              <span className="text-6xl font-bold">84 </span>%
            </p>
            <p className="text-xs">WSW</p>
          </div>

          <div className="bg-blue text-white py-6 px-3 text-center">
            <p>Visibility</p>
            <p className="text-3xl font-medium">
              <span className="text-6xl font-bold">6,4 </span>miles
            </p>
          </div>
          <div className="bg-blue text-white py-6 px-3 text-center">
            <p>Air Pressure</p>
            <p className="text-3xl font-medium">
              <span className="text-6xl font-bold">998 </span>mb
            </p>
          </div>
        </div>

        {/* last grid */}
        {/* <div className="grid grid-cols-2 gap-7">
          <div className="bg-blue text-white py-6 px-3 text-center">
            <p>Visibility</p>
            <p className="text-3xl font-medium">
              <span className="text-6xl font-bold">6,4 </span>miles
            </p>
          </div>
          <div className="bg-blue text-white py-6 px-3 text-center">
            <p>Air Pressure</p>
            <p className="text-3xl font-medium">
              <span className="text-6xl font-bold">998 </span>mb
            </p>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Main;
