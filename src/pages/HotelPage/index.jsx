import { Link } from "react-router-dom";
const hotels = [
  {
    name: "International hotel Tashkent",
    link: "https://ihthotel.uz/ru/rooms/",
    location: "Tashkent, Uzbekistan",
    image:
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/528347050.jpg?k=ed8e3c9202a25b7ba4fd638ef53d514f1e97155cbcf2978e87d30e19933e064a&o=&hp=1",
  },
  {
    name: "Radisson Blue Hotel",
    link: "https://www.radissonhotels.com/ru-ru/hotels/radisson-tashkent",
    location: "Tashkent, Uzbekistan",
    image:
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/01/c2/14/85/radisson-blu-hotel-tashkent.jpg?w=700&h=-1&s=1",
  },
  {
    name: "Friday hotel",
    link: "https://www.booking.com/hotel/uz/friday.ru.html?aid=356938&label=metagha-link-MRUZ-hotel-5108294_dev-desktop_los-1_bw-0_dow-Sunday_defdate-1_room-0_gstadt-2_rateid-0_aud-6994569933_gacid-6641364928_mcid-10_ppa-0_clrid-0_ad-1_gstkid-0_checkin-20220501__lp-1028523_r-5804412761605801058&sid=715033ff5bb43c8a00359f79652cc6cc&all_sr_blocks=510829403_203832541_2_2_0;checkin=2022-05-01;checkout=2022-05-02;dest_id=-2579372;dest_type=city;dist=0;group_adults=2;group_children=0;hapos=1;highlighted_blocks=510829403_203832541_2_2_0;hpos=1;matching_block_id=510829403_203832541_2_2_0;no_rooms=1;req_adults=2;req_children=0;room1=A%2CA;sb_price_type=total;sr_order=popularity;sr_pri_blocks=510829403_203832541_2_2_0__3500;srepoch=1651421407;srpvid=785371ae31a202cd;type=total;ucfs=1&#hotelTmpl",
    location: "Tashkent, Uzbekistan",
    image:
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/200020233.jpg?k=6b5115901278fbda04368b68a99e16ab46318a9668bedcf52e3348b30bee7d56&o=&hp=1",
  },
];

const Hotelapge = () => {
  return (
    <div>
      <div className="max-w-[1536px] w-full px-4 lg:px-10 mx-auto">
        <div className="flex justify-between bg-universal w-full min-h-[200px] px-4 py-3">
          <div className="flex justify-center items-center flex-col w-full text-center">
            <h2 className="text-[26px] font-bold">HOTEL</h2>
            <div>
              <Link className="text-[#334cf0] font-bold" to="/">
                HOME
              </Link>
              <span className="font-bold"> / HOTEL</span>
            </div>
          </div>
        </div>
        <div className="mt-10 bg-gray-100 py-10 px-4">
          <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {hotels.map((hotel, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <img
                  src={hotel.image}
                  alt={hotel.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-4">
                  <Link
                    to={hotel.link}
                    className="text-xl font-bold text-gray-800 hover:underline"
                  >
                    {hotel.name}
                  </Link>
                  <p className="text-gray-600 mt-1">📍 {hotel.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hotelapge;
