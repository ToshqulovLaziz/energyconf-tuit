const ContactUs = () => {
    return (
      <div className="bg-white pt-12 pb-6">
        <div className="container mx-auto px-4">
          <h2 className="text-xl font-bold text-[#222222]">Contact Us</h2>
          <hr className="border-t-4 border-[#5b5757] my-4" />
          <div className="flex justify-between gap-12 max-lg:flex-wrap  text-base">
            {/* Local Contact Person */}
            <div className="w-full sm:w-1/3">
              <h3 className="font-bold text-[18px] mb-2">Local Contact Person:</h3>
              <p>Dr. Sarvar Makhmudjanov</p>
              <p>Phone: +99 (899) 950-29-58</p>
              <p>Office: +99 (871) 238-65-19</p>
              <p>Telegram: @Sarvartuit</p>
              <p>Email: s.makhmudjanov@gmail.com</p>
            </div>
            {/* Local venue contact details */}
            <div className="w-full sm:w-1/3">
              <h3 className="font-bold text-[18px] mb-2">Local venue contact details:</h3>
              <p>Room #508, Block B, Department of Artificial Intelligence,</p>
              <p>
                Tashkent University of Information Technologies named after
                Muhammad al-Khwarizmi (TUIT)
              </p>
              <p>
                Venue Address: Main Hall, 108A, str. A.Temur, dist. Yunusabad,
                city Tashkent, Uzbekistan, 100084
              </p>
            </div>
            {/* Organizing chair of IHCI society */}
            <div className="w-full sm:w-1/3">
              <h3 className="font-bold text-[18px] mb-2">
                Organizing chair of IHCI society:
              </h3>
              <p>Dr. Dhananjay Singh</p>
              <p>Phone: +82-10-5844-9415</p>
              <p>Office: +82-31-330-4731</p>
              <p>Email: dsingh@hufs.ac.kr</p>
            </div>
          </div>
          <div className="mt-8 text-gray-600 text-[14px]">
            <p className="space-x-4 text-center sm:text-left">
              <a href="#" className="hover:underline pr-4">
                Home
              </a>
              |
              <a href="#" className="hover:underline pr-4">
                Sitemap
              </a>
              |
              <a href="#" className="hover:underline pr-4">
                Scopus Preview
              </a>
              |
              <a href="#" className="hover:underline pr-4">
                ENERGYCONF 2025
              </a>
            </p>
          </div>
        </div>
      </div>
    );
  };
  
  export default ContactUs;
  