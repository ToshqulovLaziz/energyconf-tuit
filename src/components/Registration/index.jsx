const RegistrationTable = () => {
  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold text-center mb-6">REGISTRATION</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-300 text-center text-gray-700">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-300 px-4 py-2">
                REGISTRATION TYPE AND FEES
              </th>
              <th className="border border-gray-300 px-4 py-2" colSpan={2}>
                ONSITE PRESENTATION
              </th>
              <th className="border border-gray-300 px-4 py-2" colSpan={2}>
                ONLINE PRESENTATION
              </th>
              <th className="border border-gray-300 px-4 py-2">
                ADDITIONAL PAGES FEE
              </th>
            </tr>
            <tr className="bg-gray-100">
              <th className="border border-gray-300 px-4 py-2"></th>
              <th className="border border-gray-300 px-4 py-2">EARLY BIRD</th>
              <th className="border border-gray-300 px-4 py-2">
                ON DESK / LATE REGISTRATION
              </th>
              <th className="border border-gray-300 px-4 py-2">EARLY BIRD</th>
              <th className="border border-gray-300 px-4 py-2">
                LATE REGISTRATION
              </th>
              <th className="border border-gray-300 px-4 py-2">
                EXTRA CHARGE PER PAGE
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-300 px-4 py-2">
                ACADEMIC ATTENDEE
              </td>
              <td className="border border-gray-300 px-4 py-2">$600 USD</td>
              <td className="border border-gray-300 px-4 py-2">$700 USD</td>
              <td className="border border-gray-300 px-4 py-2">$250 USD</td>
              <td className="border border-gray-300 px-4 py-2">$300 USD</td>
              <td className="border border-gray-300 px-4 py-2">$50</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2">
                STUDENT ATTENDEE
              </td>
              <td className="border border-gray-300 px-4 py-2">$400 USD</td>
              <td className="border border-gray-300 px-4 py-2">$500 USD</td>
              <td className="border border-gray-300 px-4 py-2">$250 USD</td>
              <td className="border border-gray-300 px-4 py-2">$300 USD</td>
              <td className="border border-gray-300 px-4 py-2">$50</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2">
                GENERAL ATTENDEE
              </td>
              <td className="border border-gray-300 px-4 py-2">$700 USD</td>
              <td className="border border-gray-300 px-4 py-2">$800 USD</td>
              <td className="border border-gray-300 px-4 py-2">$300 USD</td>
              <td className="border border-gray-300 px-4 py-2">$400 USD</td>
              <td className="border border-gray-300 px-4 py-2">$75</td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td
                colSpan={6}
                className="border border-gray-300 px-4 py-2 text-red-600 font-semibold text-center"
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
