import React from "react";
import Image from "next/image";

const TopHeader = () => {
    return (
        <div>
            <div className="w-[390px] h-[34px] px-[50px] py-[9px] gap-[10px] bg-[#000000] text-[#FFFFFF]">
                <h1 className="w-[301px] h-[16px] text-[12px] leading-[16.2px]">Sign up and get 20% off to your first order.<span className="font-medium underline"> Sign Up Now</span></h1>
            </div>
        </div>
    );
};

export default TopHeader;