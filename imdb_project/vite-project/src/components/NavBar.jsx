import React from "react";

import Logo from "../MovieLogo.png";

function NavBar() {
  return (
    <div className="flex space-x-8 items-center pl-3 py-4">
      <img className="w-[50px]" src={Logo} />

      <a href="/" className="text-blue-500 text-3xl font-bold">
        Movies
      </a>

      <a href="/watchlist" className="text-blue-500 text-3xl font-bold">
        Watchlist
      </a>
    </div>
  );
}

export default NavBar;
