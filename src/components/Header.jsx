import { useEffect } from "react";
import {
  Navbar,
  Typography,
} from "@material-tailwind/react";

import { useStateValue } from "../context/StateProvider";
import { actionType } from "../context/reducer";
import { MdShoppingBasket } from "react-icons/md";
import { Link } from "react-router-dom";



export default function Navigationbar() {
  const [{ cartShow, cartItems }, dispatch] = useStateValue();

  useEffect(() => {
    window.addEventListener("resize", () => window.innerWidth >= 960);
  }, []);

  const showCart = () => {
    dispatch({
      type: actionType.SET_CART_SHOW,
      cartShow: !cartShow,
    });
  };


  const navList = (
    <ul className="mb-4 mt-2 flex flex-row gap-2 lg:mb-0 lg:mt-0  lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal hidden lg:block"
      >
        <a href="#" className="flex items-center text-white">
          Home
        </a>
      </Typography>

      <Typography
        as="li"
        href="#menu"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal hidden lg:block"
      >
        <a href="#menu" className="flex items-center text-white">
          Menu
        </a>
      </Typography>

      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal hidden lg:block"
      >
        <a href="#footer" className="flex items-center text-white">
          Footer
        </a>
      </Typography>


      <div
        className="relative flex items-center justify-center"
        onClick={showCart}
      >
        <MdShoppingBasket className="text-textColor text-2xl  cursor-pointer" />
        {cartItems && cartItems.length > 0 && (
          <div className=" absolute -top-2 -right-2 w-5 h-5 rounded-full bg-cartNumBg flex items-center justify-center">
            <p className="text-xs text-white font-semibold">
              {cartItems.length}
            </p>
          </div>
        )}
      </div>
    </ul>
  );

  return (
    <>
      <Navbar
        className="sticky bg-slate-900 inset-0 z-10 h-max max-w-full rounded-none py-2 px-4 
      lg:px-8 lg:py-4 overflow-visible">
        <div className="flex items-center justify-between text-blue-gray-900">
          <Link to={"/"}>
            <Typography
              as="a"
              href="#"
              className="mr-4 cursor-pointer py-1.5 font-medium text-white">
              Bakso Pilus
            </Typography>
          </Link>
          <div className="flex items-center gap-4">
            <div className="mr-4">{navList}</div>

          </div>
        </div>
      </Navbar>

    </>
  );
}
