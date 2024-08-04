import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSidebarItem } from "../redux/sidebar/sidebarSlice";
import { useNavigate } from "react-router-dom";

import dashboardImage from "../assets/images/sidebar/dashboard.png";
import createAndScheduleImage from "../assets/images/sidebar/createAndSchedule.png";
import contentManagementImage from "../assets/images/sidebar/contentManagement.png";
import engagementImage from "../assets/images/sidebar/engagement.png";
import automationImage from "../assets/images/sidebar/automation.png";
import adsAndCampaignImage from "../assets/images/sidebar/adsAndCampaign.png";
import contentLibraryImage from "../assets/images/sidebar/contentLibrary.png";
import analyticsAndReportImage from "../assets/images/sidebar/analyticsAndReport.png";
import competitorAnalysisImage from "../assets/images/sidebar/competitorAnalysis.png";
import manageImage from "../assets/images/sidebar/manage.png";
import settingsImage from "../assets/images/sidebar/settings.png";
import logoutImage from "../assets/images/sidebar/logout.png";

import CreateAndScheduleHoverButtons from "./SidebarHoverButtons/CreateAndScheduleHoverButtons";
import ContentManagementHoverButtons from "./SidebarHoverButtons/ContentManagementHoverButtons";
import EngagementHoverButtons from "./SidebarHoverButtons/EngagementHoverButtons";
import AdsCampaignHoverButtons from "./SidebarHoverButtons/AdsCampaignHoverButtons";
import ContentLibraryHoverButtons from "./SidebarHoverButtons/ContentLibraryHoverButtons";
import CompetitorAnalysisHoverButtons from "./SidebarHoverButtons/CompetitorAnalysisHoverButtons";
import LogoutPopup from "./LogoutPopup";

const sidebarItems = [
  { image: dashboardImage, label: "Dashboard" },
  { image: createAndScheduleImage, label: "Create and schedule" },
  { image: contentManagementImage, label: "Content Management" },
  { image: engagementImage, label: "Engagement" },
  { image: automationImage, label: "Automation" },
  { image: adsAndCampaignImage, label: "ADs and Campaign" },
  { image: contentLibraryImage, label: "Content library" },
  { image: analyticsAndReportImage, label: "Analytics and Reports" },
  { image: competitorAnalysisImage, label: "Competitor Analysis" },
  { image: manageImage, label: "Manage" },
  { image: settingsImage, label: "Settings" },
  { image: logoutImage, label: "Logout" },
];

const SidebarComp = () => {
  const [hoveredItem, setHoveredItem] = useState(null);
  const [showLogoutPopup, setShowLogoutPopup] = useState(false);
  const activeItem = useSelector((state) => state.sidebar.sidebarItem);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const renderHoverButtons = (label) => {
    switch (label) {
      case "Create and schedule":
        return <CreateAndScheduleHoverButtons />;
      case "Content Management":
        return <ContentManagementHoverButtons />;
      case "Engagement":
        return <EngagementHoverButtons />;
      case "ADs and Campaign":
        return <AdsCampaignHoverButtons />;
      case "Content library":
        return <ContentLibraryHoverButtons />;
      case "Competitor Analysis":
        return <CompetitorAnalysisHoverButtons />;
      default:
        return null;
    }
  };

  const handleSidebarItemClick = (label) => {
    if (label === "Logout") {
      setShowLogoutPopup(true);
    } else {
      dispatch(setSidebarItem(label));
      if (label !== activeItem) {
        navigate("/");
      }
    }
  };

  const closeLogoutPopup = () => {
    setShowLogoutPopup(false);
  };

  const confirmLogout = () => {
    console.log("Logged out");
    setShowLogoutPopup(false);
  };

  return (
    <div className="flex">
      <div className="w-[256px] h-screen bg-white p-6 relative">
        <ul>
          <li className="font-bold text-2xl pb-10">LOGO</li>
          {sidebarItems.slice(0, 10).map((item, index) => (
            <div
              key={index}
              className={`flex py-4 px-2 cursor-pointer items-center relative ${
                activeItem === item.label ? "bg-[#F5F6FA] border-r-4 border-[#0A075F]" : ""
              }`}
              onClick={() => {
                handleSidebarItemClick(item.label);
              }}
              onMouseEnter={() => setHoveredItem(item.label)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <img src={item.image} alt={item.label} className="h-5 w-5" />
              <li className="pl-4 text-sm">{item.label}</li>
              {hoveredItem === item.label && renderHoverButtons(item.label)}
            </div>
          ))}
          <div className="pt-20">
            {sidebarItems.slice(10).map((item, index) => (
              <div
                key={index}
                className={`flex py-4 px-2 cursor-pointer items-center ${
                  activeItem === item.label ? "bg-[#F5F6FA] border-r-4 border-[#0A075F]" : ""
                }`}
                onClick={() => handleSidebarItemClick(item.label)}
              >
                <img src={item.image} alt={item.label} className="h-5 w-5" />
                <li className="pl-4 text-sm">{item.label}</li>
              </div>
            ))}
          </div>
        </ul>
      </div>
      <div className="flex-grow">
        {showLogoutPopup && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <LogoutPopup onClose={closeLogoutPopup} onConfirm={confirmLogout} />
          </div>
        )}
      </div>
    </div>
  );
};

export default SidebarComp;
