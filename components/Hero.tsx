import React from "react";
import Image from "next/image";

const Hero = () => {
    return (
        <div className="flex flex-col">
            <div className="w-[390px] h-[853px] mt-[44px] bg-[#F2F0F1] flex flex-col">
                <h1 className="w-[315px] h-[93px] mt-[40px] ml-[16px] font-extrabold text-[36px] leading-[34px] text-[#000000]">FIND CLOTHES THAT MATCHES YOUR STYLE</h1>
                <p className="w-[358px] h-[50px] mt-[33px] ml-[16px] text-[14px] leading-[20px] opacity-[60%]">Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.</p>
                <button className="w-[358px] h-[52px] mt-[35px] ml-[16px] rounded-[62px] px-[140px] py-[16px] gap-[12px] bg-[#000000]">
                    <h1 className="w-[75px] h-[22px] font-medium text-[16px] leading-[21.6px] text-[#FFFFFF]">Shop Now</h1>
                </button>
                <div>
                    {/* 1st row */}
                    <div className="w-[278px] h-[52px] mt-[90px] ml-[56px] justify-between flex flex-row">
                        <div className="w-[106px] h-[48px] flex flex-col text-[#000000]">
                            <h1 className="w-[64px] h-[32px] font-bold text-[24px] leading-[32.4px]">200+</h1>
                            <p className="w-[116px] h-[22px] text-[12px] leading-[22px] opacity-[60%]">International Brands</p>
                        </div>
                        <div className="h-[52px] border-[#000000] border-[1px] opacity-[10%]"></div>
                        <div className="w-[117px] h-[48px] flex flex-col text-[#000000]">
                            <h1 className="w-[88px] h-[32px] font-bold text-[24px] leading-[32.4px]">2,000+</h1>
                            <p className="w-[117px] h-[22px] text-[12px] leading-[22px] opacity-[60%]">High-Quality Products</p>
                        </div>
                    </div>
                    {/* 2nd row */}
                    <div className="w-[103px] h-[48px] ml-[144px] mt-[30px] flex flex-col text-[#000000]">
                        <h1 className="w-[103px] h-[32px] font-bold text-[24px] leading-[32.4px]">30,000+</h1>
                        <p className="w-[100px] h-[22px] text-[12px] leading-[22px] opacity-[60%]">Happy Customers</p>
                    </div>
                </div>
                <div className="w-[390px] h-[448px] mt-[30px] bg-[#F2F0F1] relative">
                    <Image src={"/images/Hero-Star.svg"} alt="Hero_Star" width={76} height={76} className="mt-[30px] ml-[293px] absolute"/>
                    <Image src={"/images/Hero-Star.svg"} alt="Hero_Star" width={44} height={44} className="mt-[150px] ml-[27px] absolute"/>
                    <Image src={"/images/Hero-Image.svg"} alt="Hero-Image" width={390} height={448}/>
                </div>
            </div>

            <div className="w-[390px] h-[146px] mt-[140px] bg-[#000000]">
                <div className="flex flex-col mt-[20px]">
                    <div className="flex flex-row gap-[10px]">
                        <div className="w-[116.74px] h-[23.25px] mt-[30px] ml-[16px]">
                            <Image src={"/images/Versace.svg"} alt="Versace" width={116.74} height={23.25}/>
                        </div>
                        <div className="w-[63.81px] h-[26.65px] mt-[30px] ml-[16px]">
                            <Image src={"/images/Zara.svg"} alt="Zara" width={63.81} height={26.65}/>
                        </div>
                        <div className="w-[109.39px] h-[25.24px] mt-[30px] ml-[16px]">
                            <Image src={"/images/Gucci.svg"} alt="Gucci" width={109.39} height={22.64}/>
                        </div>
                    </div>
                    <div className="flex flex-row">
                        <div className="w-[127px] h-[21px] mt-[20px] ml-[50px]">
                            <Image src={"/images/Prada.svg"} alt="Prada" width={127} height={20.47}/>
                        </div>
                        <div className="w-[134.84px] h-[21.75px] mt-[20px] ml-[25px]">
                           <Image src={"/images/Calvin_Klein.svg"} alt="Calvin Klein" width={134.84} height={21.75}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;