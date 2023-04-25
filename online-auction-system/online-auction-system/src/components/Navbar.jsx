import React, { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../AuthContext";
import { getAuth,signOut } from "firebase/auth";
import Search from "./Search";

const Navbar = () => {
  const { authentic, setAuthentic } = useContext(AuthContext);  
  const handleLogout = () => {
    console.log("button clicked");
    
    const auth = getAuth();
    signOut(auth).then(() => {
      // Update the authentic state to false
      setAuthentic(false);
    }).catch((error) => {
      console.error(error);
    });
  }

  return (
    <>
      <nav className="bg-gray-900 shadow-lg">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 justify-between">
            <Link to="/">
              <div className="flex flex-shrink-0 items-center text-4xl font-bold text-white">
                DealSteal
              </div>
            </Link>
            <div className="flex items-center">
              <div className="hidden md:block">
                <Link
                  to="/categories"
                  className="rounded-md px-3 py-2 text-sm font-medium text-gray-100 hover:bg-gray-700 hover:text-gray-100"
                >
                  Categories
                </Link>
                <Link
                  to="/patents"
                  className="rounded-md px-3 py-2 text-sm font-medium text-gray-100 hover:bg-gray-700 hover:text-gray-100"
                >
                  Patents
                </Link>
              </div>
            </div>
            <Search />
            <div className="flex items-center">
              <div className="hidden md:block">
                <Link
                  to="/sell"
                  className="rounded-md px-3 py-2 text-sm font-medium text-gray-100 hover:bg-gray-700 hover:text-gray-100"
                >
                  Sell
                </Link>
                <Link
                  to="/about"
                  className="rounded-md px-3 py-2 text-sm font-medium text-gray-100 hover:bg-gray-700 hover:text-gray-100"
                >
                  About Us
                </Link>
                {!authentic && (
                  <Link
                    to="/login"
                    className="rounded-md px-3 py-2 text-sm font-medium text-gray-100 hover:bg-gray-700 hover:text-gray-100"
                  >
                    LogIn
                  </Link>
                )}
                {!authentic && (
                  <Link
                    to="/signup"
                    className="rounded-md px-3 py-2 text-sm font-medium text-gray-100 hover:bg-gray-700 hover:text-gray-100"
                  >
                    SignUp
                  </Link>
                )}
                {authentic && (
                <Link
                  to="/mybids"
                  className="rounded-md px-3 py-2 text-sm font-medium text-gray-100 hover:bg-gray-700 hover:text-gray-100"
                >
                  My Bids
                </Link>
                )}
                {authentic && (
                  <button onClick={handleLogout}
                  to="/"
                  className="rounded-md px-3 py-2 text-sm font-medium text-gray-100 hover:bg-gray-700 hover:text-gray-100"
                >
                  LogOut
                </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;