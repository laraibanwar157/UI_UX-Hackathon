import React from "react";
import Image from "next/image";

const Arrivals = () => {
    return (
        <div>
            <div className="overflow-x-hidden overflow-y-hidden">
                <h1 className="w-[269px] h-[38px] mt-[47px] ml-[61px] font-bold leading-[38.4px] text-[32px] text-center">NEW ARRIVALS</h1>
                <div className="flex flex-row">
                    {/* 1st box */}
                    <div className="flex flex-col">
                        <div className="w-[198px] h-[200.01px] mt-[35px] ml-[16px] rounded-[33.42px] bg-[#F0EEED]">
                            <Image src={"/images/Frame 32.svg"} alt="Arrival_1" width={198} height={200.01}/>
                        </div>
                        <div className="flex flex-col">
                            <h1 className="w-[198px] h-[22px] text-[14px] leading-[21.6px] font-bold ml-[16px] mt-1">T-SHIRT WITH TAPE DETAILS</h1>
                            <div className="w-[127px] h-[16px] ml-[16px] gap-[11px] mt-1 flex flex-row">
                                <Image src={"/images/Four_Stars.svg"} alt="Stars" width={87} height={15.47}/>
                                <p className="w-[29px] h-[16px] text-[14px] leading-[16.2px]">4.5/<span className="opacity-[60%]">5</span></p>
                            </div>
                            <h1 className="w-[46px] h-[27px] text-[20px] leading-[27px] font-bold ml-[16px] mt-1">$120</h1>
                        </div>
                    </div>

                    {/* 2nd row */}
                    <div className="flex flex-col">
                        <div className="w-[198px] h-[200.01px] mt-[35px] ml-[16px] rounded-[33.42px] bg-[#F0EEED]">
                            <Image src={"/images/Frame 58.svg"} alt="Arrival_2" width={160} height={200.01}/>
                        </div>
                        <div className="flex flex-col">
                            <h1 className="w-[198px] h-[22px] text-[14px] leading-[21.6px] font-bold ml-[16px] mt-1">SKINNY FIT JEANS</h1>
                            <div className="w-[106.09.px] h-[16px] ml-[16px] gap-[11px] mt-1 flex flex-row">
                                <Image src={"/images/Three_Stars.svg"} alt="Stars" width={87} height={15.47}/>
                                <p className="w-[29px] h-[16px] text-[14px] leading-[16.2px]">3.5/<span className="opacity-[60%]">5</span></p>
                            </div>
                            <div className="flex flex-row">
                                <h1 className="w-[51px] h-[27px] text-[20px] leading-[27px] font-bold ml-[16px] mt-1 ">$240</h1>
                                <h1 className="w-[51px] h-[27px] text-[20px] leading-[27px] font-bold mt-1 line-through opacity-[40%]">$260</h1>
                                <button className="w-[47px] h-[20px] px-[14px] py-[3px] gap-[12px] rounded-[62px] bg-[#FF3333] bg-opacity-[10%] mt-2 flex">
                                    <h1 className="w-[26px] h-[14px] font-medidum text-[#FF3333] text-[10px] leading-[13.5px]">-20%</h1>
                                </button>
                            </div>
                        </div>
                    </div>

                </div>

                <button className="w-[358px] h-[46px] px-[140px] py-[16px] gap-[12px] rounded-[62px] bg-[#FFFFFF] bg-opacity-[10%] mt-[30px] ml-[16px] border-[1px] border-[#000000] border-opacity-[20%]">
                    <h1 className="w-[51px] h-[19px] font-medium text-[#000000] text-[14px] leading-[18.9px]">View All</h1>
                </button>

                <div className="w-[358px] ml-[16px] mt-[50px] border-[1px] border-[#000000] border-opacity-[10%]"></div>

            </div>
        </div>
    );
};

export default Arrivals;