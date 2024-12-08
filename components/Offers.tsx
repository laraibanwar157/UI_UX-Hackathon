import React from "react";
import Image from "next/image";

const Offers = () => {
    return (
        <div>
            <div>
                <div className="w-[358px] h-[293px] mt-[47px] ml-[16px] rounded-[20px] bg-[#000000] flex flex-col">
                    <h1 className="w-[297px] h-[105px] mt-[32px] ml-[24px] font-extrabold text-[30px] leading-[32px] text-[#FFFFFF]">STAY UPTO DATE ABOUT OUR LATEST OFFERS</h1>
                    <div className="w-[311px] h-[42px] mt-[20px] ml-[24px] px-[16px] py-[12px] rounded-[62px] gap-[12px] bg-[#FFFFFF] flex flex-row">
                        <div className="w-[20px] h-[20px]">
                            <Image src={"/images/Email_Icon.svg"} alt="Email_Icon" width={16.88} height={13.13} className="mt-[3.44px] ml-[1.56px]"/>
                        </div>
                        <input type="text" placeholder="Enter your email address" className="w-[155px] h-[19px] text-[14px] leading-[18.9px] text-[#000000] opacity-[40%]"/>
                    </div>
                    <button className="w-[311px] h-[42px] mt-[20px] ml-[24px] px-[70px] py-[12px] rounded-[62px] gap-[12px] bg-[#FFFFFF]">
                        <h1 className="w-[150px] h-[19px] font-medium text-[14px] leading-[18.9px] text-[#000000]">Subscribe to Newsletter</h1>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Offers;