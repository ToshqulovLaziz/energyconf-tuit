import CallForSponsors from "../components/CallSponsers";
import ContactUs from "../components/Contact";
import Header from "../components/Header";
import IHCIConference from "../components/IHCIConference";
import NavbarMenu from "../components/NavbarMenu";
import Organied from "../components/Orgenized";
import RegistrationTable from "../components/Registration";

const Root = () => {
  return (
    <>
      <Header />
      <NavbarMenu />
      <IHCIConference />
      <RegistrationTable />
      <CallForSponsors />
      {/* <Organied /> */}
      <ContactUs />
    </>
  );
};

export default Root;
