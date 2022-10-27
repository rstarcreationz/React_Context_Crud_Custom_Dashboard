import React from "react";
import {
  MdOutlineNotificationsNone,
  MdOutlineSettings,
  MdSearch,
} from "react-icons/md";
import { FaAngleUp, FaAngleDown } from "react-icons/fa";
import TheDropDown from "../Reusable/DropDown/TheDropDown";
import { DashboardDropdown } from "../Reusable/DropDown/dropdownlist";

export default function TheHeader() {
  return (
    <React.Fragment>
      <header>
        <div className="_header_flex_bar">
          <div className="_searchbar">
            <span>
              <MdSearch />
            </span>
            <input type="text" name="search" />
          </div>
          <div className="_notification_bar">
            <ul>
              <li>
                <MdOutlineSettings />
              </li>
              <li>
                <MdOutlineNotificationsNone />
              </li>
              <li>
                <div className="_dropdown_wrap">
                  <div className="_flex_dropdown">
                    <img
                      src="https://image.shutterstock.com/image-photo/head-shot-portrait-close-smiling-260nw-1714666150.jpg"
                      alt="profile-image"
                    />
                    <h6>Rizwan</h6>
                    <div className="_angle_area">
                      <span className="angleup">
                        <FaAngleUp />
                      </span>
                      <span className="_angledown">
                        <FaAngleDown />
                      </span>
                    </div>
                  </div>

                  <TheDropDown listarray={DashboardDropdown} />
                </div>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </React.Fragment>
  );
}
