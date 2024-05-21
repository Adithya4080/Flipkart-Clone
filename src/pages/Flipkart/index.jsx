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
        <div>

          
          <div className="h-[3777px] mt-[21px] relative">
            <div className="justify-center w-full h-full left-0 bottom-0 right-0 top-0 m-auto absolute">
              <div className="w-full mx-auto md:p-5 max-w-[1440px]">
                <div className="h-[3777px] relative">
                  <div className="justify-center h-[3777px] w-full left-0 bottom-0 right-0 top-0 m-auto bg-white-A700 absolute" />
                
                  
                  
                  
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
                <footer className="flex justify-center items-center p-[52px] md:p-5 bg-gray-900">
                  <div className="flex justify-center w-[85%] mb-0.5 mr-[85px]">
                    <div className="flex flex-col items-center justify-center w-full">
                      <div className="self-stretch">
                        <div className="flex md:flex-col justify-between items-start gap-5">
                          <div className="flex md:flex-col justify-center items-start w-[64%] md:w-full">
                            <div className="flex flex-col w-[27%] md:w-full">
                              <Heading as="h6">ABOUT</Heading>
                              <div className="flex flex-col mt-[18px]">
                                <div className="flex justify-center items-center">
                                  <div className="flex flex-col items-start">
                                    <a href="#">
                                      <Text as="p" className="tracking-[-0.28px]">
                                        Contact Us
                                      </Text>
                                    </a>
                                    <a href="#" className="mt-1">
                                      <Text as="p" className="tracking-[-0.28px]">
                                        About Us
                                      </Text>
                                    </a>
                                    <a href="#" className="mt-[3px]">
                                      <Text as="p" className="tracking-[-0.28px]">
                                        Careers
                                      </Text>
                                    </a>
                                    <ul className="flex flex-col items-start gap-20">
                                      <li>
                                        <a href="#">
                                          <Text as="p" className="tracking-[-0.28px]">
                                            Flipkart Stories{" "}
                                          </Text>
                                        </a>
                                      </li>
                                      <li>
                                        <a href="#">
                                          <Text as="p" className="tracking-[-0.28px]">
                                            Press
                                          </Text>
                                        </a>
                                      </li>
                                    </ul>
                                  </div>
                                  <Text as="p" className="self-end tracking-[0.70px]">
                                    Flipkart Wholesale
                                  </Text>
                                </div>
                              </div>
                              <Text as="p" className="tracking-[-0.28px]">
                                Corporate Information
                              </Text>
                            </div>
                            <div className="flex justify-between items-start ml-[59px] gap-5 flex-1">
                              <div className="flex flex-col items-start gap-[22px]">
                                <Heading as="h6" className="ml-2">
                                  HELP
                                </Heading>
                                <div className="flex flex-col items-start gap-0.5">
                                  <a href="#">
                                    <Text as="p" className="tracking-[0.70px]">
                                      Payments
                                    </Text>
                                  </a>
                                  <a href="#">
                                    <Text as="p" className="tracking-[0.70px]">
                                      Shipping
                                    </Text>
                                  </a>
                                  <Text as="p" className="tracking-[0.70px]">
                                    Cancellation & Returns
                                  </Text>
                                  <Text as="p" className="tracking-[0.70px]">
                                    FAQ
                                  </Text>
                                  <a href="#">
                                    <Text as="p" className="tracking-[0.70px]">
                                      Report Infringement
                                    </Text>
                                  </a>
                                </div>
                              </div>
                              <div className="flex flex-col items-start gap-[21px]">
                                <Heading as="h6">POLICY</Heading>
                                <ul className="flex flex-col items-start">
                                  <li>
                                    <a href="#">
                                      <Text as="p" className="tracking-[0.70px]">
                                        Return Policy
                                      </Text>
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#">
                                      <Text as="p" className="tracking-[0.70px]">
                                        Terms Of Use
                                      </Text>
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#">
                                      <Text as="p" className="tracking-[0.70px]">
                                        Security
                                      </Text>
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#">
                                      <Text as="p" className="tracking-[0.70px]">
                                        Privacy
                                      </Text>
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#">
                                      <Text as="p" className="tracking-[0.70px]">
                                        Sitemap
                                      </Text>
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#">
                                      <Text as="p" className="tracking-[0.70px]">
                                        EPR Compliance
                                      </Text>
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className="flex flex-col ml-[90px] gap-[22px]">
                              <Heading as="h6">SOCIAL</Heading>
                              <ul className="flex flex-col self-start items-start">
                                <li>
                                  <a href="#">
                                    <Text as="p" className="tracking-[0.70px]">
                                      Facebook
                                    </Text>
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <Text as="p" className="tracking-[0.70px]">
                                      YouTube
                                    </Text>
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <Text as="p" className="tracking-[0.70px]">
                                      Twitter
                                    </Text>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="flex flex-col w-[22%] md:w-full gap-8">
                            <Heading as="h6">MAIL Us:</Heading>
                            <Text as="p" className="tracking-[0.70px]">
                              <>
                                Flipkart Internet Private Limited,
                                <br />
                                Buildings Alyssa, Begonia &<br />
                                Clove Embassy Tech Village,
                                <br />
                                Outer Ring Road, <br />
                                Devarabeesanahalli Village,
                                <br />
                                Bengaluru, 560103,
                                <br />
                                Karnataka, India
                              </>
                            </Text>
                          </div>
                        </div>
                      </div>
                      <div className="h-px w-[93%] mt-[33px] bg-blue_gray-100" />
                      <div className="flex justify-between items-center w-[50%] md:w-full mt-[9px] gap-5">
                        <div className="flex justify-center items-center w-[39%]">
                          <div className="h-full w-px bg-blue_gray-400" />
                          <Text size="xs" as="p" className="self-start ml-[7px] !text-blue_gray-400 tracking-[0.50px]">
                            Advertise
                          </Text>
                          <div className="h-full w-px ml-2.5 bg-blue_gray-400" />
                          <Text size="xs" as="p" className="self-start ml-2 !text-blue_gray-400 tracking-[0.50px]">
                            Gift Cards
                          </Text>
                          <div className="h-full w-px ml-1 bg-blue_gray-400" />
                          <Text size="xs" as="p" className="self-start ml-[5px] !text-blue_gray-400 tracking-[0.50px]">
                            Help Center
                          </Text>
                        </div>
                        <Text size="xs" as="p" className="self-start !text-blue_gray-400 tracking-[0.50px]">
                          © 2007-2022 Flipkart.com
                        </Text>
                      </div>
                    </div>
                  </div>
                </footer>
              </div>
            </div>
            <Img
              src="images/img_image_18.png"
              alt="imageeighteen"
              className="h-[346px] w-[20%] right-0 bottom-0 top-0 my-auto object-cover absolute"
            />
            <div className="w-[2%] h-max right-0 bottom-0 top-0 my-auto absolute">
              <div className="h-[434px] bg-gradient" />
            </div>
          </div>
        </div>
    </>
  );
}
