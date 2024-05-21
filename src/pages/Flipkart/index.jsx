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


export default function FlipkartPage() {
  const [sliderState, setSliderState] = React.useState(0);
  const sliderRef = React.useRef(null);

  return (
    <>
      <Helmet>
        <title>Flipkart</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <NavbarTop />
      <NavbarBottom />
      <Spotlight />
      <FeaturedProduct />
      <Ad />
      <Categories />
      <Products />
        

          
          
            
        <div className="w-full mx-auto md:p-5 max-w-[1440px]">
            <div className="h-[3777px] relative">
                <div className="h-[463px] w-[83%] bottom-[2%] right-0 left-0 m-auto absolute">
                    <div className="flex justify-center w-full h-full left-0 bottom-0 right-0 top-0 p-[11px] m-auto bg-gradient1 absolute rounded-[30px]">
                      <div className="flex md:flex-col justify-between items-center w-[94%] mt-[17px] mb-[35px] gap-5">
                        <div className="flex flex-col w-[47%] md:w-full gap-[19px]">
                          <Text size="6xl" as="p" className="flex">
                            <span className="text-teal_900 font-bold">Flipkart Grocery:</span>
                            <span className="text-white-A700 font-bold">
                              <>
                                {" "}
                                Your
                                <br />
                                New Go-to Online
                                <br />
                                Grocery Store
                              </>
                            </span>
                          </Text>
                          <Text size="4xl" as="p" className="w-[94%] md:w-full">
                            <>
                              Whether you work from home or office or other <br />
                              workplaces, daily items are a requsite foe everybody
                            </>
                          </Text>
                          <Input shape="round" name="edittext" className="w-[48%] ml-2" />
                        </div>
                        <div className="h-[389px] w-[47%] relative">
                          <div className="h-[338px] w-[68%] right-0 top-0 m-auto bg-blue-600_23 absolute rounded-[175px]" />
                          <div className="h-[338px] w-[68%] bottom-0 left-0 m-auto bg-blue-600_23 absolute rounded-[175px]" />
                        </div>
                      </div>
                    </div>
                    <Img
                      src="images/img_image_31.png"
                      alt="imagethirtyone"
                      className="h-[374px] w-[51%] bottom-[7%] right-0 m-auto object-cover absolute"
                    />
                  </div>
                </div>
                
            </div>
    </>
  );
}
