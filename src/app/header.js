import Image from "next/image";
import logo_kiri from "../../public/image/logo_kiri.png";

export default function Header() {
  return (
    <div className="w-screen">
  <div className="px-6  top-0 fixed z-[2] w-full">
    <nav className="flex justify-between items-center mt-4">
      <Image src={logo_kiri} className=" sm:w-auto sm:h-12 h-6 w-auto " />
      <ul className="flex space-x-4 text-white sm:text-2xl text-sm ">
        <li><a href="#" >HOME</a></li>
        <li><a href="#" >ABOUT</a></li>
        <li><a href="#" >SERVICE</a></li>
        <li><a href="#" >PRODUCTS</a></li>
        <li><a href="#" >CONTACT</a></li>
      </ul> 
    </nav>
    </div>
    </div>
  );
}
