import Image from "next/image";
import logo from "../../public/logo/Laura-Bon-logo.svg";
export default function Header() {
  return (
    <nav className="flex bg-blue-900 items-center ">
      <Image
        className="flex items-center pl-5"
        src={logo}
        alt="laurabon logo"
        height={150}
        width={150}
        priority
      />
      <div className=" flex text-white p-2 items-center space-x-3 justify-end ">
        <div className="flex gap-3 justify-end">
          <ul className="flex list-none gap-5 ">
            <li>HOME</li>
            <li>ABOUT US</li>
            <li>ARTICLE & VIDEOS</li>
            <li>CONTACT</li>
          </ul>
          <button className="bg-white p-1 rounded text-blue-800" type="submit">
            DONATE
          </button>
        </div>
      </div>
    </nav>
  );
}
