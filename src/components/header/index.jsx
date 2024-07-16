import { NavLink } from "react-router-dom";

import headerLogo from "../../assets/images/header/logo.svg";
import globelcon from "../../assets/images/icons/globe-icon.svg";

const Index = () => {
  const dropDownBtn = () => {
    const dropDownList = document.querySelector(".drop-down__list");

    dropDownList.classList.toggle("open");
  };

  const dropDownItem = (item) => {
    item.stopPropagation();

    const btn = document.querySelector(".drop-down-btn");

    btn.innerText = item.target.innerText;
  };

  document.addEventListener("click", function (e) {
    const btn = document.querySelector(".drop-down-btn");
    const dropDownList = document.querySelector(".drop-down__list");

    if (e.target !== btn) {
      dropDownList.classList.remove("open");
    }
  });

  const handleSubmit = () => {
    const headerList = document.querySelector(".header__list");
    const headerMobile = document.querySelector(".header__mobile");

    headerList.classList.toggle("mobile");
    headerMobile.classList.toggle("active");

  };

  return (
    <header className="site-header h-[106px] pt-[37px] pb-[28px] bg-[--header-bg]">
      <div className="container">
        <div className="row flex items-center justify-between">
          <NavLink
            to="/"
            className={
              "inline-block outline-none hover:opacity-[80%] active:opacity-[75%] z-[1]"
            }
          >
            <img src={headerLogo} alt="header-logo" />
          </NavLink>
          <div className="flex items-center">
            <ul className="header__list hidden gap-x-[40px] mr-[51px] lg:flex items-center header__list--open">
              <li>
                <NavLink to={"#!"} className={"header__link font-semibold"}>
                  Yangiliklar
                </NavLink>
              </li>
              <li>
                <NavLink to={"#!"} className={"header__link font-semibold"}>
                  Xizmatlar
                </NavLink>
              </li>
              <li>
                <NavLink to={"#!"} className={"header__link font-semibold"}>
                  Hodimlar
                </NavLink>
              </li>
              <li>
                <NavLink to={"#!"} className={"header__link font-semibold"}>
                  Vakansiya
                </NavLink>
              </li>
            </ul>

            <button
              type="button"
              className="btn mr-[40px] hidden text-[14px] font-bold active:relative active:top-[1px] lg:block"
            >
              Bog’lanish
            </button>

            <div className="drop-down relative hidden sm:block">
              <div className="uppercase text-[14px] font-semibold">
                <div className="relative">
                  <button
                    onClick={dropDownBtn}
                    type="button"
                    className="drop-down-btn flex items-center w-[95px] h-[40px] gap-x-3 pt-2 pb-2 pr-[48px] pl-[11px] uppercase text-[14px] font-semibold border-[1px] border-[--border-clr] rounded-[8px]"
                  >
                    <p>uz</p>
                  </button>
                  <img
                    src={globelcon}
                    alt="globelcon"
                    className="absolute right-[10px] top-[50%] translate-y-[-50%]"
                  />
                </div>
                <ul className="drop-down__list absolute left-0 top-[100%] w-full bg-transparent border-[1px] border-[--border-clr] rounded-b-[8px]">
                  <li
                    onClick={dropDownItem}
                    className="drop-down__item mb-2 pt-2 pb-2 pr-[10px] pl-[11px] hover:bg-[--accent] cursor-pointer"
                  >
                    <p>ru</p>
                  </li>
                  <li
                    onClick={dropDownItem}
                    className="drop-down__item pt-2 pb-2 pr-[10px] pl-[11px] relative hover:bg-[--accent] rounded-b-[8px] cursor-pointer"
                  >
                    <p>eng</p>
                  </li>
                  <li
                    onClick={dropDownItem}
                    className="drop-down__item pt-2 pb-2 pr-[10px] relative pl-[11px] hover:bg-[--accent] rounded-b-[8px] cursor-pointer"
                  >
                    <p>uz</p>
                  </li>
                </ul>
              </div>
            </div>

            <button
              onClick={handleSubmit}
              type="button"
              className="header__mobile ml-[20px] relative flex items-center justify-center lg:hidden"
            ></button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Index;
