import { RiSettingsFill } from "react-icons/ri";
import { TbSquareKey, TbDiscount2 } from "react-icons/tb";
import { FiCodesandbox } from "react-icons/fi";
import { BiUser } from "react-icons/bi";
import {
  MdOutlineKeyboardArrowRight,
  MdOutlineLiveHelp,
  MdKeyboardArrowDown,
} from "react-icons/md";
import { RiCustomerService2Fill } from "react-icons/ri";
import { CgProfile } from "react-icons/cg";
import "./SideBar.css";
// import { useState } from "react";

const SideBar = () => {
  return (
    <aside id="sidebar">
      <div className="sidebar-title">
        <div className="sidebar-title-name">
          <RiSettingsFill className="icon_header" /> Dashboard
        </div>
      </div>

      <ul className="sidebar-list">
        <li className="sidebar-list-item">
          <a href="">
            <BiUser className="icon" /> Dashboard
          </a>
        </li>
        <li className="sidebar-list-item">
          <a href="">
            <FiCodesandbox className="icon" /> Products
            <MdOutlineKeyboardArrowRight />
          </a>
        </li>
        <li className="sidebar-list-item">
          <a href="">
            <TbSquareKey className="icon" /> Customers
            <MdOutlineKeyboardArrowRight />
          </a>
        </li>
        <li className="sidebar-list-item">
          <a href="">
            <RiCustomerService2Fill className="icon" /> Income
            <MdOutlineKeyboardArrowRight />
          </a>
        </li>
        <li className="sidebar-list-item">
          <a href="">
            <TbDiscount2 className="icon" /> Promote
            <MdOutlineKeyboardArrowRight />
          </a>
        </li>
        <li className="sidebar-list-item">
          <a href="">
            <MdOutlineLiveHelp className="icon" /> Help
            <MdOutlineKeyboardArrowRight />
          </a>
        </li>
      </ul>

      <div className="sidebar-bottom-item">
        <span className="image">
          <CgProfile />
        </span>
        <span className="name">
          <pre>Evano </pre>
        </span>
        <span className="arrow">
          <MdKeyboardArrowDown />
        </span>
      </div>
    </aside>
  );
};

export default SideBar;
