import { useState } from "react";
import logo from "../assets/triomphantLogoWhite2.png";

const menu = [
  {
    text: "Home",
    event: () => {},
  },
  {
    text: "Services",
    event: () => {},
  },
  {
    text: "Agency",
    event: () => {},
  },
  {
    text: "Contact",
    event: () => {},
  },
  {
    text: "Hachi7aja",
    event: () => {},
  },
];

function Navbar() {
  const [hidden, setHidden] = useState(false);
  const [hidden2, setHidden2] = useState(false);

  const handlHidden2 = () => {
    setHidden2((prev) => !prev);
  };

  const navMenu = menu.map((item, index) => (
    <li
      onClick={item.event}
      key={index}
      className={
        hidden2
          ? "my-4 font-semibold text-white cursor-pointer"
          : "my-4 text-xl font-semibold text-white cursor-pointer"
      }
    >
      <h1>{item.text}</h1>
    </li>
  ));

  return (
    <div className="z-50 absolute top-0 left-0 w-full h-20 bg-background flex items-center justify-center">
      <div className=" z-40 w-11/12 flex justify-between items-center">
        <img src={logo} alt="logo" className="lg:w-60 w-36 cursor-pointer" />
        <ul className="lg:flex w-96 hidden justify-around">{navMenu}</ul>
        <div
          onClick={handlHidden2}
          className="lg:hidden block p-2 w-20 rounded-l-full rounded-r-full bg-design text-center cursor-pointer"
        >
          <h1 className="text-white font-medium">Menu</h1>
        </div>
        <div
          onClick={() => {}}
          className="lg:block hidden p-2 w-20 rounded-l-full rounded-r-full bg-design text-center cursor-pointer"
        >
          <h1 className="text-white font-medium">CTA</h1>
        </div>
      </div>
      {hidden2 ? (
        <></>
      ) : (
        <div className="z-30 lg:hidden fixed top-0 left-0 w-screen h-screen bg-black/40">
          <div className="flex flex-col w-full h-full bg-background">
            <div className="h-20 p-4 flex justify-between items-center"></div>
            <ul className="flex p-10  w-full flex-col justify-around">
              {navMenu}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;
