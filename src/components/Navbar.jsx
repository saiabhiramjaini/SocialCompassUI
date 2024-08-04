import searchIcon from "../assets/images/navbar/search.png";
import notification from "../assets/images/navbar/notifications.png";
import profile from "../assets/images/navbar/profile.png";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setUsername } from "../redux/user/userSlice";

const Navbar = () => {
  const dispatch = useDispatch();
  const username = useSelector((state) => state.user.username);

  useEffect(() => {
    dispatch(setUsername('Addie Bradford'));
  }, [dispatch]);

  return (
<div className="flex justify-between items-center p-2 bg-white">
      {/* Empty div */}
      <div>
       
      </div>

      {/* Search bar */}
      <div className="flex items-center relative">
        <img
          src={searchIcon}
          alt="Search Icon"
          className="absolute left-3 h-5 w-5"
        />
        <input
          type="text"
          className="border-none rounded-full w-[350px] h-9 pl-10 pr-4 shadow-sm placeholder-gray-500 placeholder-opacity-75 text-sm"
          placeholder="Search"
        />
      </div>

      {/* Profile */}
      <div className="flex items-center">
        {/* notifications icon */}
        <img src={notification} alt="Notifications" className="h-6 w-6 mr-6" />

        {/* username and dropdown */}
        <div className="flex items-center mr-4">
          <select className="text-sm mr-2 border border-none bg-white">
            <option value="">{username}</option>
          </select>
        </div>

        {/* profile picture */}
        <div>
          <img
            src={profile}
            alt="Profile"
            className="h-8 w-8 rounded-full relative"
          />
          <div className="bg-[#19F606] border-2 border-white rounded-full h-3 w-3 z-10 absolute right-[8px] top-[32px]"></div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
