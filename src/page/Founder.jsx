const Founder = () => {
    return (
        <section className="py-20">
            
            <div className="container mx-auto px-4">
                <div className="flex flex-wrap justify-center md:justify-between items-center w-full">
                    <div className="w-full md:w-1/2 text-center md:text-left mb-6 md:mb-0">
                        <div className="pb-2 border-b inline-block md:block">
                            <h1 className="text-3xl md:text-5xl font-bold">Moh. Fadilah</h1>
                            <p className="text-sm">CEO/Founder</p>
                        </div>

                        <p className="py-2 text-base">PT. Haekal Survindo Service is one of the subsidiary companies of
                            Haekal Group. We have experience in this field for more than 10
                            years. Our service in PT. Haekal Survindo is underwater inspection.
                            This company profile was created as a basis consideration,
                            offers, cooperation, and product information from our company.
                            Finally, we thank you for the opportunity to receive and read this
                            company profile and we hope for your cooperation.
                        </p>

                        <p className="font-bold">CEO PT. Haekal Inti Pratama</p>
                    </div>

                    <div className="w-full md:w-auto flex justify-center">
                        <img src="/image/founder.png" className="max-w-full h-[250px] md:h-[300px] w-auto" alt="founder image" />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Founder;