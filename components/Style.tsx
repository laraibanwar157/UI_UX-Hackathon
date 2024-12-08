import React from "react";
import Image from "next/image";

const DressStyle = () => {
    return (
        <div>
            <div className="w-[358px] h-[975px] mt-[47px] ml-[16px] rounded-[20px] bg-[#F0F0F0] flex flex-col">
                <h1 className="w-[246px] h-[72px] mt-[40px] ml-[56px] text-[32px] leading-[36px] font-extrabold text-center">
                    BROWSE BY DRESS STYLE
                </h1>
                <div className="w-[310px] h-[190px] mt-[20px] ml-[24px] rounded-[20px] bg-[#FFFFFF] flex flex-row relative">
                    <h1 className="w-[76px] h-[32px] mt-[16px] ml-[24px] font-bold text-[24px] leading-[32.4px] text-[#000000] absolute">Casual</h1>
                    <Image src={"/images/Dress_Style_1.svg"} alt="Dress_Style_1" width={572} height={383} className="rounded-[20px]"/>
                </div>
                <div className="w-[310px] h-[190px] mt-[20px] ml-[24px] rounded-[20px] bg-[#FFFFFF] flex flex-row relative">
                    <h1 className="w-[77px] h-[32px] mt-[16px] ml-[24px] font-bold text-[24px] leading-[32.4px] text-[#000000] absolute">Formal</h1>
                    <Image src={"/images/Dress_Style_2.svg"} alt="Dress_Style_2" width={709} height={472} className="rounded-[20px]"/>
                </div>
                <div className="w-[310px] h-[190px] mt-[20px] ml-[24px] rounded-[20px] bg-[#FFFFFF] flex flex-row relative">
                    <h1 className="w-[59px] h-[32px] mt-[16px] ml-[24px] font-bold text-[24px] leading-[32.4px] text-[#000000] absolute">Party</h1>
                    <Image src={"/images/Dress_Style_3.svg"} alt="Dress_Style_3" width={389} height={311} className="rounded-[20px]"/>
                </div>
                <div className="w-[310px] h-[190px] mt-[20px] ml-[24px] rounded-[20px] bg-[#FFFFFF] flex flex-row relative">
                    <h1 className="w-[53px] h-[32px] mt-[16px] ml-[24px] font-bold text-[24px] leading-[32.4px] text-[#000000] absolute">Gym</h1>
                    <Image src={"/images/Dress_Style_4.svg"} alt="Dress_Style_4" width={285} height={425} className="rounded-[20px] ml-[60px]"/>
                </div>
            </div>
        </div>
    );
};

export default DressStyle;