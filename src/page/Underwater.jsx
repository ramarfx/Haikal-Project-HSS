const Underwater = () => {
    return (
      <div className="relative bg-blue-900 text-white p-6 md:p-12 flex flex-col md:flex-row items-center justify-between">
        {/* Decorative Dots and Enlarged Arc */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 grid grid-cols-6 gap-2">
          {[...Array(12)].map((_, i) => (
            <div key={i} className="w-2 h-2 bg-yellow-400 rounded-full"></div>
          ))}
        </div>
        <div className="absolute -top-12 -left-10 w-48 h-48">
          <div className="w-full h-full border-4 border-yellow-400 rounded-full border-t-0 border-l-0 absolute"></div>
          <div className="w-40 h-40 border-4 border-yellow-400 rounded-full border-t-0 border-l-0 absolute top-4 left-4"></div>
        </div>
  
        <div className="relative w-full md:w-1/2">
          <img
            src="image/hss1.png" // Periksa path ini
            alt="Underwater Inspection"
            className="w-full h-auto rounded-lg shadow-lg relative z-10"
          />
        </div>
  
        <div className="w-full md:w-1/2 p-6 text-center  md:text-left flex flex-col items-center md:items-start relative">
          <img
            src="/public/image/logo.jpg"
            alt="Haekal Logo"
            className="w-28 h-28 object-contain absolute -top-8 right-4 hidden md:block"
          />
          {/* <h2 className="text-4xl font-bold mb-4">OUR SERVICE</h2> */}
          <div className="pb-2 border-b inline-block md:block">
            <h1 className="text-xl md:text-4xl font-bold">OUR SERVICE</h1>
            <p className="text-sm">Underwater Inspection and Salvage</p>
          </div>
          <div className="w-full mt-5 mx-auto">
            <h1 className="text-lg mb-4 text-black rounded-xl
            bg-yellow-500 px-3 py-2 font-sans font-semibold max-w-full md:max-w-72">
            UNDERWATER INSPECTION
            </h1>
            <p className="text-sm text-gray-800 md:text-base rounded-xl -mt-4
            bg-white opacity-75 px-3 py-2 max-w-full md:max-w-80">
              Underwater inspection and salvage: The process of recovering ships
              and their cargo after being sunk or other maritime victims.
            </p>
          </div>
          {/* section gambar kapal */}
          <div className="flex items-center space-x-4 flex-row-reverse">
            <img
              src="/public/image/icon1.png"
              alt="Icon"
              className="w-60 h-60 object-contain"
            />
          </div>
        </div>
      </div>
    );
  };
  
  export default Underwater;
  