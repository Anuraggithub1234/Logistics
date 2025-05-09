import React  from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AboutUs from './HomeContents/AboutUs/About';
import Carousel from './HomeContents/MyCarousel/Carousel';
import HeroSection from './HomeContents/Hero/HeroSection';
import WhyChooseUs from './HomeContents/Choose/WhyChooseUs';
import ClientSays from './HomeContents/Clients/ClientSays';
import MembersCarousel from './HomeContents/Member/MembersCarousel';
import MyFooter from './HomeContents/Footer/MyFooter';
import LiveClocks from './HomeContents/Clock/LiveClocks';
import Quote from './HomeContents/MyQuote/Quote';



function MyHome() {

  return (
   <>
   <Carousel/>
   <AboutUs/>
   <HeroSection/>
   <WhyChooseUs/>
   <LiveClocks/>
   <Quote/>
   <ClientSays/>
   <MembersCarousel/>
   <MyFooter/>


   
   </>
  );
}

export default MyHome;
