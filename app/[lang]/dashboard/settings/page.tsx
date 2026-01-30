import Image from "next/image";
import myImg from "@/public/assets/my-photo.jpg";
const SettingsPage = () => {

  return (
    <div>
      <h2>This is settings Page</h2>
      <div className="w-96 border-2  border-teal-300 relative">
        <Image className="object-cover" fill src={myImg} alt="My Photo"></Image>
      </div>
    </div>
  );
};

export default SettingsPage;
