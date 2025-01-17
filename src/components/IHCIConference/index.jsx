import { Link } from "react-router-dom";

const IHCIConference = () => {
  return (
    <div className="pb-[50px]">
      <div className="container max-w-full px-4 mx-auto">
        <div className="mt-[40px]">
          <p className="text-xl font-bold text-blue-500">
            <Link
              to="https://ihci.tuit.uz/fayllar/The_14th_International_Conference_on_Intelligent_Human_Big_brochure.pdf"
              className="underline text-blue-500 hover:text-blue-700 ml-2"
              target="_blank"
            >
              IHCI-2022 Detailed Program Brochure (Download File)
            </Link>
          </p>
          <hr className="border-t-4 border-[#5b5757] my-4" />
        </div>

        {/* Title va link */}
        <div className="text-center mb-6">
          <h2 className="text-3xl mb-3 font-bold text-red-600">
            IHCI-2022: Conference proceedings in Springer Link
          </h2>
          <Link
            href="https://link.springer.com/book/10.1007/978-3-031-27199-1"
            className="text-blue-500 text-[20px] hover:underline"
            target="_blank"
          >
            https://link.springer.com/book/10.1007/978-3-031-27199-1
          </Link>
        </div>

        <div className="flex justify-between gap-10">
          {/* Matn qismi */}
          <div className="w-1/2">
            <p className="text-justify text-[20px] text-gray-700 leading-relaxed">
              The IHCI is an annual international conference in the
              Human-Computer Interaction field, where we explore research
              challenges emerging in the complex interaction between machine
              intelligence and human intelligence. This is the thirteenth event
              which has a theme on “Interactive Technologies for post-Covid
              Era”, having special tracks related to the main theme of the
              conference.
            </p>
          </div>

          {/* Muhim Sanalar qismi */}
          <div className="w-1/2 bg-gray-100 border border-gray-300 rounded-lg p-4">
            <h3 className="text-lg font-bold text-center mb-4">
              IMPORTANT DATES
            </h3>
            <ul className="text-sm text-gray-700">
              <li className="flex justify-between mb-2">
                <span>FULL PAPER SUBMISSION DEADLINE</span>
                <span>JULY 21, 2022 AUGUST 08, 2022</span>
              </li>
              <li className="flex justify-between mb-2">
                <span>FORUM/POSTER/DEMO</span>
                <span>JULY 31, 2022</span>
              </li>
              <li className="flex justify-between mb-2">
                <span>ACCEPTANCE NOTIFICATION</span>
                <span>AUG 30, 2022 SEP 10, 2022</span>
              </li>
              <li className="flex justify-between mb-2">
                <span>CAMERA READY SUBMISSION</span>
                <span>SEP 10, 2022 SEP 20, 2022</span>
              </li>
              <li className="flex justify-between mb-2">
                <span>REGISTRATION OPEN</span>
                <span>SEP 20, 2022</span>
              </li>
              <li className="flex justify-between mb-2">
                <span>EARLY BIRD REGISTRATION DUE</span>
                <span>SEP 30, 2022</span>
              </li>
              <li className="flex justify-between">
                <span>CONFERENCE EVENT</span>
                <span>OCTOBER 20~22, 2022</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IHCIConference;
