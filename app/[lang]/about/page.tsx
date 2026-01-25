import AboutForm from "./AboutForm";
import Users from "./Users";

const AboutPage = async () => {
  return (
    <div className="flex gap-10">
      <div className="flex-1"><AboutForm></AboutForm></div>
      <div className="flex-1"><Users></Users></div>
    </div>
  );
};

export default AboutPage;
