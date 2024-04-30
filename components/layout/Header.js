import React from "react";
import Image from "next/image";
import logo from "@/images/logo.png";
import Link from "next/link";
function Header() {
  return (
    <div className="bg-slate-100 flex justify-between border-2 px-40 border-black py-2 items-center">
      <div>
        <Image src={logo} alt="logo" height={40} width={40} />
      </div>
      <div className="w-1/4 flex justify-between items-center text-xl">
        <Link href="/">Home</Link>
        <Link href="/weather">Weather</Link>
      </div>
    </div>
  );
}

export default Header;
