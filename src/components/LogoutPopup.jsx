import logout from "../assets/images/logout.png";
import { useSelector } from "react-redux";
import Heading from "./Styles/Heading";
import Description from "./Styles/Description";

const LogoutPopup = () => {
  const username = useSelector((state) => state.user.username);
  return (
    <>
      <div className="bg-white flex flex-col items-center h-[300px] w-[300px] rounded-lg">
        <img src={logout} alt="" className="h-[165px] w-[165px]"/>
        <Heading text={"Hi, " + username} />
        <Description text={"Are you sure you want to logout"} />

        <div className="flex gap-5 mt-5">
            <button className="w-[100px] rounded-md border border-[#242565] text-[#242565] bg-white font-poppins text-xs px-5 py-2">No</button>
            <button className="w-[100px] rounded-md border border-[#242565] text-white bg-[#242565] font-poppins text-xs px-5 py-2">Confirm</button>
        </div>
      </div>
    </>
  );
};

export default LogoutPopup;
