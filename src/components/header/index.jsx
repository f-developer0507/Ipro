import { NavLink } from "react-router-dom";

import headerLogo from "../../assets/images/header/logo.svg";
import globelcon from "../../assets/images/icons/globe-icon.svg";
import { useState } from "react";

const Index = () => {
  const [value, setValue] = useState({});

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

  const openContacts = () => {
    const modalWrapper = document.querySelector(".modal-wrapper");

    modalWrapper.classList.add("add-contacts");
  };

  const handleSubmit = () => {
    const headerList = document.querySelector(".header__list");
    const headerMobile = document.querySelector(".header__mobile");

    headerList.classList.toggle("mobile");
    headerMobile.classList.toggle("active");
  };

  const handleChange = (e) => {
    const { value } = e.target;

    setValue([value]);
  };

  const handleFormSubmit = (e) => {
    const modalWrapper = document.querySelector(".modal-wrapper");

    e.preventDefault();
    e.stopPropagation();

    setValue({ ...value, value });

    e.target.reset();
    modalWrapper.classList.remove("add-contacts");
  };

  return (
    <div className="relative">
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
                onClick={openContacts}
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

      <div className="modal-wrapper fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-full h-full bg-[rgba(0,0,0,0.1)] backdrop-blur z-10">
        <div className="modal-card w-[732px] ">
          <h2 className="mb-[30px] text-[36px] font-bold leading-[44px]">
            Bog’lanish
          </h2>
          <form
            onSubmit={handleFormSubmit}
            className="flex flex-col gap-y-5 modal-form"
          >
            <ul className="flex flex-col gap-y-5">
              <li className="flex items-center w-full justify-between gap-x-[54px]">
                <label className="flex flex-col w-[50%]">
                  <span className="mb-[10px] text-[14px]">*Ism</span>
                  <input
                    onChange={handleChange}
                    name="user-name"
                    type="text"
                    className="w-[100%] p-5 h-[46px] bg-[--input-bg] rounded-lg outline-none border-[2px] border-transparent focus:border-[--accent]"
                  />
                </label>
                <label className="flex flex-col w-[50%]">
                  <span className="mb-[10px] text-[14px]">Firma nomi</span>
                  <input
                    onChange={handleChange}
                    name="firma nomi"
                    type="text"
                    className="w-[100%] p-5 h-[46px] bg-[--input-bg] rounded-lg outline-none border-[2px] border-transparent focus:border-[--accent]"
                  />
                </label>
              </li>
              <li className="flex items-center w-full justify-between gap-x-[54px]">
                <label className="flex flex-col w-[50%]">
                  <span className="mb-[10px] text-[14px]">*Telefon raqam</span>
                  <input
                    onChange={handleChange}
                    name="phone"
                    type="text"
                    className="w-[100%] p-5 h-[46px] bg-[--input-bg] rounded-lg outline-none border-[2px] border-transparent focus:border-[--accent]"
                  />
                </label>
                <label className="flex flex-col w-[50%]">
                  <span className="mb-[10px] text-[14px]">Xizmat turi</span>
                  <input
                    onChange={handleChange}
                    name="xizmat turi"
                    type="text"
                    className="w-[100%] p-5 h-[46px] bg-[--input-bg] rounded-lg outline-none border-[2px] border-transparent focus:border-[--accent]"
                  />
                </label>
              </li>
            </ul>
            <textarea
              onChange={handleChange}
              name="comment"
              placeholder="Izoh"
              className="mb-[10px] p-5 h-[200px] bg-[--input-bg] placeholder:text-[#FFF1F14A] outline-none rounded-lg border-[2px] border-transparent focus:border-[--accent]"
            ></textarea>
            <div>
              <button
                type="submit"
                className="form-btn font-bold text-[14px] leading-[17px]"
              >
                Yuborish
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Index;
