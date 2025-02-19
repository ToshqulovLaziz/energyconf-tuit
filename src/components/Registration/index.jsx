const RegistrationTable = () => {
    return (
      <div className="max-w-[1536px] w-full px-4 lg:px-10 mx-auto">
        <h2 className="text-2xl font-bold text-center mb-6">REGISTRATION</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-300 text-center text-gray-700">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 px-4 py-2 text-xs sm:text-sm">
                  REGISTRATION TYPE AND FEES
                </th>
                <th className="border border-gray-300 px-4 py-2 text-xs sm:text-sm" colSpan={2}>
                  ONSITE PRESENTATION
                </th>
                <th className="border border-gray-300 px-4 py-2 text-xs sm:text-sm" colSpan={2}>
                  ONLINE PRESENTATION
                </th>
                <th className="border border-gray-300 px-4 py-2 text-xs sm:text-sm">
                  ADDITIONAL PAGES FEE
                </th>
              </tr>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 px-4 py-2 text-xs sm:text-sm"></th>
                <th className="border border-gray-300 px-4 py-2 text-xs sm:text-sm">EARLY BIRD</th>
                <th className="border border-gray-300 px-4 py-2 text-xs sm:text-sm">
                  ON DESK / LATE REGISTRATION
                </th>
                <th className="border border-gray-300 px-4 py-2 text-xs sm:text-sm">EARLY BIRD</th>
                <th className="border border-gray-300 px-4 py-2 text-xs sm:text-sm">
                  LATE REGISTRATION
                </th>
                <th className="border border-gray-300 px-4 py-2 text-xs sm:text-sm">
                  EXTRA CHARGE PER PAGE
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-4 py-2 text-xs sm:text-sm">
                  ACADEMIC ATTENDEE
                </td>
                <td className="border border-gray-300 px-4 py-2 text-xs sm:text-sm">$600 USD</td>
                <td className="border border-gray-300 px-4 py-2 text-xs sm:text-sm">$700 USD</td>
                <td className="border border-gray-300 px-4 py-2 text-xs sm:text-sm">$250 USD</td>
                <td className="border border-gray-300 px-4 py-2 text-xs sm:text-sm">$300 USD</td>
                <td className="border border-gray-300 px-4 py-2 text-xs sm:text-sm">$50</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 text-xs sm:text-sm">
                  STUDENT ATTENDEE
                </td>
                <td className="border border-gray-300 px-4 py-2 text-xs sm:text-sm">$400 USD</td>
                <td className="border border-gray-300 px-4 py-2 text-xs sm:text-sm">$500 USD</td>
                <td className="border border-gray-300 px-4 py-2 text-xs sm:text-sm">$250 USD</td>
                <td className="border border-gray-300 px-4 py-2 text-xs sm:text-sm">$300 USD</td>
                <td className="border border-gray-300 px-4 py-2 text-xs sm:text-sm">$50</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 text-xs sm:text-sm">
                  GENERAL ATTENDEE
                </td>
                <td className="border border-gray-300 px-4 py-2 text-xs sm:text-sm">$700 USD</td>
                <td className="border border-gray-300 px-4 py-2 text-xs sm:text-sm">$800 USD</td>
                <td className="border border-gray-300 px-4 py-2 text-xs sm:text-sm">$300 USD</td>
                <td className="border border-gray-300 px-4 py-2 text-xs sm:text-sm">$400 USD</td>
                <td className="border border-gray-300 px-4 py-2 text-xs sm:text-sm">$75</td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <td
                  colSpan={6}
                  className="border border-gray-300 px-4 py-2 text-red-600 font-semibold text-center text-xs sm:text-sm"
                >
                  50% DISCOUNT FOR ONSITE PARTICIPANTS FROM UZBEKISTAN
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    );
  };
  
  export default RegistrationTable;
  