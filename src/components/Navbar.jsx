import React from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
  Card,
} from "@material-tailwind/react";
import Logo from "../assets/logo.png";
import { Link } from "react-router-dom";

export default function StickyNavbar() {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <Link
          to="/licenselist"
          className="flex items-center font-poppins text-xl hover:text-orange-600"
        >
          Expire License
        </Link>
      </Typography>
    </ul>
  );

  return (
    <div className="px-3 lg:px-0">
      <Navbar className="mx-auto w-full py-2 px-4 lg:px-8 lg:py-4 mt-3">
        <div className="container mx-auto flex items-center justify-between text-blue-gray-900">
          <Link to="/">
            <div className="flex items-center h-[3rem]">
              <img
                src={Logo}
                className="w-[5rem] h-[5rem] object-cover"
                alt=""
              />
              <Typography
                variant="h4"
                color="red"
                textGradient
                as="a"
                href="#"
                className="mr-4 cursor-pointer py-1.5 font-bold font-poppins"
              >
                License
              </Typography>
            </div>
          </Link>
          <div className="hidden lg:block">{navList}</div>
          <IconButton
            variant="text"
            className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
            ripple={false}
            onClick={() => setOpenNav(!openNav)}
          >
            {openNav ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                className="h-6 w-6"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </IconButton>
        </div>
        <MobileNav open={openNav}>
          <div className="container mx-auto">{navList}</div>
        </MobileNav>
      </Navbar>
    </div>
  );
}
