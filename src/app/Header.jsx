"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { GoHome } from "react-icons/go";
import { RiUserLine } from "react-icons/ri";
import { GiTeacher } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import { IoMenu } from "react-icons/io5";
import { MdOutlineSpeakerNotes } from "react-icons/md";
import { FaFigma } from "react-icons/fa";
import { FiPhoneCall } from "react-icons/fi";

const Header = () => {
  const [isToggled, setIsToggled] = useState(false);

  const handleClick = () => {
    setIsToggled(!isToggled);
  };
  const pathname = usePathname();

  const content = (
    <>
      <div className="border-l shadow-2xl border-gray-200 bg-white flex flex-col justify-between  h-screen text-dark lg:hidden w-64 transition fixed top-0 right-0">
        <ul className="p-3 flex flex-col justify-start text-gray-700">
          <li className="border-b border-gray-200 text-center pb-3">منو</li>
          <li
            className={
              pathname === "/" ? "text-purple-600 bg-purple-50 rounded-md" : ""
            }
          >
            <Link className="flex gap-3 text-sm p-4" href="/">
              <GoHome className="w-5 h-5" />
              صفحه اصلی
            </Link>
          </li>
          <li
            className={
              pathname === "/profile"
                ? "text-purple-600 bg-purple-50 rounded-md"
                : ""
            }
          >
            <Link className="flex gap-3 text-sm p-4" href="/profile">
              <RiUserLine className="w-5 h-5" />
              حساب کاربری
            </Link>
          </li>
          <li
            className={
              pathname === "/products"
                ? "text-purple-600 bg-purple-50 rounded-md"
                : ""
            }
          >
            <Link className="flex gap-3 text-sm p-4" href="/products">
              <GiTeacher className="w-5 h-5 " />
              دوره ها
            </Link>
          </li>
          <li
            className={
              pathname === "/faq"
                ? "text-purple-600 bg-purple-50 rounded-md"
                : ""
            }
          >
            <Link className="flex gap-3 text-sm p-4" href="/faq">
              <MdOutlineSpeakerNotes className="w-5 h-5 " />
              درباره ما
            </Link>
          </li>
          <li
            className={
              pathname === "/about-us"
                ? "text-purple-600 bg-purple-50 rounded-md"
                : ""
            }
          >
            <Link className="flex gap-3 text-sm p-4" href="/about-us">
              <FaFigma className="w-5 h-5 " />
              درباره ما
            </Link>
          </li>
          <li
            className={
              pathname === "/profile"
                ? "text-purple-600 bg-purple-50 rounded-md"
                : ""
            }
          >
            <Link className="flex gap-3 text-sm p-4" href="/profile">
              <FiPhoneCall className="w-5 h-5 " />
              ارتباط با ما
            </Link>
          </li>
        </ul>
        <div className="flex  justify-between pr-4 mb-4">
          <div className="flex flex-col justify-center text-xs">
            <span>ارتباط با پشتیبانی</span>
            <span className="text-gray-700">۰۲۱-۴۵۶۵۶</span>
          </div>
          <Link className="block  pl-4" href="/">
            <Image src="/images/logo.png" width={130} height={40} />
          </Link>
        </div>
      </div>
    </>
  );
  return (
    <nav>
      <div className=" z-40 border-b border-gray-200 sticky top-0 transition-all duration-200 ">
        <div className="hidden lg:flex justify-between text-sm py-5 container xl:max-w-screen-xl ">
          <ul className="flex items-center">
            <li className={pathname === "/" ? "text-purple-600" : ""}>
              <Link className="block  pl-4" href="/">
                <Image src="/images/logo.png" width={130} height={40} />
              </Link>
            </li>
            <li className={pathname === "/" ? "text-purple-600" : ""}>
              <Link className="block  px-4" href="/">
                صفحه اصلی
              </Link>
            </li>
            <li className={pathname === "/products" ? "text-purple-600" : ""}>
              <Link className="block  px-4" href="/products">
                لیست دوره ها
              </Link>
            </li>
            <li className={pathname === "/about-us" ? "text-purple-600" : ""}>
              <Link className="block  px-4" href="/about-us">
                درباره ما
              </Link>
            </li>
            <li className={pathname === "/profile" ? "text-purple-600" : ""}>
              <Link className="block  px-4" href="/profile">
                ارتباط با ما
              </Link>
            </li>
          </ul>
          <div className="flex">
            <div className="flex flex-col justify-center px-6 mx-2">
              <span>ارتباط با پشتیبانی</span>
              <span className="text-gray-700">۰۲۱-۴۵۶۵۶</span>
            </div>
            <Link
              className="bg-purple-400 rounded-md text-white flex justify-center items-center px-5 py-3"
              href="/auth"
            >
              {" "}
              ورود و ثبت نام
            </Link>
          </div>
        </div>
        <div className="flex lg:hidden justify-between px-4 py-1">
          <button className="block lg:hidden transition" onClick={handleClick}>
            {" "}
            {isToggled ? (
              <IoClose className=" absolute z-50 w-6 h-6 top-3" />
            ) : (
              <IoMenu className="w-6 h-6" />
            )}
          </button>

          <Link className="block lg:hidden pl-4" href="/">
            <Image src="/images/logo.png" width={115} height={40} />
          </Link>
          <Link
            className="text-purple-400 rounded-md border text-xs border-purple-400 flex lg:hidden justify-center items-center px-2 py-1.5"
            href="/auth"
          >
            {" "}
            ورود و ثبت نام
          </Link>
        </div>

        <div>{isToggled && content}</div>
      </div>
    </nav>
  );
};
export default Header;
