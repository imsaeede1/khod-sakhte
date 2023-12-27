"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

function SideBar() {
  const pathname = usePathname();
  const logoutHandler = () => {
    document.location.href = "/";
  };

  return (
    <div>
      <ul className="flex flex-col space-y-8">
        <li>
          <Link href="/">صفحه اصلی</Link>
        </li>
        <li className={pathname === "/profile" ? "text-purple-600" : ""}>
          <Link href="/profile">داشبورد</Link>
        </li>
        <li>
          <button onClick={logoutHandler}>خروج از حساب کاربری</button>
        </li>
      </ul>
    </div>
  );
}
export default SideBar;
