import HeaderPage from "../components/Header";

const AboutUs = () => {
  return (
    <section className="w-full py-20 flex flex-col items-center relative">
      <div className="container">
        <HeaderPage />
        <div className="w-full flex flex-col md:flex-row md:justify-between gap-4 items-stretch relative">
          {/* Right Section (Image) */}
          <div className="w-full md:w-5/12 flex justify-center items-center relative">
            <img
              src="http://png.pngtree.com/png-clipart/20230914/original/pngtree-yacht-clipart-attractive-sailing-yacht-portrait-vector-illustration-cartoon-png-image_11091766.png"
              alt="About Us"
              className="absolute top-0 w-full h-full object-cover bg-red-300"
            />
          </div>

          {/* Left Section (Title & Description) */}
          <div className="w-full md:w-1/2 flex flex-col">
            {/* Section Title */}
            <div className="w-full text-white flex flex-col justify-center">
              <h2 className="text-xl md:text-5xl font-bold mb-4">ABOUT OUR COMPANY</h2>
            </div>
            {/* Section Description */}
            <div className="w-full text-white flex flex-col justify-center">
              <p className="text-base md:text-base text-justify leading-relaxed">
                PT. Haekal Survindo Service, expert in inspection & maintenance services to the offshore energy sector globally focusing in South-East Asia.
                We actively promote a culture of Health, Safety, Environmentally friendly, Quality, and Integrity throughout our organization. Through practical and cost-effective solutions, reliability, and teamwork, we will build mutually beneficial long-term relationships with our clients and employees.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
