import React from "react";
import { Helmet } from "react-helmet";
import { Img, Text, Heading, Input } from "../../components";
import NavbarTop from "components/Navbar/NavbarTop";
import NavbarBottom from "components/Navbar/NavbarBottom";
import Spotlight from "../../components/Screen/Home/Spotlight"
import FeaturedProduct from "components/Screen/Home/FeaturedProduct";
import Ad from "components/Screen/Home/Ad";
import Products from "components/Screen/Home/Products";
import Categories from "components/Screen/Home/Categories";
import Grocery from "components/Screen/Home/Grocery";
import Footer from "components/Screen/Footer/Footer";
import Navbar from "components/Navbar/Navbar";


export default function FlipkartPage() {
  const [sliderState, setSliderState] = React.useState(0);
  const sliderRef = React.useRef(null);

  return (
    <>
        <Helmet>
            <title>Flipkart</title>
            <meta name="description" content="Web site created using create-react-app" />
        </Helmet>
        <Navbar />
        {/* <NavbarBottom /> */}
        <Spotlight />
        {/* <FeaturedProduct /> */}
        <Ad />
        <Categories />
        <Products />
        <Grocery />
        <Footer />     
    </>
  );
}
