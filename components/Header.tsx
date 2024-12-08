import React from "react";
import Image from "next/image";

const Header = () => {
    return (
        <div className="flex">
            <div className="w-[24px] h-[24px] mt-[54px] ml-[16px]">
                <Image src={"/images/Menu.svg"} alt="Menu" width={18.75} height={14.25} className="mt-[4.88px] ml-[2.63px]"/>
            </div>
            <h1 className="w-[126px] h-[18px] mt-[50px] ml-[26px] font-extrabold text-[25.2px] leading-[30.24px] text-[#000000]">SHOP.CO</h1>
            <div className="w-[96px] h-[24px] mt-[54px] ml-[78px] gap-[12px] flex flex-row">
                <div className="w-[24px] h-[24px]">
                    <Image src={"/images/Search_Bar.svg"} alt="Search" width={20.27} height={20.27} className="mt-[1.86px] ml-[1.86px]"/>
                </div>
                <div className="w-[24px] h-[24px]">
                    <Image src={"/images/Cart.svg"} alt="Cart" width={22.13} height={20.25} className="mt-[1.88px]"/>
                </div>
                <div className="w-[24px] h-[24px]">
                    <Image src={"/images/User_icon.svg"} alt="User" width={20.25} height={20.25} className="mt-[1.88px] ml-[1.88px]"/>
                </div>
            </div>
        </div>
    );
};

export default Header;