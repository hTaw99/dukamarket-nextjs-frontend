"use client";

import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

import { FiPhoneCall } from "react-icons/fi";
// import 'flag-icon-css/css/flag-icon.min.css';
// import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { setLng } from "@/store/features/globalSlice";

export default function Topbar() {
  const dispatch = useDispatch();
  const { currentLng } = useSelector((state) => state.global);
  // const { t } = useTranslation();

  return (
    <nav className="py-2 text-white border-b bg-primary bg-primary-0 border-neutral-700">
      <div className="container grid items-center grid-cols-2 lg:grid-cols-3">
        <div className="flex items-center">
          <button
            className={`text-xs capitalize ${
              currentLng === "ar" && "opacity-50 cursor-default"
            }`}
            onClick={() => dispatch(setLng({ lang: "ar", dir: "rtl" }))}
          >
            عربي{" "}
            <span className="m-1 rounded-full flag-icon flag-icon-eg"></span>
          </button>
          <span className="items-center hidden mx-2 text-gray-200 sm:flex">
            |
          </span>
          <button
            className={`text-xs capitalize ${
              currentLng === "en" && "opacity-50 cursor-default"
            }`}
            onClick={() => dispatch(setLng({ lang: "en", dir: "ltr" }))}
          >
            english{" "}
            <span className="m-1 rounded-full flag-icon flag-icon-gb"></span>
          </button>
        </div>
        <div className="hidden lg:block justify-self-center">
          {/* {t("topbar-sale")} */}
          Summer sale discount off 50% !
        </div>
        <ul className="flex justify-self-end">
          <li className="items-center hidden sm:flex">
            <FiPhoneCall className="ltr:mr-2 rtl:ml-2" />
            0111 598 2393
          </li>
          <li className="items-center hidden mx-2 text-gray-200 sm:flex">|</li>
          <li>
            <a
              href="https://www.facebook.com"
              target="_blank"
              className="flex items-center justify-center w-8 h-8 transition duration-300 rounded-full hover:bg-[#3b5a9a]"
              aria-label="Go to Facebook"
            >
              <FaFacebookF />
            </a>
          </li>
          <li>
            <a
              href="https://www.facebook.com"
              target="_blank"
              className="flex items-center justify-center w-8 h-8 transition duration-300 rounded-full hover:bg-[#1aa9e1]"
              aria-label="Go to Twitter"
            >
              <FaTwitter />
            </a>
          </li>
          <li>
            <a
              href="https://www.facebook.com"
              target="_blank"
              className="flex items-center justify-center w-8 h-8 transition duration-300 rounded-full hover:bg-[#f56040]"
              aria-label="Go to Instagram"
            >
              <FaInstagram />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
