
const Home = () => {
  return (
    <div className="w-full min-h-screen bg-blue-900 flex flex-col items-center justify-center p-8 relative">
      {/* Logo */}
      <div className="absolute top-5 left-5">
        <img
          src="https://png.pngtree.com/png-vector/20230814/ourmid/pngtree-cartoon-warship-sticker-design-on-white-background-with-sea-and-clouds-vector-png-image_6897911.png"
          alt="Haekal Logo"
          className="w-16"
        />
      </div>

      {/* Main Content */}
      <div className="flex flex-col md:flex-row items-center justify-center w-full max-w-5xl gap-8">
        {/* Left Section - Text */}
        <div className="text-center md:text-left md:w-1/2 border border-white p-8 bg-white shadow-lg rounded-lg">
          <h1 className="text-4xl font-bold text-gray-800">PT. HAEKAL SURVINDO SERVICE</h1>
          <p className="text-gray-800 text-xl mt-2 underline">UNDERWATER INSPECTION SERVICES</p>
        </div>

        {/* Right Section - Image */}
        <div className="md:w-1/2 flex justify-center">
          <img
            className="w-full max-w-xs md:max-w-md rounded-lg"
            src="https://static8.depositphotos.com/1176423/955/v/450/depositphotos_9555059-stock-illustration-high-detailed-ship-silhouette.jpg"
            alt="Ship Illustration"
          />
        </div>
      </div>

      {/* Bottom Image */}
      <div className="absolute bottom-0 left-0 w-40 md:w-60 lg:w-80 p-1">
        <img
          className="w-20 shadow-lg"
          src="https://static8.depositphotos.com/1176423/955/v/450/depositphotos_9555059-stock-illustration-high-detailed-ship-silhouette.jpg"
          alt="Bottom Image"
        />
      </div>
    </div>
  );
};

export default Home;
