import React, { useContext } from "react";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { Link } from "react-router-dom";
import { ThemeContext } from "../mode/DarkLight";

const Navbar = () => {
  const { theme, taggleTheme } = useContext(ThemeContext);
 
  return (
    <nav className="bg-slate-50 border-b-2 py-6">
      <div className="container">
        <div className="flex items-center justify-between">
          <Link
            to="/"
            className="font-secondary font-bold text-3xl text-blue-950 items-center"
          >
            WellnessVista
          </Link>
          <div className="flex items-center gap-36">
            <ul className="hidden lg:flex flex-row gap-8 ">
              <li>
                <Link className="font-primary font-medium text-lg hover:text-[#dd8036]">
                  Home
                </Link>
              </li>
              <li>
                <Link className="font-primary font-medium text-lg">
                  About Us
                </Link>
              </li>
              <li>
                <Link className="font-primary font-medium text-lg">
                  Service
                </Link>
              </li>
              <li>
                <Link className="font-primary font-medium text-lg">
                  Doctors
                </Link>
              </li>
              <li>
                <Link className="font-primary font-medium text-lg">Blog</Link>
              </li>
            </ul>
            <div className="flex items-center gap-8">
              <div className="flex">
                {theme === "light" ? (
                  <button className="text-3xl bg-slate-300 rounded-full w-8 h-8 flex justify-center items-center">
                    <MdDarkMode />
                  </button>
                ) : (
                  <button className="text-3xl bg-slate-800 text-white rounded-full w-8 h-8 flex justify-center items-center">
                    <MdLightMode />
                  </button>
                )}
              </div>
              <div className="lg:flex hidden">
                <button className="bg-[#dd8036] px-3 py-2 rounded-lg font-secondary">
                  Contact Us
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
