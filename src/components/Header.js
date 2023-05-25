import Image from "next/image";
import logo from "../../public/logo/Laura-Bon-logo.svg";
import { ShoppingCartIcon } from "@heroicons/react/solid";
export default function Header() {
  return (
    <nav className="w-full relative h-[293px] bg-[rgb(7,47,84)]  justify-between ">
      <div className="flex h-[75px] absolute text-white p-2 items-center space-x-3 justify-end ">
        <div className="text-white">
          <Image
            className=" bg-slate-50 ml-5 outline-none"
            src={logo}
            alt="laurabon logo"
            height={150}
            width={150}
            priority
          />
        </div>

        <div className="gap-3 justify-end h-[75]">
          <ul className="flex gap-5 ">
            <li>HOME</li>
            <li>ABOUT US</li>
            <li>ARTICLE & VIDEOS</li>
            <li>CONTACT</li>
          </ul>
        </div>
        <div className="flex">
          <button
            className="flex bg-white p-1 rounded text-blue-800"
            type="submit"
          >
            DONATE
          </button>
        </div>
      </div>
      <div className="flex bg-white absolute  h-[75px] mx-auto top-[75px] items-center">
        <div className="flex mx-auto w-screen ml-[331px] p-[10px] gap-[10px] space-x-2 py-5 items-center">
          <p className="text-[20px] text-[rgb(3,41,61)]">WATCH + LISTEN</p>
          <div className="h-5 border-[rgba(3,41,61,1)] border-l-2 "></div>
          <p className="text-[20px] text-[rgb(3,41,61)]">LAURABON FOUNDATION</p>
          <div className="h-5 border-[rgba(3,41,61,1)] border-l-2 "></div>
          <p className="text-[20px] text-[rgb(3,41,61)]">STUDY</p>
          <div className="h-5 border-[rgba(3,41,61,1)] border-l-2 "></div>
          <p className="text-[20px] text-[rgb(3,41,61)] flex gap-2 items-center">
            <ShoppingCartIcon className="h-8 w-8 text-gray-500" />
            SHOP
          </p>
        </div>
      </div>
    </nav>
  );
}
