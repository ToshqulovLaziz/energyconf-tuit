import { Link } from "react-router-dom";

const places = [
  {
    name: "Registan Square",
    location: "Samarkand, Uzbekistan",
    image:
      "https://storage.googleapis.com/mari-a5cc7.appspot.com/photos/regular/75593ee9-7ca8-4f6e-8676-41b6a38960a4.jpg",
  },
  {
    name: "Ichan-Qal'a",
    location: "Khiva, Uzbekistan",
    image: "https://ychef.files.bbci.co.uk/1280x720/p0h8l984.jpg",
  },
  {
    name: "Amir Temur Mausoleum",
    location: "Samarkand, Uzbekistan",
    image:
      "https://www.advantour.com/img/uzbekistan/samarkand/gur-emir-mausoleum3.jpg",
  },
];

const TourPage = () => {
  return (
    <div>
      <div className="max-w-[1536px] w-full px-4 lg:px-10 mx-auto">
        <div className="flex justify-between bg-universal w-full min-h-[200px] px-4 py-3">
          <div className="flex justify-center items-center flex-col w-full text-center">
            <h2 className="text-[26px] font-bold">TOUR</h2>
            <div>
              <Link className="text-[#334cf0] font-bold" to="/">
                HOME
              </Link>
              <span className="font-bold"> / TOUR</span>
            </div>
          </div>
        </div>
        <div className="mt-10 bg-gray-100 py-10 px-4">
          <h1 className="text-3xl font-bold text-center text-blue-600 mb-8">
            The most popular travel destinations in Uzbekistan
          </h1>
          <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {places.map((place, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <img
                  src={place.image}
                  alt={place.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-4">
                  <h2 className="text-xl font-bold text-gray-800">
                    {place.name}
                  </h2>
                  <p className="text-gray-600 mt-1">📍 {place.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TourPage;
