const VissionMission = () => {
  return (
    <section className="py-20 bg-blue-900 text-white">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl text-center font-bold mb-10">
          Vision & Mission
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white text-black py-6 px-8 rounded-lg shadow-md flex flex-col justify-center">
            <p className="text-2xl font-bold text-[#FDB91D]">Vision</p>
            <p className="text-lg">
              To become First Class in Underwater Inspection Services in
              South-East Asia
            </p>
          </div>

          <div className="bg-white text-black py-6 px-8 rounded-lg shadow-md flex flex-col justify-center">
            <p className="text-2xl font-bold text-[#FDB91D]">Mission</p>
            <p className="text-lg">
              Providing the best underwater inspection & salvage services with
              advanced technology and experienced professionals.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VissionMission;
