import Arrivals from "@/components/Arrivals";
import Customers from "@/components/Customers";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Offers from "@/components/Offers";
import DressStyle from "@/components/Style";
import TopHeader from "@/components/Topheader";
import TopSelling from "@/components/Topselling";
import React from "react";

const Home = () => {
  return (
    <div>
      <TopHeader/>
      <Header/>
      <Hero/>
      <Arrivals/>
      <TopSelling/>
      <DressStyle/>
      <Customers/>
      <Offers/>
      <Footer/>
    </div>
  );
};

export default Home;