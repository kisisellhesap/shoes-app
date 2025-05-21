import { useState, type FC } from "react";
import { FaUser } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";
import useUser from "../hooks/useUser";
import useAuth from "../hooks/useAuth";
import { Link } from "react-router-dom";

const Header: FC = () => {
  // const { user, isAuthenticated } = useUser();
  const { logout } = useAuth();

  const [panel, setPanel] = useState<boolean>(false);

  // console.log(user, isAuthenticated);
  const handleLogout = () => {
    logout.mutate();
  };

  return (
    <header className="flex items-center justify-between gap-4 bg-white  rounded-lg p-5 text-black-bg relative">
      <nav className="font-bold flex gap-5 text-lg max-[1200px]:hidden">
        <span className="cursor-pointer">New Drops</span>
        <span className="cursor-pointer">Men</span>
        <span className="cursor-pointer">Women</span>
      </nav>
      <span className="cursor-pointer hidden max-[1200px]:block text-2xl">
        <RxHamburgerMenu />
      </span>
      <img src="./logo.svg" alt="logo" />
      <div className="flex items-center gap-5 text-2xl">
        <span className="cursor-pointer">
          <IoSearch />
        </span>
        <span
          className="cursor-pointer flex gap-3 items-center"
          onClick={() => setPanel(!panel)}
        >
          <FaUser /> <span className="text-sm">Flycode </span>
        </span>

        {panel && (
          <div className="absolute top-20 right-0 flex flex-col  text-center bg-white p-3 rounded-lg">
            <Link
              to="/admin"
              className="cursor-pointer text-sm text-black-bg  p-2 font-bold hover:bg-black-bg hover:text-white"
            >
              Admin Paneli
            </Link>
            <Link
              to="/login"
              className="cursor-pointer text-sm text-black-bg hover:bg-black-bg hover:text-white p-2 font-bold "
              onClick={handleLogout}
            >
              Çıkış Yap
            </Link>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
