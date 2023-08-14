import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { IoHelpCircleOutline, IoLogOutOutline } from "react-icons/io5";
import { AiOutlineUnorderedList } from "react-icons/ai";
import { FiChevronDown } from "react-icons/fi";
import { useLogout } from "@/apis/auth";
import { BiUser } from "react-icons/bi";

export default function AccountMenu({ name }) {
  const { refetch: logoutUser } = useLogout();

  return (
    <Menu
      as="div"
      className=" relative md:inline-block text-left px-6 py-2 rounded md:border md:border-gray-600"
    >
      <div>
        <Menu.Button className="inline-flex flex-col items-center w-full text-sm text-white capitalize focus:outline-none">
          <h3 className="text-neutral-400 hidden md:block">Welcome</h3>
          <BiUser size={24} className="md:hidden "/>
          <div className="inline-flex items-center justify-center gap-1">
            <h2 className="capitalize text-xs md:text-sm">
              {name.split(" ")[0]}
            </h2>
            <FiChevronDown />
          </div>
        </Menu.Button>
      </div>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-50 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg w-44 ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="px-1 py-1 ">
            <Menu.Item>
              {({ active }) => (
                <button
                  type="button"
                  className={`${
                    active ? "bg-primary-1 text-white" : "text-gray-900"
                  } group flex w-full items-center rounded-md px-2 py-2 text-sm capitalize`}
                >
                  <AiOutlineUnorderedList
                    className={`w-5 h-5 mr-2 ${active && "text-white"}`}
                    aria-hidden="true"
                  />
                  my orders
                </button>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <button
                  type="button"
                  className={`${
                    active ? "bg-primary-1 text-white" : "text-gray-900"
                  } group flex w-full items-center rounded-md px-2 py-2 text-sm capitalize`}
                >
                  <IoHelpCircleOutline
                    className={`w-5 h-5 mr-2 ${active && "text-white"}`}
                    aria-hidden="true"
                  />
                  help
                </button>
              )}
            </Menu.Item>
          </div>
          <div className="px-1 py-1">
            <Menu.Item>
              {({ active }) => (
                <button
                  type="button"
                  onClick={() => logoutUser()}
                  className={`${
                    active ? "bg-primary-1 text-white" : "text-gray-900"
                  } group flex w-full items-center rounded-md px-2 py-2 text-sm capitalize`}
                >
                  <IoLogOutOutline
                    className={`w-5 h-5 mr-2 ${active && "text-white"}`}
                    aria-hidden="true"
                  />
                  log out
                </button>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
